import Mini_Footer from "./Mini_Footer";
import "./Design.css";
import { NavLink } from "react-router-dom";
import bg from "./images/shared/desktop/bg-pattern-leaf.svg";
import arrow from "./images/shared/desktop/icon-right-arrow.svg";
import brown from './images/graphic-design/desktop/image-change.jpg'
import boxed from './images/graphic-design/desktop/image-boxed-water.jpg'
import science from './images/graphic-design/desktop/image-science.jpg'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { change_home } from "./store";
import { useDispatch } from "react-redux";
import ScrollToTop from "./ScrollToTop";

const Graphic = () => {
  const width = window.screen.width
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(change_home.change_footer_paddingz('144px 8vw 72px 8vw'))
    Aos.init();
  }, []);
  return (
    <div className="designer">
      <ScrollToTop/>
      <header className="graphick">
        <h1>GRAPHIC Design</h1>
        <p>
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives.
        </p>
      </header>
      <img id="bg" src={bg} alt="" />
      <section className="designer-one">
        <div data-aos-delay='2000' data-aos='zoom-out' className="info">
          <img src={brown} alt="" />
          <aside>
            <span>THE BROWN</span>
            <p>
            A book cover designed for Tim Brown’s new release, ‘Change’
            </p>
          </aside>
        </div>
        <div data-aos-delay={width > 777 ?'2100':'0'} data-aos='zoom-out'className="info">
          <img src={boxed} alt="" />
          <aside>
            <span>BOXED WAATER</span>
            <p>
            A simple packaging concept made for Boxed Water
            </p>
          </aside>
        </div>
        <div data-aos-delay={width > 777 ? '2200':'0'} data-aos='zoom-out' className="info">
          <img src={science} alt="" />
          <aside>
            <span>SCIENCE!</span>
            <p>
            A poster made in collaboration with the Federal Art Project
            </p>
          </aside>
        </div>
      </section>
      <section className="designer-two">
        <NavLink data-aos='fade-right' className="app" to="/app">
          <h3>APP DESIGN</h3>
          <p>
            <span>VIEW PROJECTS</span> <img src={arrow} alt="" />
          </p>
          <span className="hover"></span>
        </NavLink>
        <NavLink  data-aos={width >520 ?"fade-left":'fade-right'} className="web" to="/web">
          <h3> WEB DESIGN</h3>
          <p>
            <span>VIEW PROJECTS</span> <img src={arrow} alt="" />
          </p>
          <span className="hover"></span>
        </NavLink>
      </section>
      <Mini_Footer />
    </div>
  );
};

export default Graphic;
