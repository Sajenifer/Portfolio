import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./Components/ui/sonner";

import Navbar from "./Navbar";
// Hero removed; show Contact/profile at top instead
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Certifications from "./Components/Certifications";
import Contact from "./Components/Contact";

const Home = () => {
  return (
    <div className="min-h-screen bg-paper text-foreground">
      <Navbar />
      <main>
        <Contact />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        
      </main>
      <Toaster richColors position="bottom-right" />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
