import { useEffect, useState } from "react";
import { getManga, updateManga } from "../services/app";
import { useNavigate, useParams } from "react-router-dom";

function EditManga() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [manga, setManga] = useState({
    title: "",
    author: "",
    genre: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    getManga(id).then((res) =>
      setManga(res.data)
    );
  }, [id]);

  const handleChange = (e) => {
    setManga({
      ...manga,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateManga(id, manga);

    navigate("/mangas");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Manga</h2>

      <input
        name="title"
        value={manga.title}
        onChange={handleChange}
      />

      <input
        name="author"
        value={manga.author}
        onChange={handleChange}
      />

      <input
        name="genre"
        value={manga.genre}
        onChange={handleChange}
      />

      <input
        name="image"
        value={manga.image}
        onChange={handleChange}
      />

      <textarea
        name="description"
        value={manga.description}
        onChange={handleChange}
      />

      <button>Update</button>
    </form>
  );
}

export default EditManga;