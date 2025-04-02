import React from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Icourses from "./Pages/Icourses";
import News from "./Pages/News";
import AboutUs from "./Pages/AboutUs";
import HelpAndSupport from "./Pages/HelpAndSupport";
import Apps from "./Pages/Apps";

const App = () => {
  return (
    <Router>

      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/icourses" element={<Icourses />} />
        <Route path="/news" element={<News />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/support" element={<HelpAndSupport />} />
      </Routes>
    </Router>
  );
};

export default App;
