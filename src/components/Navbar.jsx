import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h1 className="logo">
        Best Manga
      </h1>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/mangas">
          Mangas
        </Link>

        <Link to="/favorites">
          Favorites
        </Link>

        <Link to="/add">
          Add Manga
        </Link>

        <Link to="/login">
          Login
        </Link>

        <Link to="/register">
          Register
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;