import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Profile from "../../assets/profile.jpg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={Profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
               Hi, I’m Chinmayee Mohanty, a full-stack web developer with a
              passion for crafting dynamic, responsive, and user-centric web
              applications. My expertise lies in creating seamless digital
              experiences by leveraging a blend of front-end and back-end
              technologies. On the front end, I work with HTML, CSS, JavaScript,
              and frameworks like React to design intuitive interfaces. On the
              back end, I specialize in Node.js, Express, and databases like
              MongoDB and SQL to ensure robust and scalable functionality.
            </p>
            <p>
              I thrive in the ever-evolving tech landscape, constantly upgrading
              my skills to stay ahead of the curve. Currently, I’m honing my
              abilities as a Software Developer at Dream Adoration, where I
              collaborate on innovative projects that challenge me to grow both
              technically and creatively.
            </p>
            <p>
              My work reflects a commitment to combining technical proficiency
              with problem-solving, ensuring every solution is impactful and
              efficient. Explore my portfolio to see how I turn ideas into
              reality and bring value to the world of web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
