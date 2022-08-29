import { FC } from "react";

//components
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Intro from "./components/Intro";

const App: FC = () => {
  console.log("app rendered");

  return (
    <div className="relative">
      
      <Header />
      <SideBar />
      <Intro />
    </div>
  );
};

export default App;
