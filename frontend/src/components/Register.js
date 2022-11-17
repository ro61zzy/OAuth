/** @format */

import React, { useState } from "react";
import "../App.css";
// import { useHistory } from "react-router-dom";

function Register() {
  // const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/api/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      window.location.replace("/");
      console.log(data);

      // alert("status ok");
    }
  }

  return (
    <section id="register">
      <div className="App">
        <h1>Register</h1>
        <form onSubmit={registerUser}>
          <input
            id={name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <br />
          <br />
          <input
            id={email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <br />
          <br />
          <input
            id={password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <br />
          <br />
          <input type="submit" value="Register" />
        </form><br />
        <span>Already have an account ?<a href="/"> login</a></span>
      </div>
    </section>
  );
}
export default Register;
