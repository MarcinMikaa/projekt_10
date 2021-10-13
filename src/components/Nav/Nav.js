import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <Link style={navStyle} to="/">
        <h2>Home Page</h2>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/login">
          <li>Log In</li>
        </Link>
        <Link style={navStyle} to="/register">
          <li>Register</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
