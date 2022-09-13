import { FC } from "react";
import { IProjects } from "../interface";
import usePreferenceStatus from "../Context";
import arrow from "../assets/images/arrow-white.svg";
import cross from "../assets/images/cross.svg";

interface IProps {
  project: IProjects;
}

const ProjectDetails: FC<IProps> = ({ project }) => {
  const { projectDetails, toogleProjectDetails, language } = usePreferenceStatus();

  //freeze body from scrolling when modal is there
  if (projectDetails[project.id]) {
    document.body.classList.add("active-modal");
  }

  //function to update projectDetails object and remove modal class to unfreeze body
  const closeModal = (id: string) => {
    toogleProjectDetails(id);
    document.body.classList.remove("active-modal");
  };

  return (
    <div className="modal">
      <div onClick={() => closeModal(project.id)} className="modal bg-transparentBlack animate-overlayBlack"></div>
      <div className="modal--content border right-0 left-0 top-0 bottom-0 w-11/12 md:w-1/2 h-2/3 m-auto border-black bg-bgColor">
        {/* Content */}
        <div className="flex flex-col relative">
          {/* cross svg */}
          <img
            src={cross}
            alt="close project details"
            onClick={() => closeModal(project.id)}
            className="w-8 cursor-pointer absolute right-2 top-2"
          />
          {/* Details */}
          <div className="flex flex-col gap-y-5 text-left">
            {/* Screenshot */}
            <div className="aspect-video overflow-hidden">
              <img src={project.gif} alt={`screenshot of ${project.name}`} className="w-full"/>
            </div>

            {/* Name, skills, description */}
            <div>
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <p>{project.skills}</p>
              {language === "en" ? <p>{project.detailsEN}</p> : <p>{project.detailsFR}</p>}
            </div>

            {/* Link of code and / or demo */}
            <div className="flex">
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
      </div>
    </div>
  );
};

export default ProjectDetails;
