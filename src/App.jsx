import { useState } from "react";
import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&query=${query}`
      );
      if (!response.ok) {
        throw new Error("Cannot obtain data");
      }
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(movies)
    const query = e.target.elements.search.value;
    searchMovies(query);
  };
  return (
    <>
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            placeholder="Search any movie or series"
          />
          <button type="submit">Search</button>
        </form>
        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
