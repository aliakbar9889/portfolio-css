import React from 'react';
import { FaInstagram, FaLinkedin,  FaGithubSquare  } from 'react-icons/fa';  // Importing social media icons


const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-left">
          <h3><b><i>ALI AKBAR</i></b></h3>
        </div>
        <div className="footer-center">
          <nav className="nav-links">
            <a href="/"><i>About</i></a>
            <a href="/about"><i>Testimonials</i></a>
            <a href="/contact"><i>Contact</i></a>
    
            
          </nav>
        </div>
        <div className="footer-right">
          <div className="social-icons">
            {/* React Icons */}
            <a href="https://www.instagram.com/aliakbar_360/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com/in/ali-akbar-b66ab62b6/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/aliakbar9889" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Center Section */}
      <div className="footer-center-line">
        <hr />
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-left">
          <h3><i>@2024 ALL COPYRIGHT RESERVED</i></h3>
        </div>
        <div className="footer-center"></div> {/* Empty center */}
        <div className="footer-right">
          <nav className="bottom-nav-links">
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
            <a href="/help">Help</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
