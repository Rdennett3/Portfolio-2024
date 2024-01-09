import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import { About } from "./Pages/About";
import { Rates } from "./Pages/Rates";
import bobd from './Images/bobd-2.png';

const App = () => {

  return <>
    <nav>
      <div className="nav-item">
        <Link to="/">
          <img src={bobd} alt='footer logo' />
        </Link>
      </div>
      <div className="nav-item">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/rates">Freelancing</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}>Contact</Route>
      <Route path="/about" element={<About />}>About</Route>
    </Routes>
    <footer>
      <div className="footer-container">
        {/* <div className="footer-item">
          <img src={bobd} alt='footer logo' />
        </div> */}
        <div className="footer-item">
          <h3>Get In Touch</h3>
          <div className="contact-container">
            <p><a href='mailto:r.dennett3@gmail.com'>R.Dennett3@gmail.com</a></p>
          </div>
        </div>
        <div className="footer-item">
          <h3>Social</h3>
          <div className="contact-container">
            <p><a href='https://www.instagram.com/bobd3/' target='_blank'>Instagram</a></p>
            <p><a href='https://www.linkedin.com/in/bob-dennett-b3227b103/' target='_blank'>Linkedin</a></p>
            <p><a href='https://github.com/Rdennett3' target='_blank'>Github</a></p>
          </div>
        </div>
      </div>
    </footer>
  </>
}

export default App;
