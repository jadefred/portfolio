import { FC } from "react";

//components
import Header from "../components/Header";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Home: FC = () => {
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

export default Home;
