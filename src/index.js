import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h1>This is my login component!</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

function NavBar() {
  return (
    <div>
      <NavLink
        to="/home"
        exact
        style={linkstyles}
        activeStyle={{ background: "darkblue" }}
      >
        Home
      </NavLink>

      <NavLink
        to="/login"
        exact
        style={linkstyles}
        activeStyle={{ background: "darkblue" }}
      >
        Login
      </NavLink>

      <NavLink
        to="/about"
        exact
        style={linkstyles}
        activeStyle={{ background: "darkblue" }}
      >
        About
      </NavLink>
    </div>
  );
}

let linkstyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/home" exact caseSensitive={false} element={<Home />} />
      <Route path="/about" exact caseSensitive={false} element={<About />} />
      <Route path="/login" exact caseSensitive={false} element={<Login />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);n
