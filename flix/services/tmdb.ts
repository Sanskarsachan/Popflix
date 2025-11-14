const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export type TmdbMovie = {
  id: number;
  title?: string;
  name?: string;
  original_title?: string;
  original_name?: string;
  overview?: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
  vote_average?: number;
  release_date?: string;
  first_air_date?: string;
  media_type?: string;
};

export type TmdbTrendingResponse = {
  page: number;
  results: TmdbMovie[];
  total_pages: number;
  total_results: number;
};

function getTmdbApiKey(): string {
  const key = process.env.EXPO_PUBLIC_TMDB_API_KEY;
  if (!key || key.trim().length === 0) {
    throw new Error(
      "Missing EXPO_PUBLIC_TMDB_API_KEY. Provide a valid TMDB API key in your environment."
    );
  }
  return key;
}

async function fetchFromTmdb<T>(path: string, searchParams: URLSearchParams): Promise<T> {
  const apiKey = getTmdbApiKey();
  const url = new URL(`${TMDB_BASE_URL}${path}`);
  searchParams.set("api_key", apiKey);
  if (!searchParams.has("language")) {
    searchParams.set("language", "en-US");
  }
  url.search = searchParams.toString();

  const response = await fetch(url.toString(), {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`TMDB request failed: ${response.status} ${message}`);
  }

  return (await response.json()) as T;
}

export async function fetchTrendingMovies(timeWindow: "day" | "week" = "week"): Promise<TmdbTrendingResponse> {
  const params = new URLSearchParams({
    include_adult: "false",
  });
  return fetchFromTmdb<TmdbTrendingResponse>(`/trending/movie/${timeWindow}`, params);
}


