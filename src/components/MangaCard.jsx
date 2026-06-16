import { Link } from "react-router-dom";

function MangaCard({ manga, onDelete }) {

  const favorites =
    JSON.parse(
      localStorage.getItem("favorites")
    ) || [];

  const isFavorite =
    favorites.includes(manga.id);

  const toggleFavorite = () => {

    let updated;

    if(isFavorite){
      updated =
        favorites.filter(
          id => id !== manga.id
        );
    }
    else{
      updated = [
        ...favorites,
        manga.id
      ];
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );

    window.location.reload();
  };

  return (
    <div className="card">

      <img
        src={manga.image}
        alt={manga.title}
      />

      <div className="card-body">

        <h3>{manga.title}</h3>

        <p>{manga.author}</p>

        <p>{manga.genre}</p>

        <div className="card-actions">

          <button
            className="btn btn-fav"
            onClick={toggleFavorite}
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>

          <Link
            className="btn btn-details"
            to={`/manga/${manga.id}`}
          >
            Details
          </Link>

          <Link
            className="btn btn-edit"
            to={`/edit/${manga.id}`}
          >
            Edit
          </Link>

          {onDelete && (
            <button
              className="btn btn-delete"
              onClick={() =>
                onDelete(manga.id)
              }
            >
              Delete
            </button>
          )}

        </div>

      </div>

    </div>
  );
}

export default MangaCard;