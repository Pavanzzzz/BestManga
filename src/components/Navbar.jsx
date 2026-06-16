import { Link } from "react-router-dom";

function Navbar() {

  const user = localStorage.getItem("user");

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <nav>
      <h2>Best Manga</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/mangas">Mangas</Link>

        <Link to="/favorites">
          Favorites
        </Link>

        <Link to="/add">
          Add Manga
        </Link>

        {!user ? (
          <>
            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Register
            </Link>
          </>
        ) : (
          <button
            className="btn"
            onClick={logout}
          >
            Logout
          </button>
        )}

      </div>
    </nav>
  );
}

export default Navbar;