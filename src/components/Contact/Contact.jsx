import "./Contact.scss";
import { Link } from "react-router-dom";
import Email from "../../assets/icons/Email.svg";
import LinkedIn from "../../assets/icons/LinkedIn.svg";
import GitHub from "../../assets/icons/GitHub.svg";

export default function Contact() {
  return (
    <footer className="contact">
      <h4 className="contact__title">Contact me:</h4>
      <Link to="mailto:abigailbrown.25@gmail.com" className="contact__link">
        <img src={Email} alt="Email icon" className="contact__icon" />
        Email
      </Link>
      <Link to="www.linkedin.com/in/abi-carson-brown" className="contact__link">
        <img src={LinkedIn} alt="LinkedIn icon" className="contact__icon" />
        LinkedIn
      </Link>
      <Link to="https://github.com/AbiCarsonBrown" className="contact__link">
        <img src={GitHub} alt="GitHub icon" className="contact__icon" />
        GitHub
      </Link>
    </footer>
  );
}
