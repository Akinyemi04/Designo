import { useEffect } from "react";
import "./Home.css";
import phone from "./images/home/desktop/image-hero-phone.png";
import bg from "./images/shared/desktop/bg-pattern-leaf.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import tea from "./images/home/desktop/illustration-resourceful.svg";
import office from "./images/home/desktop/illustration-passionate.svg";
import friend from "./images/home/desktop/illustration-friendly.svg";
import Mini_Footer from "./Mini_Footer";
import { useDispatch, useSelector } from "react-redux";
import { change_home } from "./store";
import arrow from './images/shared/desktop/icon-right-arrow.svg'

const Home = () => {
  const background_image = useSelector((val)=>{
    return val.home.img_display
  })
  const width = window.screen.width
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(change_home.change_footer_paddingz('144px 8vw 72px 8vw'))
    Aos.init();
    const width = window.screen.availWidth
    if(width > 767){
      dispatch(change_home.change_img_dispaly('visible'))
    }
    else{
      dispatch(change_home.change_img_dispaly('hidden'))
    }
  }, []);
  return (
    <article className="home">
      <section className="one">
        <aside>
          <h2>Award-winning custom designs and digital branding solutions</h2>

          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>

          <button>LEARN MORE</button>
        </aside>
        <img src={phone} alt="" />
      </section>
      <img style={{visibility:background_image}} id="bg" src={bg} alt="" />
      <section className="two">
        <NavLink data-aos="fade-right" data-aos-delay={width > 520 ?"300":'0'} to="/web" id="web">
          <h3>WEB DESIGN</h3>
          <p><span>VIEW PROJECTS</span> <img src={arrow} alt="" /></p>
          <span className="hover"></span>
        </NavLink>
        <NavLink data-aos={width >520 ?"fade-left":'fade-right'} data-aos-delay={width > 520 ? "600":'0'} to="/app" id="app">
          <h3>APP DESIGN</h3>
          <p><span>VIEW PROJECTS</span> <img src={arrow} alt="" /></p>
          <span className="hover"></span>
        </NavLink>
        <NavLink data-aos={width > 520 ?"fade-up-left":'fade-right'} to="/graphic" id="graphic">
          <h3>GRAPHIC DESIGN</h3>
          <p><span>VIEW PROJECTS</span> <img src={arrow} alt="" /></p>
          <span className="hover"></span>
        </NavLink>
      </section>
      <section className="three">
        <div data-aos='zoom-in' data-aos-delay={width > 520 ?'200':'0'}>
          <aside >
            <img src={office} alt="" />
          </aside>
          <h4>PASSIONATE</h4>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
        <div data-aos='zoom-in' data-aos-delay={width > 520 ?'400':'0'}>
          <aside className="resourceful">
            <img src={tea} alt="" />
          </aside>
          <h4>RESOURCEFUL</h4>
          <p>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients needs.
          </p>
        </div>
        <div data-aos='zoom-in' data-aos-delay={width > 520 ?'650':'0'}>
          <aside className="special friendly">
            <img src={friend} alt="" />
          </aside>
          <h4>FRIENDLY</h4>
          <p>
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </section>
      <img style={{visibility:background_image}} src={bg} id="flip-bg" alt="" />
      <Mini_Footer/>
    </article>
  );
};

export default Home;
