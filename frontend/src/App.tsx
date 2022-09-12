import { FC, useState, useCallback } from "react";
import { IUnknownObjectKey } from "./interface";

//components
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App: FC = () => {
  console.log("app rendered");
  //const [projectDetails, setProjectDetails] = useState<IUnknownObjectKey>({});

  //toggle project's details modal, map id key to target clicked element
  // const toggleComment = useCallback((id: string) => {
  //   setProjectDetails((prev) => (Boolean(!prev[id]) ? { ...prev, [id]: true } : { ...prev, [id]: false }));
  // }, []);

  // console.log(projectDetails);

  //toggleComment={toggleComment} projectDetails={projectDetails} setProjectDetails={setProjectDetails}

  return (
    <>
      <div id="home"></div>
      <Header />
      <div className="w-10/12 mx-auto">
        <Intro />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
};

export default App;
