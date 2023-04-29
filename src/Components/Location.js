import { useDispatch } from "react-redux";
import "./Merger.css";
import Mini_Footer from "./Mini_Footer";
import desktop from "./images/locations/desktop/image-map-australia.png";
import desktop_one from "./images/locations/desktop/image-map-canada.png";
import desktop_two from "./images/locations/desktop/image-map-united-kingdom.png";
import australia_one from "./images/locations/tablet/image-map-australia.png";
import canada_one from "./images/locations/tablet/image-map-canada.png";
import uk_one from "./images/locations/tablet/image-map-uk.png";
import { change_home } from "./store";
const Location = () => {
  const width = window.screen.availWidth
  const dispatch = useDispatch
  dispatch(change_home.change_footer_paddingz('144px 8vw 72px 8vw'))
  return (
    <div className="location_page">
      <section className="sectioning heading"> 
        <aside>
          <h2>CANADA</h2>
          <article>
            <div>
              <h5>Designo Central Office</h5>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div>
              <h5>Contact</h5>
              <p>P : +1 253-863-8967</p>
              <p>
                <span>M : </span>
                <span>contact@designo.com</span>
              </p>
            </div>
          </article>
        </aside>
        <picture data-aos="fade-right">
          <source srcSet={canada_one} media="(max-width:777px)" />
          <img src={desktop_one} alt="" />
        </picture>
      </section>
      <section className="australia sectioning">
        <picture data-aos="fade-right" data-aos-delay={width > 777 ? '2100':''} >
          <source srcSet={australia_one} media="(max-width:777px)" />
          <img src={desktop} alt="" />
        </picture>
        <aside data-aos="fade-left" data-aos-delay={width > 777 ? '2100':''}>
          <h2>AUSTRALIA</h2>
          <article>
            <div>
              <h5>Designo AU Office</h5>
              <p>19 Balonne Street</p>
              <p>New South Wales 2443</p>
            </div>
            <div>
              <h5>Contact</h5>
              <p>P : (02) 6720 9092</p>
              <p>M : contact@designo.au</p>
            </div>
          </article>
        </aside>
      </section>
      <section className="sectioning">
        <aside data-aos="fade-right" >
          <h2>United Kingdom</h2>
          <article>
            <div>
              <h5>Designo UK Office</h5>
              <p>13 Colorado Way</p>
              <p>Rhyd-y-fro SA8 9GA</p>
            </div>
            <div>
              <h5>Contact</h5>
              <p>P : 078 3115 1400</p>
              <p>M : contact@designo.uk</p>
            </div>
          </article>
        </aside>
        <picture data-aos="fade-left">
          <source srcSet={uk_one} media="(max-width:777px)" />
          <img src={desktop_two} alt="" />
        </picture>
      </section>
      <Mini_Footer />
    </div>
  );
};

export default Location;
