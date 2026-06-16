import axios from "axios";

const API = "http://localhost:3000/mangas";

export const getMangas = () => axios.get(API);

export const getManga = (id) => axios.get(`${API}/${id}`);

export const addManga = (manga) => axios.post(API, manga);

export const updateManga = (id, manga) =>
  axios.put(`${API}/${id}`, manga);

export const deleteManga = (id) =>
  axios.delete(`${API}/${id}`);