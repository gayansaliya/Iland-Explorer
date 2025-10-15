import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Destination from "./components/Destination";
import Package from "./Components/Package";
import About from "./components/About";
import Gallery from "./components/Gallery";
 import Contact from "./Components/Contact";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        {/* <Route path="/package" element={<Package />} /> */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;