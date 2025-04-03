import React from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Icourses from "./Pages/Icourses";
import News from "./Pages/News";
import AboutUs from "./Pages/AboutUs";
import HelpAndSupport from "./Pages/HelpAndSupport";
import Apps from "./Pages/Apps";
import ICoursesDetails from "./Pages/iCoursesDetails";
import Footer from "./Components/Footer";
import NewsDetails from "./Pages/NewsDetails";

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
        <Route path="/icourses/:name" element={<ICoursesDetails />} />
        <Route path="/news/:name" element={<NewsDetails />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
