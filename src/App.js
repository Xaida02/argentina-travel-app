import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import Error from "./pages/Error";
//import components
import Navbar from "./components/Navbar";
import SinglePage from "./pages/SinglePage";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  // return <Home />;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact element={<Home />} path="/" />
        <Route element={<SinglePage />} path="/tour/:name" />
        <Route element={<About />} path="about" />
        <Route element={<Contact />} path="contact" />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
