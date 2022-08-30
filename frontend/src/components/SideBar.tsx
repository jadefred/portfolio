import { FC } from "react";
import githubLogo from "../assets/images/github-logo.svg";
import linkedinLogo from "../assets/images/linkedin-logo.svg";

const SideBar: FC = () => {
  return (
    <div className="fixed -bottom-56 md:bottom-10 left-5 flex flex-col gap-y-4">
      <a href="https://github.com/jadefred">
        <img src={githubLogo} alt="logo of the github" className="w-8" />
      </a>
      <a href="https://www.linkedin.com/in/jade-fredenucci">
        <img src={linkedinLogo} alt="logo of the linkedin" className="w-8" />
      </a>
    </div>
  );
};

export default SideBar;
