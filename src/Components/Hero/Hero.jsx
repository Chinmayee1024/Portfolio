/* eslint-disable react/no-unescaped-entities */
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Chinmayee Mohanty,</span> A Web Developer & Tech Enthusiast
      </h1>
      <p>
        a passionate full-stack web developer and final-year MCA student with
        expertise in modern web technologies. I thrive on creating efficient,
        user-friendly solutions while blending my love for coding
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={80} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
