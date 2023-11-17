import "./app.scss";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Parallax from "./components/Parallax/Parallax";
import About from "./components/about/About";
import Portfolio from "./components/Portofolio/Portofolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
        <Hero />
      </section>

      <section>
        <Parallax type="About me" />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Parallax type="Portofolio" />
      </section>

      <Portfolio />

      <section>
        <Contact />
      </section>
    </div>
  );
};

export default App;
