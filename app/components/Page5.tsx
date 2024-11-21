import React from 'react';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';  // Importing the Image component from Next.js

const ReviewComponent = () => {
  return (
    <div className="review-container">
      {/* Top Heading */}
      <h1 data-aos="fade-down-left" className="review-heading"><b><i>Clients Testimonials</i></b></h1>

      {/* Cards */}
      <div data-aos="fade-down-left" className="review-cards">
        {/* Card 1 */}
        <div className="review-card">
          <div className="review-card-top">
            <h2>Excellent Service</h2>
            <div className="review-stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
          </div>
          <div className="review-card-center">
            <p>&quot;The support and service provided were top-notch. Highly recommended!&quot;</p>
          </div>
          <div className="review-card-bottom">
            <Image
              src="/john.png"
              alt="Profile Picture of John Doe"
              className="profile-image"
              width={50}  // Set a specific width for the image
              height={50} // Set a specific height for the image
            />
            <span>John Doe</span>
          </div>
        </div>

        {/* Card 2 */}
        <div data-aos="fade-down-left" className="review-card">
          <div className="review-card-top">
            <h2>Great Experience</h2>
            <div className="review-stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
          </div>
          <div className="review-card-center">
            <p>&quot;Fantastic quality and amazing customer service. I am very satisfied!&quot;</p>
          </div>
          <div className="review-card-bottom">
            <Image
              src="/moiz.png"
              alt="Profile Picture of Moiz Ali"
              className="profile-image"
              width={50}
              height={50}
            />
            <span>Moiz Ali</span>
          </div>
        </div>

        {/* Card 3 */}
        <div data-aos="fade-down-left" className="review-card">
          <div className="review-card-top">
            <h2>Highly Recommend</h2>
            <div className="review-stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
          </div>
          <div className="review-card-center">
            <p>&quot;Amazing experience! Will definitely come back for more.&quot;</p>
          </div>
          <div className="review-card-bottom">
            <Image
              src="/alex.png"
              alt="Profile Picture of Alex Brown"
              className="profile-image"
              width={50}
              height={50}
            />
            <span>Alex Brown</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;
