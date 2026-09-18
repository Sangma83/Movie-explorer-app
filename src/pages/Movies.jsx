import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("https://api.tvmaze.com/shows");

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();
      setMovies(data);
    } catch (error) {
      setError("Something went wrong. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };

  const searchMovies = async () => {
    if (!searchText.trim()) {
      fetchMovies();
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${searchText}`
      );

      if (!response.ok) {
        throw new Error("Search failed");
      }

      const data = await response.json();

      const searchResults = data.map((item) => item.show);

      setMovies(searchResults);
    } catch (error) {
      setError("Search failed. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("https://api.tvmaze.com/shows");

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();

        setMovies(data);
      } catch (error) {
        setError("Something went wrong. Please try again.", error);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies();
  };

  return (
    <div className=" bg-base-100">
     

      <section className="pt-24 px-4 pb-10 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold md:text-5xl">
              Explore Movies
            </h1>

            <p className="mt-3 text-base-content/60">
              Search for your favorite movies and discover new shows.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mb-12 flex max-w-2xl gap-2"
          >
            <input
              type="text"
              placeholder="Search for a movie..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="input input-bordered w-full"
            />

            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>

          {loading && (
            <div className="flex justify-center py-20">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          )}

          {error && (
            <div className="alert alert-error mx-auto max-w-xl">
              <span>{error}</span>
            </div>
          )}

          {!loading && !error && movies.length === 0 && (
            <div className="py-20 text-center">
              <h2 className="text-2xl font-semibold">
                No movies found
              </h2>
            </div>
          )}

          {!loading && !error && movies.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onDetails={setSelectedMovie}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </div>
  );
}

export default Movies;

