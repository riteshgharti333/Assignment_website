import "./Navbar.scss";
import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [scroll, setScroll] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

   const navbarClass = scroll ? "navbar scrolled" : "navbar"

  return (
    <div className={navbarClass}>
      <div className="nav-logo">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className="nav-lists">
        <span
          className="nav-list"
          onClick={() => scrollToSection("homeSection")}
        >
          Home
        </span>
        <span
          className="nav-list"
          onClick={() => scrollToSection("aboutSection")}
        >
          About
        </span>
        <span
          className="nav-list"
          onClick={() => scrollToSection("weDoSection")}
        >
          We Do
        </span>
        <span
          className="nav-list"
          onClick={() => scrollToSection("contactSection")}
        >
          Contact Us
        </span>
      </div>
    </div>
  );
};

export default Navbar;
