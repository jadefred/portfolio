import { FC } from "react";

//components
import Header from "./components/Header";
import Intro from "./components/Intro";

const App: FC = () => {
  console.log("app rendered");

  return (
    <div className="relative">
      
      <Header />
      <Intro />
    </div>
  );
};

export default App;
