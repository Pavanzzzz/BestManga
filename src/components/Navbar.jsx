import { Link } from "react-router-dom";

function Navbar() {

  const isLoggedIn =
    localStorage.getItem("loggedIn");

  const logout = () => {

    localStorage.removeItem("loggedIn");

    alert("Logged Out Successfully");

    window.location.href = "/";
  };

  return (
    <nav className="navbar">

      <h1 className="logo">
        Best Manga
      </h1>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/mangas">
          Mangas
        </Link>

        <Link to="/favorites">
          Favorites
        </Link>

        {isLoggedIn && (
          <Link to="/add">
            Add Manga
          </Link>
        )}

        {!isLoggedIn ? (
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
            className="btn btn-delete"
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