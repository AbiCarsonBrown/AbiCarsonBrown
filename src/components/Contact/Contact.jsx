import "./Contact.scss";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <footer className="contact">
      <h4 className="contact__title">Contact me:</h4>
      <a href="mailto:abigailbrown.25@gmail.com">Email</a>
      <Link to="www.linkedin.com/in/abi-carson-brown">LinkedIn</Link>
      <Link to="https://github.com/AbiCarsonBrown">GitHub</Link>
    </footer>
  );
}
