import { toast, Toaster } from "react-hot-toast";
import fetchMovies from "../../services/movieService";
import { SearchBar } from "../SearchBar/SearchBar";
import css from "./App.module.css";
import { useState } from "react";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async (query: string) => {
    const data = await fetchMovies(query);
    if (data.length === 0) {
      return toast.error("No movies found for your request.");
    }
    setMovies(data);
  }

  return (
    <div>
    <Toaster position="top-center" reverseOrder={false}/>
    <SearchBar onSubmit={handleSearch} />
    </div>
  )
}