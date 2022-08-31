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
              <div key={project.id} className="relative project-container h-72">
                {/* image */}

                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image opacity-100 rounded-md w-full h-full object-cover transition duration-500"
                />

                {/* projects name and links */}
                <div className="project-details absolute opacity-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full p-12 flex flex-col justify-between transition duration-500">
                  {/* name and skills */}
                  <div className="project-details__text">
                    <p className="text-3xl font-semibold mb-2">{project.name}</p>
                    <p>{project.skills}</p>
                  </div>

                  {/* Code and demo */}
                  <div>
                    <div className="btn">
                      <div className="circle"></div>
                      <a href={project.code} target="_blank" rel="noopener noreferrer">
                        Code
                      </a>
                    </div>
                    {project.url === "" ? (
                      ""
                    ) : (
                      <div className="btn">
                        <div className="circle"></div>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          Demo
                        </a>
                      </div>
                    )}
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
