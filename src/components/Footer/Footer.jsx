import "./Footer.scss";
import logo from "../../assets/images/logo.webp";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer" id="contactSection">
      <div className="footer-left">
        <img src={logo} alt="" className="footer-logo" />

        <div className="footer-social">
          <FaFacebook className="social-icons" />
          <FaWhatsapp className="social-icons" />
          <FaSquareXTwitter className="social-icons" />
          <FaInstagram className="social-icons" />
        </div>
      </div>

      <div className="footer-right">
        <h1>Contact</h1>
        <div className="contact-info">
          <IoCall className="contact-icons" />
          <p>+91 123456789</p>
        </div>
        <div className="contact-info">
          <IoMail className="contact-icons" />
          <p>allindiawelfaresociety18@gmail.com</p>
        </div>
        <div className="contact-info">
          <FaRegAddressCard className="contact-icons" />
          <p>
            128, Vasundhara Colony, Tonk Phatak, Jaipur, Rajasthan 302018, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
