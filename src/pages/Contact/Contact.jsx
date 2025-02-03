import './Contact.scss';
import { IoIosArrowDown } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import serviceOne_banner_img from "../../assets/images/1.webp";


const Contact = () => {
  return (
    <div className='contact'>
  


      
      <div className="contact-title">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-desc">
        <h4>Established in 2012 by Abdul Rahim Khatari, BK Welfare Society is dedicated to social welfare, with a strong emphasis on education, women's empowerment, and emergency aid for hospitalized individuals.</h4>
      </div>

      <div className="down-arrow">
        <IoIosArrowDown className='down-arrow-icon' />
      </div>

      <div className="contact-card">
        <div className="contact-card-info">
          <IoCall className='contact-card-info-icon' />
          <p>+91 123456789</p>
        </div>

        <div className="contact-card-info">
          <FaLocationDot className='contact-card-info-icon' />
          <p>128, Vasundhara Colony, Tonk Phatak, Jaipur, Rajasthan 302018, India</p>
        </div>

        <div className="contact-card-info">
          <IoMail className='contact-card-info-icon' />
          <p>allindiawelfaresociety18@gmail.com</p>
        </div>
      </div>

      <div className="contact-form">
        <h3>Have Any Question?</h3>
        <form action="">
          <input type="text" className="text" placeholder="Complete Name" />
          <input type="text" className="text" placeholder="Email Address" />
          <input type="number" className="text" placeholder="Phone No" />
          <textarea name="" id="" placeholder="Question"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="map-address">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3534.5383903172337!2d75.13723947546494!3d27.63880977622188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDM4JzE5LjciTiA3NcKwMDgnMjMuMyJF!5e0!3m2!1sen!2sin!4v1738544135354!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
};

export default Contact;