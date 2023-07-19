import { useState, useEffect } from "react";
import axios from "axios";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const searchMovies = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?s=${query}&apikey=309635c9`
        );
        const movieData = response.data.Search;
        console.log(response.data.Search);
        setMovies(movieData || []);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    searchMovies();
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          className="border-b-2 border-b-white focus:ring-2 focus:ring-white text-white bg-slate-800/10 text-lg rounded-lg px-4 py-2 mb-9 flex-1 outline-none"
        />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <li
            key={movie.imdbID}
            className="dark:bg-slate-800 rounded-md p-4 shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2 hover:text-orange-300">
              {movie.Title}
            </h3>
            <p className="text-gray-500 hover:text-white mb-2 text-base">
              <span className="pr-4">Type: {movie.Type}</span>
              Year: {movie.Year}
            </p>
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "http://via.placeholder.com/404"
              }
              alt={movie.Title}
              className="w-full h-auto rounded-md"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
