function MovieCard({ movie, onDetails }) {
  const image =
    movie.image?.medium ||
    "https://via.placeholder.com/300x450?text=No+Image";

  const year = movie.premiered
    ? new Date(movie.premiered).getFullYear()
    : "N/A";

  const rating = movie.rating?.average || "N/A";

  return (
    <div className="card bg-base-200 shadow-xl overflow-hidden">
      <figure className="h-80">
        <img
          src={image}
          alt={movie.name}
          className="h-full w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title line-clamp-1">{movie.name}</h2>

        <div className="flex items-center gap-3 text-sm">
          <span>⭐ {rating}</span>
          <span>•</span>
          <span>📅 {year}</span>
        </div>

        <div className="card-actions mt-3">
          <button
            onClick={() => onDetails(movie)}
            className="btn btn-primary btn-sm w-full"
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;