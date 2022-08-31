import { FC } from "react";

//components
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";

const App: FC = () => {
  console.log("app rendered");

  return (
    <>
      <Header />
      <div className="w-10/12 mx-auto">
        <Intro />
        <Projects />
      </div>
    </>
  );
};

export default App;
