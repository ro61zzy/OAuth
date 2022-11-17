/** @format */

import { useState } from "react";
import "../App.css";
const address = require("address");

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  address.mac(function (err, addr) {
   // console.log("macadd", addr);
    if (err) {
      console.log(err);
    }
  });

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log("here", data);

    if (data.status === "ok") {
      localStorage.setItem("token", data.user);
      alert("Login successful");
      window.location.href = "/dashboard";
    } else if (data === "error") {
      alert("account doent exist");
    } else {
      alert("password provided does not match to email address");
    }
  }

  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <br />
        <input type="submit" value="Login" />
      </form><br/>
      <span>Don't have an account ?<a href="/register">Register now</a></span>
    </div>
  );
}

export default Login;
