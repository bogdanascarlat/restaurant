import React from "react";

import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Address</p>
        <p className="p__opensans">Phone Number</p>
        <p className="p__opensans">Second Phone Number</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others"
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />

        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday: </p>
        <p className="p__opensans">08:00 am - 6:00 pm</p>
        <p className="p__opensans">Saturday - Sunday:</p>
        <p className="p__opensans">10:00 am - 3:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 Gericht. All right reserved</p>
    </div>
  </div>
);

export default Footer;
