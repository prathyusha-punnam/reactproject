import React from "react";
import Top from "./Top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bollywood from "./Bollywood"
import Honey from "./Honey.js";
import Growth from "./Growth";
import Info from "./Info";
import Place from "./Place";
import Movie from "./Movie.js";
import Empty from "./Empty";
import { CategoryProvider } from "./Matter";
import Final from "./Final";
const TotalComponents = () => {
  return (
    <div>
      <Router>
        <Top />
        <CategoryProvider>
        <Routes>
          <Route path="/" element={<Honey />} />
          <Route path="/*" element={<Empty />} />
          <Route path="/Honey" element={<Honey />} />
          <Route path="/Bollywood" element={<Bollywood />} />
          <Route path="/Growth" element={<Growth/>} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Place" element={<Place/>} />
          <Route path="/About" element={<Movie />} />
          <Route path="/Bollywood/:id" element={<Final/>}/>
          <Route path="/Growth/:id" element={<Final/>}/>
          <Route path="/Info/:id" element={<Final/>}/>
          <Route path="/Place/:id" element={<Final/>}/>
        </Routes>
        </CategoryProvider>
      </Router>
    </div>
  );
};

export default TotalComponents;