import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-brand">
        <img src={logo} alt="Himas Hotel and Bake House logo" className="logo-img" />
        <div>
          <h2 className="logo-text">Himas Hotel</h2>
          <p className="logo-subtext">and Bake House</p>
        </div>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;