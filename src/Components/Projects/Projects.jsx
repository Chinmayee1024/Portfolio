import "./Projects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import  Projects_Data  from "./Projects_Data";
import arrow_icon from "../../assets/arrow_icon.svg";
const Projects = () => {
  console.log(Projects_Data);

  return (
    <div id="projects" className="projects">
      <div className="project-title">
        <h1>My Projects</h1>

        <img src={theme_pattern} alt="" />
      </div>
      <div className="project-container">
        {Projects_Data.map((project, index) => {
          return (
            <div key={index} className="project-format">
              <h3>{project.p_no}</h3>
              <h2>{project.p_name}</h2>
              <p>{project.p_desc}</p>
              <div className="projects-readmore">
                <p> Read More </p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
