import { useCallback, useEffect, useRef, useState } from "react";
import { searchMovies, type OmdbSearchItem } from "../services/omdb";

export type UseDiscoverMoviesResult = {
  movies: OmdbSearchItem[];
  loading: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;
  loadMore: () => Promise<void>;
  refetch: () => Promise<void>;
};

function parseYear(y?: string): number {
  const n = parseInt(y ?? "0", 10);
  return Number.isFinite(n) ? n : 0;
}

function dedupeByImdbId(items: OmdbSearchItem[]): OmdbSearchItem[] {
  const byId = new Map<string, OmdbSearchItem>();
  for (const item of items) {
    if (!byId.has(item.imdbID)) byId.set(item.imdbID, item);
  }
  return Array.from(byId.values());
}

export default function useDiscoverMovies(): UseDiscoverMoviesResult {
  const [movies, setMovies] = useState<OmdbSearchItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const abortRef = useRef<{ cancelled: boolean }>({ cancelled: false });

  const applyAndSort = useCallback((incoming: OmdbSearchItem[], replace: boolean) => {
    const merged = dedupeByImdbId(replace ? incoming : [...movies, ...incoming]);
    merged.sort((a, b) => parseYear(b.Year) - parseYear(a.Year));
    return merged;
  }, [movies]);

  const fetchPage = useCallback(async (pageToFetch: number, replace: boolean = false) => {
    setLoading(true);
    setError(null);
    const token = { cancelled: false };
    abortRef.current = token;
    try {
      // Use a broad query to emulate discovery; will be sorted by year locally
      const res = await searchMovies("the", pageToFetch);
      if (abortRef.current !== token || token.cancelled) return;
      if (res.Response === "False") {
        setError(res.Error ?? "Failed to fetch movies");
        setMovies([]);
        setHasMore(false);
        setPage(0);
        return;
      }
      const incoming = dedupeByImdbId(res.Search ?? []);
      const sorted = applyAndSort(incoming, replace);
      setMovies(sorted);
      // OMDb returns 10 results per page; mark hasMore based on whether we received any
      setHasMore((res.Search?.length ?? 0) > 0);
      setPage(pageToFetch);
    } catch (e: any) {
      if (abortRef.current !== token || token.cancelled) return;
      setError(e?.message ?? "Unknown error");
    } finally {
      if (abortRef.current === token && !token.cancelled) setLoading(false);
    }
  }, [applyAndSort]);

  // Initial: fetch first 2 pages to show 20 items
  useEffect(() => {
    let active = true;
    (async () => {
      await fetchPage(1, true);
      if (!active) return;
      await fetchPage(2, false);
    })();
    return () => {
      active = false;
      abortRef.current.cancelled = true;
    };
  }, [fetchPage]);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    await fetchPage(page + 1, false);
  }, [fetchPage, hasMore, loading, page]);

  const refetch = useCallback(async () => {
    abortRef.current.cancelled = true;
    setMovies([]);
    setHasMore(true);
    setPage(0);
    await fetchPage(1, true);
    await fetchPage(2, false);
  }, [fetchPage]);

  return { movies, loading, error, page, hasMore, loadMore, refetch };
}


