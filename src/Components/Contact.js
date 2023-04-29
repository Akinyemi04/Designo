import "./Merger.css";
import canada from "./images/shared/desktop/illustration-canada.svg";
import australia from "./images/shared/desktop/illustration-australia.svg";
import uk from "./images/shared/desktop/illustration-united-kingdom.svg";
import bg from "./images/shared/desktop/bg-pattern-leaf.svg";
import { useDispatch, useSelector } from "react-redux";
import { change_home } from "./store";
import ErrorIcon from '@mui/icons-material/Error';

const Contact = () => {
  const phone = useSelector((val) => {
    return val.home.phone;
  });
  const message = useSelector((val) => {
    return val.home.message;
  });
  const name = useSelector((val) => {
    return val.home.name;
  });
  const email = useSelector((val) => {
    return val.home.email;
  });
  const dispatch = useDispatch();

  function Submit(e) {
    const name_el = document.getElementById('name')
    const phone_el = document.getElementById('phone')
    const email_el = document.getElementById('email')
    const message_el = document.getElementById('message')
    e.preventDefault();
    if(name.length === 0){
      name_el.nextElementSibling.style.opacity='1'
    }
    else if (phone.length === 0){
      phone_el.nextElementSibling.style.opacity = '1'
    }
    else if ( email.length === 0){
      email_el.nextElementSibling.style.opacity = '1'

    }
    else if (message.length === 0){
      message_el.nextElementSibling.style.opacity= '1'
    }
    else{
      
    }
  }
  return (
    <div className="contact_page">
      <section className="form_section">
        <aside>
          <h1>Contact Us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </aside>
        <form action="">
          <div className="">
            <input id="name"
              onChange={(e) => {
                dispatch(change_home.change_name(e.target.value));
              }}
              placeholder="Name"
              type="text"
            />
            <span>Can’t be empty <ErrorIcon className="icon"/></span>
          </div>
          <div>
            <input id="email"
              onChange={(e) => {
                dispatch(change_home.change_email(e.target.value));
              }}
              placeholder="Email Address"
              type="email"
            />
             <span>Can’t be empty <ErrorIcon className="icon"/></span>
          </div>
          <div>
            <input id="phone"
              onChange={(e) => {
                dispatch(change_home.change_phone(e.target.value));
              }}
              placeholder="Phone"
              type="tel"
            />
             <span>Can’t be empty <ErrorIcon className="icon"/></span>
          </div>

          <div>
            <textarea 
              onChange={(e) => {
                dispatch(change_home.change_message(e.target.value));
              }}
              placeholder="Your Message"
              name=""
              id="message"
              cols="30"
              rows="5"
            ></textarea>
             <span>Can’t be empty <ErrorIcon className="icon"/></span>
          </div>

          <button onClick={Submit} type="submit">
            Submit
          </button>
        </form>
      </section>
      <img src={bg} className="bg" alt="" />
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
    </div>
  );
};

export default Contact;
