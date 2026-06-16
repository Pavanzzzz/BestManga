import axios from "axios";

const API_URL = "https://bestmanga.onrender.com/mangas";

export const getMangas = () => axios.get(API_URL);

export const getManga = (id) =>
  axios.get(`${API_URL}/${id}`);

export const addManga = (manga) =>
  axios.post(API_URL, manga);

export const updateManga = (id, manga) =>
  axios.put(`${API_URL}/${id}`, manga);

export const deleteManga = (id) =>
  axios.delete(`${API_URL}/${id}`);