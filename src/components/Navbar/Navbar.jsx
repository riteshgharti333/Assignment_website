import "./Navbar.scss";
import logo from "../../assets/images/logo.webp";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiDownArrow } from "react-icons/bi"; // Import the down arrow icon

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen size
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 769px)");

    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e) => {
      setIsDesktop(e.matches);
      if (e.matches) {
        setMenuOpen(false); // Close mobile menu on desktop view
        setDropdownOpen(false); // Close dropdown on desktop view
      }
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Toggle dropdown (for mobile)
  const toggleDropdown = () => {
    if (!isDesktop) {
      setDropdownOpen((prev) => !prev);
    }
  };

  // Handle hover on desktop
  const handleDropdownHover = (isHovered) => {
    if (isDesktop) {
      setDropdownOpen(isHovered);
    }
  };

  return (
    <div className="navbar">
      <div className="left-logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Burger Menu (for mobile) */}
      <div className={`burger-menu ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation links */}
      <div className={`right-content ${menuOpen ? "open" : ""}`}>
        <Link to="/" className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
          Home
        </Link>

        {/* Programs & Partners Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => handleDropdownHover(true)} // Hover on desktop
          onMouseLeave={() => handleDropdownHover(false)} // Hover off on desktop
        >
          <p className="nav-item" onClick={toggleDropdown}>
            Programs & Partners
            <BiDownArrow className={`dropdown-arrow ${dropdownOpen ? "open" : ""}`} />
          </p>
          {dropdownOpen && (
            <div className="dropdown-content">
              <Link to="/socio-economic-development" className="dropdown-link" onClick={() => setMenuOpen(false)}>
                Socio-economic development
              </Link>
              <Link to="/bridging-the-gap" className="dropdown-link" onClick={() => setMenuOpen(false)}>
                Bridging the gap between the government and the common masses
              </Link>
              <Link to="/youth-development" className="dropdown-link" onClick={() => setMenuOpen(false)}>
                Youth Empowerment
              </Link>
            </div>
          )}
        </div>

        <Link to="/about" className={`nav-item ${location.pathname === "/about" ? "active" : ""}`}>
          About Us
        </Link>

        <Link to="/contact-us" className={`nav-item ${location.pathname === "/contact-us" ? "active" : ""}`}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;