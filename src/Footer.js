import bobd from './Images/bobd-2.png';
const Footer = () => {

  return <footer>
    <div className="footer-container">

      <div className="footer-item">
        <h3>Get In Touch</h3>
        <div className="contact-container">
          <p><a href='mailto:r.dennett3@gmail.com'>R.Dennett3@gmail.com</a></p>
        </div>
      </div>
      <div className="footer-item">
        <h3>Social</h3>
        <div className="contact-container">
          <p><a href='https://www.instagram.com/bobd3/'>Instagram</a></p>
          <p><a href='https://www.linkedin.com/in/bob-dennett-b3227b103/'>Linkedin</a></p>
          <p><a href='https://github.com/Rdennett3'>Github</a></p>
        </div>
      </div>
    </div>
  </footer>;
};

export default Footer;