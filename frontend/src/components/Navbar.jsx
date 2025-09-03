import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">Tanner Briggs</div>
    <div className="navbar-links">
      <Link to="/">Home</Link>
      {/* <Link to="/portfolio">Portfolio</Link> */}
      <Link to="/stats">Stats</Link>
      <Link to="/testimonials">Testimonials</Link>
      <Link to="/about">About Me</Link>
      <Link to="/booking">Booking</Link>
    </div>
  </nav>
);

export default Navbar;