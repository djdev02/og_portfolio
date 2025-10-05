
import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link to={"/privacy-policy"}>Privacy Policy</Link>
        </li>
        <li>
          <Link to={"/term-condition"}>Terms and Conditions</Link>
        </li>
        <li>
          <Link to={"/refund"}>Cancellation and Refund</Link>
        </li>
        <li>
          <Link to={"/shipping"}>Shipping and Delivery</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact Us</Link>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://twitter.com">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Debashish Jena 2025 . All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
