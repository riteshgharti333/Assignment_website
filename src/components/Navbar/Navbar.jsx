import "./Navbar.scss";
import logo from "../../assets/images/logo.webp";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiDownArrow } from "react-icons/bi";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 769px)");

    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e) => {
      setIsDesktop(e.matches);
      if (e.matches) {
        setMenuOpen(false); 
        setDropdownOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    if (!isDesktop) {
      setDropdownOpen((prev) => !prev);
    }
  };

  const handleDropdownHover = (isHovered) => {
    if (isDesktop) {
      setDropdownOpen(isHovered);
    }
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
      <div className="left-logo">
        
        <img src={logo} alt="Logo" />
      </div>
      </Link>
      

      <div className={`burger-menu ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`right-content ${menuOpen ? "open" : ""}`}>
        <Link to="/" className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
          Home
        </Link>

        <div
          className="dropdown"
          onMouseEnter={() => handleDropdownHover(true)} 
          onMouseLeave={() => handleDropdownHover(false)} 
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
              <Link to="/youth-development" className="dropdown-link" onClick={() => setMenuOpen(false)}>
                Youth Empowerment
              </Link>
            </div>
          )}
        </div>

        <Link to="/about-us" className={`nav-item ${location.pathname === "/about" ? "active" : ""}`}>
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