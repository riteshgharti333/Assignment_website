import "./Navbar.scss";
import logo from "../../assets/images/logo.webp";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get current route

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = scroll ? "navbar scrolled" : "navbar";

  return (
    <div className={navbarClass}>
      <div className="nav-logo">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className="nav-lists">
        <Link to={"/"}>
          <span
            className="nav-list"
            onClick={() => scrollToSection("homeSection")}
          >
            Home
          </span>
        </Link>

        <span className="nav-list nav-options">
          Program & Partners
          <div className="services">
            <Link to="/socio-economic-development" className="nav-option">
              <span
                className={` ${
                  location.pathname === "/socio-economic-development"
                    ? "active"
                    : ""
                }`}
              >Socio-economic development
              </span>
            </Link>

            <Link
              to="/bridging-the-gap-between-the-government-and-the-common-masses"
              className="nav-option"
            >
              <span
                className={` ${
                  location.pathname ===
                  "/bridging-the-gap-between-the-government-and-the-common-masses"
                    ? "active"
                    : ""
                }`}
              >
                Bridging the gap between the government and the common masses
              </span>
            </Link>

            <Link to="/youth-development" className="nav-option">
              <span
                className={` ${
                  location.pathname === "/youth-development" ? "active" : ""
                }`}
              >
              Youth Empowerment
              </span>
            </Link>
          </div>
        </span>

        <Link to="/about">
          <span
            className={`nav-list ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            About
          </span>
        </Link>

        <span
          className="nav-list"
          onClick={() => scrollToSection("weDoSection")}
        >
          We Do
        </span>

        <Link to="/contact-us">
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
