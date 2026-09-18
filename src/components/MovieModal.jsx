import { MdClose } from "react-icons/md";

function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  const image =
    movie.image?.original ||
    movie.image?.medium ||
    "https://via.placeholder.com/800x500?text=No+Image";

  const rating = movie.rating?.average || "N/A";

  const releaseDate = movie.premiered || "N/A";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-base-100 shadow-2xl">
        <button
          onClick={onClose}
          className="btn btn-circle btn-sm absolute right-4 top-4 z-10 bg-black/60 text-white border-none"
        >
          <MdClose className="text-xl" />
        </button>

        <img
          src={image}
          alt={movie.name}
          className="h-64 w-full object-cover md:h-96"
        />

        <div className="p-6">
          <h2 className="text-3xl font-bold">{movie.name}</h2>

          <div className="mt-3 flex flex-wrap gap-3">
            <span className="badge badge-primary">
              ⭐ {rating}
            </span>

            <span className="badge badge-outline">
              📅 {releaseDate}
            </span>

            {movie.genres?.map((genre) => (
              <span key={genre} className="badge badge-outline">
                {genre}
              </span>
            ))}
          </div>

          <h3 className="mt-6 text-xl font-semibold">Overview</h3>

          <div
            className="mt-2 leading-7 text-base-content/70"
            dangerouslySetInnerHTML={{
              __html: movie.summary || "No summary available.",
            }}
          />

          <button onClick={onClose} className="btn btn-primary mt-6">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;