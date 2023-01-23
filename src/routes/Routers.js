import React from "react";
import { Routes, Route } from "react-router-dom";
import Final from "../pages/Final";
import Question1 from "../pages/Question1";
import Question2 from "../pages/Question2";
import Question3 from "../pages/Question3";
import Question4 from "../pages/Question4";
import Question5 from "../pages/Question5";
import Thanks from "../pages/Thanks";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Question1 />} />
      <Route path="/q2" element={<Question2 />} />
      <Route path="/q3" element={<Question3 />} />
      <Route path="/q4" element={<Question4 />} />
      <Route path="/q5" element={<Question5 />} />
      <Route path="/final" element={<Final />} />
      <Route path="/thanks" element={<Thanks />} />
    </Routes>
  );
};

export default Routers;
