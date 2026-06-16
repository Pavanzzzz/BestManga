import { useEffect, useState } from "react";
import { getMangas } from "../services/app";
import MangaCard from "../components/MangaCard";

function Favorites() {
  const [favorites, setFavorites] =
    useState([]);

  useEffect(() => {
    const loadFavorites =
      async () => {
        const res =
          await getMangas();

        const favoriteIds =
          JSON.parse(
            localStorage.getItem(
              "favorites"
            )
          ) || [];

        const filtered =
          res.data.filter(
            (manga) =>
              favoriteIds.includes(
                manga.id
              )
          );

        setFavorites(filtered);
      };

    loadFavorites();
  }, []);

  return (
    <div className="container">
      <h1>My Favorites</h1>

      <div className="manga-grid">
        {favorites.map((manga) => (
          <MangaCard
            key={manga.id}
            manga={manga}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;