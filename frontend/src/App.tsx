import { FC } from "react";

//components
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Intro from "./components/Intro";

const App: FC = () => {
  console.log("app rendered");

  return (
    <div className="relative">
      <h1 className="text-center text-5xl my-8">Jade Fredenucci</h1>
      <Header />
      <SideBar />
      <Intro />
    </div>
  );
};

export default App;
