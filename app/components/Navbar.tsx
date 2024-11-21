import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left Side - Name */}
      <div data-aos="fade-right" className="navbar-left">
        ALI AKBAR
      </div>

      {/* Center - Nav Links */}
      <div className="navbar-center">
         <Link href="/home"><span className="nav-link">Home</span></Link>
         <Link href="/about"><span className="nav-link">About Me</span></Link>
         <Link href="/skills"><span className="nav-link">Skills</span></Link>
         <Link href="/projects"><span className="nav-link">Project</span></Link>
         <Link href="/testimonials"><span className="nav-link">Testimonials</span></Link>
      </div>

      {/* Right Side - Button */}
      <button data-aos="fade-right" className="navbar-button"><Link href="/contact">
        CONTACT ME</Link>
      </button>
    </nav>
  );
}

export default Navbar;
