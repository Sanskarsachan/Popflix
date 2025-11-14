import { useCallback, useEffect, useState } from "react";
import { fetchTrendingMovies, type TmdbMovie } from "../services/tmdb";

export type UseTrendingMoviesResult = {
  movies: TmdbMovie[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
};

function mapError(err: unknown): string {
  if (err instanceof Error) return err.message;
  return "Failed to load trending movies.";
}

export default function useTrendingMovies(timeWindow: "day" | "week" = "week"): UseTrendingMoviesResult {
  const [movies, setMovies] = useState<TmdbMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const performFetch = useCallback(
    async (ignoreCancelled: () => boolean) => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchTrendingMovies(timeWindow);
        if (ignoreCancelled()) return;
        setMovies(data.results ?? []);
      } catch (err: unknown) {
        if (ignoreCancelled()) return;
        setMovies([]);
        setError(mapError(err));
      } finally {
        if (ignoreCancelled()) return;
        setLoading(false);
      }
    },
    [timeWindow]
  );

  useEffect(() => {
    let cancelled = false;
    void performFetch(() => cancelled);
    return () => {
      cancelled = true;
    };
  }, [performFetch]);

  const refetch = useCallback(async () => {
    await performFetch(() => false);
  }, [performFetch]);

  return { movies, loading, error, refetch };
}



