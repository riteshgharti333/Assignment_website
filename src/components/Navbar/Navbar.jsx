import "./Navbar.scss";
import logo from "../../assets/images/logo.webp";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
  const location = useLocation();
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuOpen && !e.target.closest(".navbar")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const MobileProgramLists = () => {
    return (
      <>
        <ul>
          <li>Socio-economic development</li>
          <li>
            Bridging the gap between the government and the common masses
          </li>
          <li> Youth Empowerment</li>
        </ul>
      </>
    );
  };

  return (
    <div className={`navbar ${scroll ? "scrolled" : ""}`}>
      <div className="nav-logo">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      {/* Burger Menu */}
      <div
        className={`burger-menu ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>


   
    {/* Nav Options */}

      <div className={`nav-lists ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <span
            className={`nav-list ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </span>
        </Link>

        <span className="nav-list nav-options">
          <p className="pp">  Programs & Partners</p>
        
          <div className="services">
            <Link to="/socio-economic-development" onClick={() => setMenuOpen(false)}>
              <span
              >

                Socio-economic development
              </span>
            </Link>
            <Link to="/bridging-the-gap-between-the-government-and-the-common-masses" onClick={() => setMenuOpen(false)}>
              <span
              >
                Bridging the gap between the government and the common masses
              </span>
            </Link>
            <Link to="/youth-development" onClick={() => setMenuOpen(false)}>
              <span
              >
                Youth Empowerment
              </span>
            </Link>
          </div>
        </span>

        <Link to="/about" onClick={() => setMenuOpen(false)}>
          <span
            className={`nav-list ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            About Us
          </span>
        </Link>

        <Link to="/contact-us" onClick={() => setMenuOpen(false)}>
          <span
            className={`nav-list ${
              location.pathname === "/contact-us" ? "active" : ""
            }`}
          >
            Contact Us
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
