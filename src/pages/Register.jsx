import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    alert("Registration Successful");

    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input
        placeholder="Username"
        onChange={(e) =>
          setUser({
            ...user,
            username: e.target.value,
          })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setUser({
            ...user,
            password: e.target.value,
          })
        }
      />

      <button>Register</button>
    </form>
  );
}

export default Register;