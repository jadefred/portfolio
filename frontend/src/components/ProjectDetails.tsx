import { FC } from "react";
import { IProjects } from "../interface";
import usePreferenceStatus from "../Context";

interface IProps {
  project: IProjects;
}

const ProjectDetails: FC<IProps> = ({ project }) => {
  const { projectDetails, toogleProjectDetails } = usePreferenceStatus();

  //freeze body from scrolling when modal is there
  if (projectDetails[project.id]) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="modal">
      <div onClick={() => toogleProjectDetails(project.id)} className="modal bg-transparentBlack animate-overlayBlack"></div>
      <div className="modal--content border border-black bg-bgColor">
        <h2>Modifer Post</h2>
        <p>content</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
