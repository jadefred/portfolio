import { FC } from "react";

//components
import Header from "./components/Header";
import Intro from "./components/Intro";

const App: FC = () => {
  console.log("app rendered");

  return (
    <>
      <Header />
      <div className="w-10/12 mx-auto">
        <Intro />
      </div>
    </>
  );
};

export default App;
