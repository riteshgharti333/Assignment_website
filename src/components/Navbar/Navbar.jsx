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
        <span className="nav-list" onClick={() => scrollToSection("homeSection")}>
          Home
        </span>
        </Link>
       

        <Link to="/about">
          <span className={`nav-list ${location.pathname === "/about" ? "active" : ""}`}>
            About
          </span>
        </Link>

        <span className="nav-list" onClick={() => scrollToSection("weDoSection")}>
          We Do
        </span>

        <span className="nav-list" onClick={() => scrollToSection("contactSection")}>
          Contact Us
        </span>
      </div>
    </div>
  );
};

export default Navbar;
