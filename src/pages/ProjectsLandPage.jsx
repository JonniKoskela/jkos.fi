import { Link } from "react-router-dom";
import "./ProjectsLandPage.css";

function ProjectsLandPage() {
      {
            /* prettier ignore */
      }
      const projects = [
            {
                  name: "Infinite scrolling with react",
                  key: "infscroll",
            },
            {
                  name: "ChatApp",
                  key: "ChatApp",
            },
            {
                  name: "C",
                  key: "C",
            },
      ];

      //

      const ProjectsMapped = () => {
            const projectsHTML = (
                  <ul className="ProjectsLand list">
                        {projects.map((p) => (
                              <li className="items" key={p.key}>
                                    <Link to={`/projects/${p.key}`}>
                                          <p>{p.name}</p>
                                    </Link>
                              </li>
                        ))}
                  </ul>
            );
            return projectsHTML;
      };

      //

      return (
            <div className="ProjectsLand mainCard">
                  <ProjectsMapped />
            </div>
      );
}

export default ProjectsLandPage;
