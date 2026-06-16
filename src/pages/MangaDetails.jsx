import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  Link,
} from "react-router-dom";

import { getManga }
  from "../services/app";

function MangaDetails() {
  const { id } =
    useParams();

  const [manga, setManga] =
    useState(null);

  useEffect(() => {
    getManga(id).then(
      (res) =>
        setManga(res.data)
    );
  }, [id]);

  if (!manga)
    return <h2>Loading...</h2>;

  return (
    <div
      className="container"
      style={{
        marginTop: "30px",
      }}
    >
      <img
        src={manga.image}
        alt={manga.title}
        style={{
          width: "300px",
        }}
      />

      <h1>{manga.title}</h1>

      <h3>{manga.author}</h3>

      <p>{manga.genre}</p>

      <p>
        {manga.description}
      </p>

      <Link
        className="btn"
        to={`/edit/${manga.id}`}
      >
        Edit Manga
      </Link>
    </div>
  );
}

export default MangaDetails;