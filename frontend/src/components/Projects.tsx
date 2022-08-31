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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projectsList &&
          projectsList.map((project: IProjects) => {
            return (
              <div key={project.id} className="relative project-container">
                {/* image */}

                  <img src={project.image} alt={project.name} className="project-image opacity-100" />


                {/* projects name and links */}
                <div className="project-details absolute opacity-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
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
