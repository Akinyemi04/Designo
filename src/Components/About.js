import "./Merger.css";
import main_bg from "./images/about/desktop/image-about-hero.jpg";
import real_deal from "./images/about/desktop/image-real-deal.jpg";
import world_class from "./images/about/desktop/image-world-class-talent.jpg";
import bg from "./images/shared/desktop/bg-pattern-leaf.svg";
import canada from "./images/shared/desktop/illustration-canada.svg";
import australia from "./images/shared/desktop/illustration-australia.svg";
import uk from "./images/shared/desktop/illustration-united-kingdom.svg";
import Mini_Footer from "./Mini_Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import tablet from "./images/about/tablet/image-about-hero.jpg";
import tablet_one from "./images/about/tablet/image-world-class-talent.jpg";
import tablet_two from "./images/about/tablet/image-real-deal.jpg";
import mobile from './images/about/mobile/image-about-hero.jpg'
import mobile_one from './images/about/mobile/image-world-class-talent.jpg'
import mobile_two from './images/about/mobile/image-real-deal.jpg'

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="about">
      <header>
        <aside>
          <h1>About Us</h1>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </aside>
        <picture className="picture">
          <source srcSet={tablet} media="(max-width:777px)" />
          <source srcSet={mobile} media="(max-width:520px)" />
          <img src={main_bg} alt="" />
        </picture>
      </header>
      <img src={bg} className="left" alt="" />
      <section
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        className="important"
      >
        <picture className="picture">
          <source srcSet={tablet_one} media="(max-width:777px)" />
          <source srcSet={mobile_one} media="(max-width:520px)" />
          <img src={world_class} alt="" />
        </picture>
        <aside>
          <h2 data-aos="fade-up" data-aos-delay="400">
            World-class talent
          </h2>
          <p data-aos="fade-up" data-aos-delay="500">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p data-aos="fade-up" data-aos-delay="500">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </aside>
      </section>
      <section className="country">
        <div data-aos="zoom-in" data-aos-delay="200">
          <article className="canada">
            <img src={canada} alt="" />
          </article>
          <span>CANADA</span>
          <button>SEE LOCATION</button>
        </div>
        <div data-aos="zoom-in" data-aos-delay="400">
          <article className="australia">
            <img src={australia} alt="" />
          </article>
          <span>AUSTRALIA</span>
          <button>SEE LOCATION</button>
        </div>
        <div data-aos="zoom-in" data-aos-delay="600">
          <article className="uk">
            <img src={uk} alt="" />
          </article>
          <span>UNITED KINGDOM</span>
          <button> SEE LOCATION</button>
        </div>
      </section>

      <img src={bg} className="right" alt="" />
      <section
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        className="very important"
      >
        <aside>
          <h2 data-aos="fade-up" data-aos-delay="400">
            The real deal
          </h2>
          <p data-aos="fade-up" data-aos-delay="500">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p data-aos="fade-up" data-aos-delay="500">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results
          </p>
        </aside>
        <picture className="picture">
          <source srcSet={tablet_two} media="(max-width:777px)" />
          <source srcSet={mobile_two} media="(max-width:520px)" />
          <img src={real_deal} alt="" />
        </picture>
      </section>
      <Mini_Footer />
    </div>
  );
};

export default About;
