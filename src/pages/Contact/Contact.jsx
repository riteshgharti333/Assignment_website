import './Contact.scss'
import { IoIosArrowDown } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";


const Contact = () => {
  return (
    <div className='contact'>
       <div className="contact-title">
      <h1>Contact Us</h1>
       </div>

       <div className="contact-desc">
        <h4>Want to be a part of our Team?</h4>
       </div>

       <div className="down-arrow">
        <IoIosArrowDown className='down-arrow-icon'/>
       </div>

       <div className="contact-card">

        <div className="contact-card-info">
          <IoCall  className='contact-card-info-icon'/>
          <p>+91 123456789</p>
        </div>

        <div className="contact-card-info">
          <FaLocationDot  className='contact-card-info-icon'/>
          <p>allindiawelfaresociety18@gmail.com</p>
        </div>

        <div className="contact-card-info">
          <IoMail  className='contact-card-info-icon'/>
          <p>128, Vasundhara Colony, Tonk Phatak, Jaipur, Rajasthan 302018, India</p>
        </div>
       </div>
    </div>
  )
}

export default Contact
