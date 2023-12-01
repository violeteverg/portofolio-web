import "./app.scss";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/Parallax/Parallax";
import About from "./components/about/About";
import Portfolio from "./components/portofolio/Portofolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
        <Hero />
      </section>

      <section id="about">
        <Parallax type="About me" />
      </section>
      <section>
        <About />
      </section>
      <section id="Portofolio">
        <Parallax type="Portofolio" />
      </section>

      <Portfolio />

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
