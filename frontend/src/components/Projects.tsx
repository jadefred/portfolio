import { FC } from "react";
import { useTranslation } from "react-i18next";
import projectsList from "../assets/projects.json";

interface IProjects {
  id: string;
  name: string;
  skills: string;
  url: string;
  code: string;
  image: string;
}

const Projects: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t("projects")}</h2>
      <div>
        {projectsList &&
          projectsList.map((project: IProjects) => {
            return (
              <div key={project.id} className="grid-cols-1">
                {/* image */}
                <div>
                  <img src={project.image} alt={project.name} />
                </div>

                {/* projects name and links */}
                <div>
                  <div>
                    <p>{project.name}</p>
                    <p>{project.skills}</p>
                  </div>
                  <div>
                    <a href={project.code}>Code</a>
                    {project.url === "" ? "" : <a href={project.url}>Demo</a>}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Projects;
