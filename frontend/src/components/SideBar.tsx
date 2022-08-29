import { FC } from "react";
import githubLogo from "../assets/github-logo.svg";
import linkedinLogo from "../assets/linkedin-logo.svg";

const SideBar: FC = () => {
  return (
    <div>
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
