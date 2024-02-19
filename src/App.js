import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Doctors from "./Components/Doctors";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="services">
          <Service />
        </div>

        <div id="doctors">
          <Doctors />
        </div>

        <div id="blog">
          <Blog />
        </div>
        <Footer/>
      </main>
    </div>
    
  );
};

export default App;