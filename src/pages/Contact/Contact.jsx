import "./Contact.css";
import Phone from "./phone.png";
import Email from "./email.png";
import Address from "./address.png";



const Contact = () => {
  

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Call For Your Dream Mobile</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 9955338712
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              contact@mobile.oceans
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              245 Ritchie street,North Chennai -6000018
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your query</b> Get in touch. Always available for
            Enquiry ,Message or call us your dream mobile.
          </p>
          <form>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Mobile No" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;