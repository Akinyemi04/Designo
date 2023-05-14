import Mini_Footer from "./Mini_Footer";
import "./Design.css";
import airfilter from "./images/app-design/desktop/image-airfilter.jpg";
import eyecam from "./images/app-design/desktop/image-eyecam.jpg";
import faceit from "./images/app-design/desktop/image-faceit.jpg";
import loopstudio from "./images/app-design/desktop/image-loopstudios.jpg";
import todo from "./images/app-design/desktop/image-todo.jpg";
import arrow from "./images/shared/desktop/icon-right-arrow.svg";
import { NavLink } from "react-router-dom";
import bg from "./images/shared/desktop/bg-pattern-leaf.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { change_home } from "./store";
import ScrollToTop from "./ScrollToTop";

const Happ = () => {
  const width = window.screen.width
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(change_home.change_footer_paddingz('144px 8vw 72px 8vw'))
    Aos.init();
  }, []);

  return (
    <div className="designer ">
      <ScrollToTop/>
      <header className="happ">
        <h1>App Design</h1>
        <p>
          Our mobile designs bring intuitive digital solutions to your customers
          right at their fingertips.
        </p>
      </header>
      <img id="bg" src={bg} alt="" />
      <section className="designer-one">
        <div data-aos-delay='2000'  data-aos='zoom-out' className="info">
          <img src={airfilter} alt="" />
          <aside>
            <span>AIRFILTER</span>
            <p>
              Solving the problem of poor indoor air quality by filtering the
              air
            </p>
          </aside>
        </div>
        <div data-aos-delay={width > 777 ?'2100':'0'}  data-aos='zoom-out' className="info">
          <img src={eyecam} alt="" />
          <aside>
            <span>EYECAM</span>
            <p>
              Product that lets you edit your favorite photos and videos at any
              time
            </p>
          </aside>
        </div>
        <div data-aos-delay={width > 777 ? '2000':'0' } data-aos='zoom-out' className="info">
          <img src={faceit} alt="" />
          <aside>
            <span>FACEIT</span>
            <p>
              Get to meet your favorite internet superstar with the faceit app
            </p>
          </aside>
        </div>
        <div data-aos-delay={width > 777 ? '300':'0'}  data-aos='zoom-out' className="info">
          <img src={todo} alt="" />
          <aside>
            <span>TODO</span>
            <p>
              Get to meet your favorite internet superstar with the faceit app
            </p>
          </aside>
        </div>
        <div data-aos-delay={width > 777 ? '400':'0'}  data-aos='zoom-out' className="info">
          <img src={loopstudio} alt="" />
          <aside>
            <span>LOOPSTUDIOS</span>
            <p>A VR experience app made for Loopstudios</p>
          </aside>
        </div>
      </section>
      <section className="designer-two">
        <NavLink data-aos='fade-right' className="web" to="/web">
          <h3>WEB DESIGN</h3>
          <p>
            <span>VIEW PROJECTS</span> <img src={arrow} alt="" />
          </p>
          <span className="hover"></span>
        </NavLink>
        <NavLink  data-aos={width >520 ?"fade-left":'fade-right'} className="graphic" to="/graphic">
          <h3> GRAPHIC DESIGN</h3>
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

export default Happ;
