import { useState } from "react";
import { addManga } from "../services/app";
import { useNavigate } from "react-router-dom";

function AddManga() {
  const navigate = useNavigate();

  const [manga, setManga] = useState({
    title: "",
    author: "",
    genre: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setManga({
      ...manga,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addManga(manga);

    navigate("/mangas");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Manga</h2>

      <input
        name="title"
        placeholder="Title"
        onChange={handleChange}
      />

      <input
        name="author"
        placeholder="Author"
        onChange={handleChange}
      />

      <input
        name="genre"
        placeholder="Genre"
        onChange={handleChange}
      />

      <input
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
      />

      <button>Add Manga</button>
    </form>
  );
}

export default AddManga;