import "./Footer.css";
import nav_logo from "../../assets/nav_logo.png";
import user_icon from "../../assets/user_icon.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={nav_logo} alt="" />
          <p>
            I’m a full-stack web developer with a passion for building dynamic,
            user-friendly applications. I specialize in both front-end and
            back-end
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Chinmayee Mohanty. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <AnchorLink className="anchor-link" offset={80} href="#contact">
            <p>Connect with me</p>
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
