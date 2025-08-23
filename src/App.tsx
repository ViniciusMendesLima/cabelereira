import "./reset.css";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { ServicesData } from "./data/services";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { ArrowTop } from "./components/ArrowTop";

function App() {
  console.log(ServicesData);

  return (
    <>
      <section className="navbar-section">
        <Navbar />
      </section>
      <section id="home" className="home-section">
        <Home />
      </section>
      <section id="services" className="service-section">
        <Services />
      </section>
      <section id="about" className="about-section">
        <About />
      </section>
      <section id="contact" className="contact-section">
        <Contact />
      </section>
      <ArrowTop/>
    </>
  );
}

export default App;
