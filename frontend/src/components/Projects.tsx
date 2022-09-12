import { FC } from "react";
import { useTranslation } from "react-i18next";
import projectsList from "../assets/projects.json";
import arrow from "../assets/images/arrow-white.svg";

interface IProjects {
  id: string;
  name: string;
  skills: string;
  url: string;
  code: string;
  image: string;
}

interface IProps {
  toggleComment: (id: string) => void;
}

const Projects: FC<IProps> = ({toggleComment}) => {
  const { t } = useTranslation();

  return (
    <div className="section-title" id="projects">
      <span className="section-title__span">
        <h2 className="section-title__h2">{t("projects")}</h2>
      </span>

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
                  <div className="flex">
                    <div className="flex bg-black relative px-4 py-1 group rounded">
                      <p onClick={() => toggleComment(project.id)}  className="text-white">Savoir plus</p>
                    </div>

                    <div className="flex bg-black relative px-4 py-1 group rounded">
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-lg transition duration-300 ease-linear group-hover:-translate-x-1"
                      >
                        Code
                      </a>
                      <img
                        src={arrow}
                        alt="arrow"
                        className="ml-2 stroke-white h-3 absolute right-2 top-[13px] opacity-0 group-hover:animate-slide"
                      />
                    </div>
                    {project.url === "" ? (
                      ""
                    ) : (
                      <div className="flex bg-black relative px-4 py-1 group rounded ml-4">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white text-lg transition duration-300 ease-linear group-hover:-translate-x-1"
                        >
                          Demo
                        </a>
                        <img
                          src={arrow}
                          alt="arrow"
                          className="ml-2 stroke-white h-3 absolute right-2 top-[13px] opacity-0 group-hover:animate-slide"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Projects;
