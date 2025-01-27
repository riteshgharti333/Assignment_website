import "./Navbar.scss";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
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
