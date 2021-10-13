import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <ul className="footer-links">
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/login">
          <li>Log In</li>
        </Link>
        <Link to="/register">
          <li>Register</li>
        </Link>
      </ul>
      <h2>Marcin Mika</h2>
    </footer>
  );
}

export default Footer;
