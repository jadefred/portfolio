import { FC } from "react";
import { useTranslation } from "react-i18next";
import projectsList from "../assets/projects.json";
import arrow from "../assets/images/arrow-white.svg";
import { IProjects } from "../interface";
import ProjectDetails from "./ProjectDetails";
import usePreferenceStatus from "../Context";

const Projects: FC = () => {
  const { t } = useTranslation();
  const { projectDetails, toggleProjectDetails, language } = usePreferenceStatus();

  return (
    <div className="section-title" id="projects">
      <span className="section-title__span">
        <h2 className="section-title__h2">{t("projects")}</h2>
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsList &&
          projectsList.map((project: IProjects) => {
            return (
              <div
                key={project.id}
                className="relative project-container h-72 border-[3px] dark:text-black border-black after:absolute after:bg-black dark:after:bg-gradient-to-r dark:after:from-blue-500 dark:after:via-sky-300 dark:after:to-teal-400 after:top-2.5 after:left-2.5 after:-right-2.5 after:-bottom-2.5 after:-z-20"
              >
                {/* image */}
                <img
                  src={require(`../assets/images/screenshots/${project.image}.png`)}
                  alt={project.name}
                  className="project-image opacity-100 w-full h-full object-cover transition duration-500"
                />

                {/* projects name and detail button */}
                <div className="project-details absolute opacity-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full p-12 flex flex-col justify-between transition duration-500">
                  {/* name and skills */}
                  <div className="project-details__text">
                    <p className="text-3xl font-semibold mb-2">{project.name}</p>
                    <p>{project.skills}</p>
                  </div>

                  {/* project's details */}
                  <div
                    className={`flex bg-black relative px-4 py-1 group cursor-pointer ${
                      language === "en" ? "w-32" : "w-[9.5rem]"
                    }`}
                  >
                    <p
                      onClick={() => toggleProjectDetails(project.id)}
                      className="text-white text-lg transition duration-300 ease-linear group-hover:-translate-x-1"
                    >
                      {t("learnMore")}
                    </p>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="ml-2 stroke-white h-3 absolute right-2 top-[13px] opacity-0 group-hover:animate-slide"
                    />
                  </div>
                </div>
                {projectDetails[project.id] ? <ProjectDetails project={project} /> : null}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Projects;
