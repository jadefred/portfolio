import { FC } from "react";

//components
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact"

const App: FC = () => {
  console.log("app rendered");

  return (
    <>
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
