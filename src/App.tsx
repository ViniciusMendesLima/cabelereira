import "./reset.css";
import styles from './App.module.css'
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
      <section className={styles.NavbarSection}>
        <Navbar />
      </section>
      <section id="home" className={styles.HomeSection}>
        <Home />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about" className={styles.AboutSection}>
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <ArrowTop/>
    </>
  );
}

export default App;
