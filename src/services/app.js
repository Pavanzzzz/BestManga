import axios from "axios";

const API =
  "https://bestmanga.onrender.com/mangas";

export const getMangas = () =>
  axios.get(API);

export const getManga = (id) =>
  axios.get(`${API}/${id}`);

export const addManga = (manga) =>
  axios.post(API, manga);

export const updateManga = (id, manga) =>
  axios.put(`${API}/${id}`, manga);

export const deleteManga = (id) =>
  axios.delete(`${API}/${id}`);