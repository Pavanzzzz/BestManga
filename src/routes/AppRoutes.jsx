import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Mangas from "../pages/Mangas";
import MangaDetails from "../pages/MangaDetails";
import AddManga from "../pages/AddManga";
import EditManga from "../pages/EditManga";
import Favorites from "../pages/Favorites";
import Notfound from "../pages/Notfound";
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/mangas" element={<Mangas />} />

      <Route
        path="/manga/:id"
        element={<MangaDetails />}
      />

      <Route
  path="/add"
  element={
    <ProtectedRoute>
      <AddManga />
    </ProtectedRoute>
  }
/>
      <Route
        path="/edit/:id"
        element={<EditManga />}
      />

      <Route
        path="/favorites"
        element={<Favorites />}
      />

      <Route
        path="*"
        element={<Notfound />}
      />
    </Routes>
  );
}

export default AppRoutes;