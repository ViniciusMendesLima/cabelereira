import './reset.css'
import './App.css'
import { Navbar } from './components/Navbar';
import { ServicesData } from './data/services'
import { Home } from './pages/Home';
import { Services } from './pages/Services';

function App() {
console.log(ServicesData
);


  return (
    <>
    <section className='navbar-section'>
      <Navbar/>
    </section>
    <section id='home' className="home-section">
      <Home />
    </section>
    <section id='services' className="service-section">
      <Services/>
    </section>
    </>
  )
}

export default App
