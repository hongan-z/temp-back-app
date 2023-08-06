import React from "react";
import About from "./component/About";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Tour from "./component/Tour";
import Services from "./component/Services";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Services/>
      <Tour/>
      <Footer/>
    </>
  );
};

export default App;
