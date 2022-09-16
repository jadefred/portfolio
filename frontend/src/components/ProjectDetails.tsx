import { FC } from "react";
import { IProjects } from "../interface";
import usePreferenceStatus from "../Context";
import arrow from "../assets/images/arrow-white.svg";
import cross from "../assets/images/cross.svg";

interface IProps {
  project: IProjects;
}

const ProjectDetails: FC<IProps> = ({ project }) => {
  const { projectDetails, toggleProjectDetails, language } = usePreferenceStatus();

  //freeze body from scrolling when modal is there
  if (projectDetails[project.id]) {
    document.body.classList.add("active-modal");
  }

  //function to update projectDetails object and remove modal class to unfreeze body
  const closeModal = (id: string) => {
    toggleProjectDetails(id);
    document.body.classList.remove("active-modal");
  };

  return (
    <div className="modal">
      <div
        onClick={() => closeModal(project.id)}
        className="modal bg-transparentBlack backdrop-blur-sm animate-overlayBlack"
      ></div>
      <div className="modal--content border-4 right-0 left-0 top-0 bottom-0 w-11/12 md:w-2/3 inline-table m-auto bg-bgColor border-black">
        {/* Content */}
        <div className="flex flex-col justify-between relative h-full">
          {/* cross svg */}
          <div className="flex justify-end my-1 pr-1">
            <img src={cross} alt="close project details" onClick={() => closeModal(project.id)} className="w-7 cursor-pointer" />
          </div>
          {/* Details */}
          <div className="flex flex-col h-full justify-between">
            {/* Screenshot gif */}
            <div className="aspect-video lg:w-10/12 overflow-hidden mx-auto">
              <img src={require(`../assets/images/${project.gif}`)} alt={`gif of ${project.name}`} className="w-full" />
            </div>

            {/* Name, skills, description */}
            <div className="text-left mt-2 px-4">
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <p className="mb-5">{project.skills}</p>
              {language === "en" ? <p className="mb-5">{project.detailsEN}</p> : <p className="mb-5">{project.detailsFR}</p>}
            </div>

            {/* Link of code and / or demo */}
            <div className="flex px-4 mb-5">
              <div className="flex bg-black relative px-4 py-1 group">
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
                <div className="flex bg-black relative px-4 py-1 group ml-4">
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
