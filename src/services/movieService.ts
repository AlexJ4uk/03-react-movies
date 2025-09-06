import axios from "axios";
import type { Movie } from "../types/movie";

interface MovieHTTPResponse {
    results: Movie[];
}

export default async function fetchMovies(topic: string): Promise<Movie[]> {
    const myKey = import.meta.env.VITE_API_KEY;
    const response = await axios.get<MovieHTTPResponse>(`https://api.themoviedb.org/3/movie/${topic}`, {
        headers: {
            Authorization: `Bearer ${myKey}`,
        },
    }
    );
        return response.data.results;
    }