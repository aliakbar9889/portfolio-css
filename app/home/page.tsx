import React from 'react';
import Image from 'next/image'; // Importing Image component from Next.js

function HeroSection() {
  return (
    <section className="hero-section">
      {/* Left Side - Content */}
      <div className="hero-left">
        <h1 data-aos="fade-up" className="hero-heading">Hey, I am <span className="grey">Ali Akbar</span></h1>
        <p data-aos="fade-up" className="hero-paragraph">A Frontend Developer passionate about building responsive, dynamic websites.</p>
        <p data-aos="fade-up" className="hero-paragraph">I specialize in React.js and Next.js to create modern, user-friendly interfaces. Let&apos;s create something amazing together!</p>
      </div>

      {/* Right Side - Image */}
      <div className="hero-right">
        <Image
          data-aos="fade-up"
          src="/profile.png"        // Image source
          alt="Hero"                // Alt text for accessibility
          className="hero-image"    // Your custom class for styling
          width={500}               // Set width of the image
          height={500}              // Set height of the image
        />
      </div>
    </section>
  );
}

export default HeroSection;
