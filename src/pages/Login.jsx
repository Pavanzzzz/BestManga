import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const user =
      JSON.parse(localStorage.getItem("user"));

    if (
      user &&
      user.username === login.username &&
      user.password === login.password
    ) {
      localStorage.setItem(
        "loggedIn",
        "true"
      );

      alert("Login Successful");

      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        placeholder="Username"
        onChange={(e) =>
          setLogin({
            ...login,
            username: e.target.value,
          })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setLogin({
            ...login,
            password: e.target.value,
          })
        }
      />

      <button>Login</button>
    </form>
  );
}

export default Login;