import React from "react";

const AnalyticsBoxes = () => {
  return (
    <div className="analytics-container">
      <h1 data-aos="fade-down-left">My Skills</h1>
      <div className="box-container">
        {/* Box 1 */}
        <div data-aos="fade-down-left" className="box box-1">
          <div className="box-top"><b><i>HTML</i></b></div>
          <div className="box-center">
            <div className="line"></div>
            <div className="percentage">90%</div>
          </div>
          <div className="box-bottom">
            <p><i>Expertise in Html</i></p>
          </div>
        </div>

        {/* Box 2 */}
        <div data-aos="fade-down-left" className="box box-2">
          <div className="box-top"><b><i>CSS</i></b></div>
          <div className="box-center">
            <div className="line"></div>
            <div className="percentage">85%</div>
          </div>
          <div className="box-bottom">
            <p><i>Expertise in Css</i></p>
          </div>
        </div>

        {/* Box 3 */}
        <div data-aos="fade-down-left" className="box box-3">
          <div className="box-top"><b><i>JavaScript</i></b></div>
          <div className="box-center">
            <div className="line"></div>
            <div className="percentage">45%</div>
          </div>
          <div className="box-bottom">
            <p><i>Expertise in JavaScript.</i></p>
          </div>
        </div>

        {/* Box 4 */}
        <div data-aos="fade-down-left" className="box box-4">
          <div className="box-top"><b><i>Next JS</i></b></div>
          <div className="box-center">
            <div className="line"></div>
            <div className="percentage">90%</div>
          </div>
          <div className="box-bottom">
            <p><i>Expertise in Next JS.</i></p>
          </div>
        </div>

        {/* Box 5 */}
        <div data-aos="fade-down-left" className="box box-5">
          <div className="box-top"><b><i>TypeScript</i></b></div>
          <div className="box-center">
            <div className="line"></div>
            <div className="percentage">95%</div>
          </div>
          <div className="box-bottom">
            <p><i>Expertise in TypeScript</i></p>
          </div>
        </div>

        {/* Box 6 */}
        <div data-aos="fade-down-left" className="box box-6">
          <div className="box-top"><b><i>Tailwind CSS</i></b></div>
          <div className="box-center">
            <div className="line"></div>
            <div className="percentage">20%</div>
          </div>
          <div className="box-bottom">
            <p><i>Expertise in Tailwind CSS.</i></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsBoxes;
