import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from "./images/shared/desktop/logo-light.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useSelector } from "react-redux";


const Footer = () => {
  const width = window.screen.width
  const padding = useSelector((val)=>{
    return val.home.footer_padding
  })
  useEffect(() => {
    Aos.init({
      offset:(window.screen.availHeight * .01)
    });
  }, []);
  return (
    <footer style={{padding:padding}}>
      <section className="first">
        <img data-aos="zoom-in-up" data-aos-delay="100" src={logo} alt="" />
        <hr />
        <nav>
          <NavLink
            data-aos="zoom-in-up"
            data-aos-delay="250"
            className="company"
            to="/about"
          >
            OUR COMPANY
          </NavLink>
          <NavLink
            data-aos="zoom-in-up"
            data-aos-delay="400"
            className="location"
            to="/location"
          >
            LOCATIONS
          </NavLink>
          <NavLink
            data-aos="zoom-in-up"
            data-aos-delay="550"
            className="contact"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </nav>
      </section>
      <section className="second">
        <div className="central">
          <h5 data-aos="zoom-in-up" data-aos-delay="700">
            Designo Central Office
          </h5>
          <p data-aos="zoom-in" data-aos-delay="850" >
            3886 Wellington Street
          </p>
          <p data-aos="zoom-in" data-aos-delay="1000">
            Toronto, Ontario M9C 3J5
          </p>
        </div>
        <div className="contact-us">
          <h5 data-aos="zoom-in-up" data-aos-delay="1150">Contact Us Central Office</h5>
          <p  data-aos="zoom-in" data-aos-delay="1300">
            <span>p:</span>
            <span>+1 253-863-8967</span>
          </p>
          <p data-aos="zoom-in" data-aos-delay="1450">
            <span>M:</span>
            <span> contact@designo.co</span>
          </p>
        </div>
        <div className="icons">
          <span data-aos="zoom-in" data-aos-delay= "1600">
            <FacebookIcon/>
          </span>
          <span data-aos="zoom-in" data-aos-delay={ width > 520 ? "1750":'1600'}>
            <YouTubeIcon/>
          </span>
          <span data-aos="zoom-in" data-aos-delay={ width > 520 ? "1900": '1600'}>
            <TwitterIcon/>
          </span>
          <span data-aos="zoom-in" data-aos-delay={width > 520 ? "2050":'1600'}>
            <PinterestIcon/>
          </span>
          <span data-aos="zoom-in" data-aos-delay={ width > 520 ? "2200":'1600'}>
            <InstagramIcon/>
          </span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
