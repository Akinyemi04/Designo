import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Mini_Footer = () => {
    useEffect(() => {
        Aos.init();
      }, []);
  return (
    <div data-aos-once='true' data-aos='fade-zoom-in' data-aos-delay='500' className="mini-footer">
      <section>
        <h4>Let’s talk about your project</h4>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </section>
      <button>
        GET IN TOUCH
      </button>
    </div>
  );
};

export default Mini_Footer;
