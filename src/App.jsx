import { useState } from "react";
import Homepage from "./component/pages/Homepage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ChoiceProduct from "./component/pages/ChoiceProduct";
import SuccessPage from "./component/pages/SuccessPage";

function App() {
  return (
    <>
      {/* <Homepage />
      <ChoiceProduct /> */}

      <Router>
        <div>
          <Routes>
            <Route path="/product" element={<ChoiceProduct />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
