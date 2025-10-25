const OMDB_BASE_URL = "https://www.omdbapi.com/";

export type OmdbSearchItem = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export type OmdbSearchResponse = {
  Search?: OmdbSearchItem[];
  totalResults?: string;
  Response: "True" | "False";
  Error?: string;
};

export type OmdbMovieDetails = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  Response: "True" | "False";
  Error?: string;
};

function getApiKey(): string {
  const key = process.env.EXPO_PUBLIC_OMDB_API_KEY;
  if (!key || key.trim().length === 0) {
    throw new Error(
      "Missing EXPO_PUBLIC_OMDB_API_KEY. Set it in your env (e.g. .env or shell)."
    );
  }
  return key;
}

export async function searchMovies(query: string, page: number = 1): Promise<OmdbSearchResponse> {
  const apikey = getApiKey();
  const url = `${OMDB_BASE_URL}?apikey=${encodeURIComponent(apikey)}&s=${encodeURIComponent(
    query
  )}&page=${page}`;
  const res = await fetch(url);
  const data = (await res.json()) as OmdbSearchResponse;
  return data;
}

export async function getMovieById(imdbId: string, plot: "short" | "full" = "short"): Promise<OmdbMovieDetails> {
  const apikey = getApiKey();
  const url = `${OMDB_BASE_URL}?apikey=${encodeURIComponent(apikey)}&i=${encodeURIComponent(
    imdbId
  )}&plot=${plot}`;
  const res = await fetch(url);
  const data = (await res.json()) as OmdbMovieDetails;
  return data;
}


