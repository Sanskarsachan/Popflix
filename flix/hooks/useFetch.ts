import { useCallback, useEffect, useRef, useState } from "react";
import {
  searchMovies,
  type OmdbSearchItem,
} from "../services/omdb";

export type UseFetchMoviesResult = {
  movies: OmdbSearchItem[];
  loading: boolean;
  error: string | null;
  page: number;
  totalResults: number;
  hasMore: boolean;
  loadMore: () => Promise<void>;
  refetch: (nextQuery?: string) => Promise<void>;
};

function dedupeByImdbId(items: OmdbSearchItem[]): OmdbSearchItem[] {
  const byId = new Map<string, OmdbSearchItem>();
  for (const item of items) {
    if (!byId.has(item.imdbID)) byId.set(item.imdbID, item);
  }
  return Array.from(byId.values());
}

export function useFetchMovies(query: string): UseFetchMoviesResult {
  const [movies, setMovies] = useState<OmdbSearchItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(0);

  const currentQueryRef = useRef<string>("");
  const abortRef = useRef<{ cancelled: boolean }>({ cancelled: false });

  const effectiveQuery = (query?.trim()?.length ?? 0) > 0 ? query.trim() : "";

  const fetchPage = useCallback(async (pageToFetch: number, replace: boolean = false) => {
    if (effectiveQuery.length === 0) {
      // No query: reset and skip fetching
      setMovies([]);
      setTotalResults(0);
      setPage(1);
      setLoading(false);
      setError(null);
      return;
    }
    setLoading(true);
    setError(null);
    const localToken = { cancelled: false };
    abortRef.current = localToken;
    try {
      const res = await searchMovies(effectiveQuery, pageToFetch);
      if (abortRef.current !== localToken || localToken.cancelled) return;
      if (res.Response === "False") {
        setError(res.Error ?? "Failed to fetch movies");
        setMovies([]);
        setTotalResults(0);
        setPage(1);
        return;
      }
      const incoming = dedupeByImdbId(res.Search ?? []);
      setMovies((prev) => dedupeByImdbId(replace ? incoming : [...prev, ...incoming]));
      setTotalResults(parseInt(res.totalResults ?? "0", 10) || 0);
      setPage(pageToFetch);
    } catch (e: any) {
      if (abortRef.current !== localToken || localToken.cancelled) return;
      setError(e?.message ?? "Unknown error");
    } finally {
      if (abortRef.current === localToken && !localToken.cancelled) setLoading(false);
    }
  }, [effectiveQuery]);

  // Initial and query-change fetch
  useEffect(() => {
    if (currentQueryRef.current === effectiveQuery) return;
    currentQueryRef.current = effectiveQuery;
    // reset
    setMovies([]);
    setTotalResults(0);
    setPage(1);
    // cancel any inflight
    abortRef.current.cancelled = true;
    if (effectiveQuery.length === 0) {
      setLoading(false);
      setError(null);
      return;
    }
    fetchPage(1, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [effectiveQuery]);

  const loadMore = useCallback(async () => {
    if (loading) return;
    const nextPage = page + 1;
    const expectedTotal = totalResults;
    if (expectedTotal > 0 && movies.length >= expectedTotal) return;
    await fetchPage(nextPage, false);
  }, [fetchPage, loading, movies.length, page, totalResults]);

  const refetch = useCallback(async (nextQuery?: string) => {
    if (typeof nextQuery === "string") {
      currentQueryRef.current = (nextQuery.trim().length > 0 ? nextQuery.trim() : "");
    }
    // cancel and re-request first page
    abortRef.current.cancelled = true;
    setMovies([]);
    setTotalResults(0);
    setPage(1);
    await fetchPage(1, true);
  }, [fetchPage]);

  const hasMore = effectiveQuery.length === 0 ? false : (totalResults === 0 ? false : movies.length < totalResults);

  return {
    movies,
    loading,
    error,
    page,
    totalResults,
    hasMore,
    loadMore,
    refetch,
  };
}

export default useFetchMovies;

