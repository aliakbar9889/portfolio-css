import React from 'react';
import Image from 'next/image';  // Importing the Image component

const CustomComponent = () => {
  return (
    <div className="container">
      {/* Top Heading */}
      <h1 data-aos="fade-down-left" className="heading"><b><i>My Projects</i></b></h1>

      {/* Cards */}
      <div className="cards">
        {/* Card 1 */}
        <div data-aos="fade-down-left" className="card">
          <div className="card-image">
            <Image 
              src="/hilal.png" 
              alt="Card Image 1" 
              width={500}  // Set width for the image
              height={300} // Set height for the image
            />
          </div>
          <div className="card-content">
            <h2><b><i>HILALPLAY</i></b></h2>
            <p><i>A Hilal Entertainment Website using Next Js and Custom Css</i></p>
          </div>
        </div>

        {/* Card 2 */}
        <div data-aos="fade-down-left" className="card">
          <div className="card-image">
            <Image 
              src="/gh.png" 
              alt="Card Image 2" 
              width={500} 
              height={300} 
            />
          </div>
          <div className="card-content">
            <h2><b><i>GOVERNOR INITIATIVE CLONE</i></b></h2>
            <p><i>Governor Initiative Website Clone Using HTML, Css & JavaScript.</i></p>
          </div>
        </div>

        {/* Card 3 */}
        <div data-aos="fade-down-left" className="card">
          <div className="card-image">
            <Image 
              src="/re.png" 
              alt="Card Image 3" 
              width={500} 
              height={300} 
            />
          </div>
          <div className="card-content">
            <h2><b><i>ONLINE RESUME BUILDER</i></b></h2>
            <p><i>Online resume builder website using HTML, Css.</i></p>
          </div>
        </div>

        {/* Card 4 */}
        <div data-aos="fade-down-left" className="card">
          <div className="card-image">
            <Image 
              src="/generativeai.png" 
              alt="Card Image 4" 
              width={500} 
              height={300} 
            />
          </div>
          <div className="card-content">
            <h2><b><i>GENERATIVE AI INFORMATION</i></b></h2>
            <p><i>An Informative Website About Generative AI Using HTML, Css.</i></p>
          </div>
        </div>

        {/* Card 5 */}
        <div data-aos="fade-down-left" className="card">
          <div className="card-image">
            <Image 
              src="/timer.png" 
              alt="Card Image 5" 
              width={500} 
              height={300} 
            />
          </div>
          <div className="card-content">
            <h2><b><i>Countdown Timer</i></b></h2>
            <p><i>CountDown Timer using Next JS & Tailwind Css</i></p>
          </div>
        </div>

        {/* Card 6 */}
        <div data-aos="fade-down-left" className="card">
          <div className="card-image">
            <Image 
              src="/todo.png" 
              alt="Card Image 6" 
              width={500} 
              height={300} 
            />
          </div>
          <div className="card-content">
            <h2><b><i>TODO LIST</i></b></h2>
            <p><i>Todo List Using Vite + React</i></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomComponent;
