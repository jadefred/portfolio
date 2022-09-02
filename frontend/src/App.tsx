import { FC } from "react";

//components
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App: FC = () => {
  console.log("app rendered");

  return (
    <>
      <Header />
      <div className="w-10/12 mx-auto">
        <Intro />
        <Projects />
        <Skills />
      </div>
    </>
  );
};

export default App;
