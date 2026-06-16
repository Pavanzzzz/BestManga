import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [username,setUsername] =
  useState("");

  const [password,setPassword] =
  useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();

    const user = JSON.parse(
      localStorage.getItem(
        "registeredUser"
      )
    );

    if(
      user &&
      user.username===username &&
      user.password===password
    ){
      localStorage.setItem(
        "user",
        username
      );

      navigate("/");
    }
    else{
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        placeholder="Username"
        onChange={(e)=>
          setUsername(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>
          setPassword(e.target.value)
        }
      />

      <button className="btn">
        Login
      </button>
    </form>
  );
}

export default Login;