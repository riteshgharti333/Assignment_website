import './AboutUs.scss'
import about_banner from "../../assets/images/banner-3-1.webp"
import about_point_img from "../../assets/images/elementor-2.webp"
import slider_img from "../../assets/images/slider-img.webp"
import { IoEarthOutline } from "react-icons/io5";
import { TiLeaf } from "react-icons/ti";
import { FaRegSmile } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className='aboutUs'>
      
      <div className="about-banner">
        <img src={about_banner} alt="" />
        <div className="about-banner-info">
            <h1>About Us</h1>
             <div className="about-sm-info">
                <span className='home-link'>Home</span>
                <span className='line'>|</span> <span className='about-link'>About Us</span>
             </div>
        </div>
      </div>

      <div className="about-points">
      <div className="about-points-info">
        <h2 className='about-points-title'>What we think about our charity</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed la temassa at dui aliquet scelerie. Fiusce ai neque arcu, temporc e dolor. Phasellus diam enim, vulputate sed ornare eu, fringillav sapen. Fusce metus ligula, adipis cing vitae egestas volutpatla et eget augue.e ai neque arcu, te</p>
      </div>
      <img className='about-points-img' src={about_point_img} alt="" />
      </div>

      <div className="about-slider">

        <div className="about-slider-info">
            
            <div className="slider-sm-info">

              <div className="img-bg-div"></div>

                <img className='slider-img' src={slider_img} alt="" />

                <div className="slider-details">
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fugiat.</h3>

                    <p className='slider-name'>John Doe</p>
                    <p className='slider-add'>SEO, DELHI</p>
                </div>
            </div>
        </div>
      </div>

      <div className="about-cause">
        <h1 className='aboout-cause-title'>
        Causes and positive change all over the world.
        </h1>

        <div className="about-cause-info">
          <div className="about-cause-icons">
           
          <IoEarthOutline  className="about-cause-img" />

            <h5 className='about-icons-title'>Our Mission</h5>
            <p className='about-icons-desc'>Learn how access to clean water can improve health, boost local economies.</p>
          </div>

          <div className="about-cause-icons">
            <TiLeaf  className="about-cause-img" />

            <h5 className='about-icons-title'>Our Vission
            </h5>
            <p className='about-icons-desc'>Learn how access to clean water can improve health, boost local economies.</p>
          </div>

          <div className="about-cause-icons">
          <FaRegSmile  className="about-cause-img" />

            <h5 className='about-icons-title'>Our Values</h5>
            <p className='about-icons-desc'>Learn how access to clean water can improve health, boost local economies.</p>
          </div>


        </div>
       
       

      </div>
    </div>
  )
}

export default AboutUs















