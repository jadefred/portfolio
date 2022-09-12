import { FC, useState, useCallback } from "react";

//components
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

//Index Signature - for toggle project details
type IUnknownObjectKey = {
  [key: string]: boolean;
};

const App: FC = () => {
  console.log("app rendered");
  const [projectDetails, setProjectDetails] = useState<IUnknownObjectKey>({});

  //toggle project's details modal, map id key to target clicked element
  const toggleComment = useCallback((id: string) => {
    setProjectDetails((prev) =>
      Boolean(!prev[id]) ? { ...prev, [id]: true } : { ...prev, [id]: false }
    );
  }, []);

  console.log(projectDetails)

  return (
    <>
      <div id="home"></div>
      <Header />
      <div className="w-10/12 mx-auto">
        <Intro />
        <Projects toggleComment={toggleComment} />
        <Skills />
        <Contact />
      </div>
    </>
  );
};

export default App;
