import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">Tanner Briggs</div>

      {/* Hamburger Menu Button */}
      <button className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </button>

      {/* Nav Links */}
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        {/* <Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link> */}
        <Link to="/stats" onClick={() => setIsOpen(false)}>Stats</Link>
        <Link to="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About Me</Link>
        <Link to="/booking" onClick={() => setIsOpen(false)}>Booking</Link>
      </div>
    </nav>
  );
};

export default Navbar;
