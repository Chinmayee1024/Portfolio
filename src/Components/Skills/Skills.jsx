import "./Skills.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="skills-title">
        <h1>Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-skills">
        <div className="about-skill">
          <p>HTML & CSS</p>
          <hr style={{ width: "80%" }} />
        </div>

        <div className="about-skill">
          <p>JavaScript</p>
          <hr style={{ width: "70%" }} />
        </div>
        <div className="about-skill">
          <p>React JS</p>
          <hr style={{ width: "60%" }} />
        </div>
        <div className="about-skill">
          <p>Node JS</p>
          <hr style={{ width: "75%" }} />
        </div>
        <div className="about-skill">
          <p>Express JS</p>
          <hr style={{ width: "65%" }} />
        </div>
        <div className="about-skill">
          <p>Mongo DB</p>
          <hr style={{ width: "75%" }} />
        </div>
        <div className="about-skill">
          <p>SQL</p>
          <hr style={{ width: "85%" }} />
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF LEARNING EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>CERTIFICATIONS & WORKSHOPS</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
