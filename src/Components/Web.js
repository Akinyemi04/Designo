import Mini_Footer from "./Mini_Footer";
import './Design.css'
import bg from "./images/shared/desktop/bg-pattern-leaf.svg";
import transfer from './images/web-design/desktop/image-transfer.jpg'
import express from './images/web-design/desktop/image-express.jpg'
import blogr from './images/web-design/desktop/image-blogr.jpg'
import builder from './images/web-design/desktop/image-builder.jpg'
import photon from './images/web-design/desktop/image-photon.jpg'
import camp from './images/web-design/desktop/image-camp.jpg'
import { NavLink } from "react-router-dom";
import arrow from './images/shared/desktop/icon-right-arrow.svg'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { change_home } from "./store";
import ScrollToTop from "./ScrollToTop";


const Web = () => {
  const width = window.screen.width
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(change_home.change_footer_paddingz('144px 8vw 72px 8vw'))
    Aos.init();
  }, []);

  return (
    <div className="designer">
      <ScrollToTop/>
      <header>
        <h1>Web Design</h1>
        <p>We build websites that serve as powerful marketing tools 
and bring memorable brand experiences.</p>
      </header>
      <img id="bg" src={bg} alt="" />
      <section className="designer-one">
        <div data-aos-delay='2000' className="info" data-aos='zoom-out'>
          <img src={express} alt="" />
          <aside>
            <span>EXPRESS</span>
            <p>A multi-carrier shipping website for ecommerce businesses</p>
          </aside>
        </div>
        <div data-aos-delay={width > 777 ? '2100':'0'} className="info" data-aos='zoom-out'>
          <img src={transfer} alt="" />
          <aside>
            <span>TRANSFER</span>
            <p>Site for low-cost money transfers and sending money within seconds</p>
          </aside>
        </div>
        <div data-aos-delay={width > 777 ? '2200':'0'} className="info" data-aos='zoom-out'>
          <img src={photon} alt="" />
          <aside>
            <span>PHOTON</span>
            <p>A state-of-the-art music player with high-resolution audio and DSP effects</p>
          </aside>
        </div>
        <div data-aos-delay={width > 777 ?'300':'0'} className="info" data-aos='zoom-out'>
          <img src={builder} alt="" />
          <aside>
            <span>BUILDER</span>
            <p>Connects users with local contractors based on their location</p>
          </aside>
        </div>
        <div data-aos-delay={width > 777 ? '400':'0'} className="info" data-aos='zoom-out'>
          <img src={blogr} alt="" />
          <aside>
            <span>BLOGR</span>
            <p>Blogr is a platform for creating an online blog or publication</p>
          </aside>
        </div>
        <div data-aos-delay={width > 777 ? '500':'0'} className="info" data-aos='zoom-out'>
          <img src={camp} alt="" />
          <aside>
            <span> CAMP</span>
            <p>Get expert training in coding, data, design, and digital marketing</p>
          </aside>
        </div>
      </section>
      <section className="designer-two">
        <NavLink data-aos='fade-right' className='app' to='/app'>
            <h3>APP DESIGN</h3>
            <p><span>VIEW PROJECTS</span> <img src={arrow} alt="" /></p>
            <span className="hover"></span>
        </NavLink>
        <NavLink  data-aos={width >520 ?"fade-left":'fade-right'} className='graphic' to='/graphic'>
          <h3> GRAPHIC DESIGN</h3>
          <p><span>VIEW PROJECTS</span> <img src={arrow} alt="" /></p>
          <span className="hover"></span>
        </NavLink>
      </section>
      <Mini_Footer/>
    </div>
  )
}

export default Web;