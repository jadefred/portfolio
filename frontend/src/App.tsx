import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App: FC = () => {
  console.log("app rendered");

  return (
    <>
      <Router>
        <Routes>
          {/* index page */}
          <Route path="/" element={<Home />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
