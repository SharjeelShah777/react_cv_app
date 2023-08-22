import React from "react";
import Header from "../components/Header";

const Experience = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="experience">
          <div className="resume-section-content">
          <h2 className="mb-5">Experience</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Front End Developer</h3>
                <div className="subheading mb-3">S-M-I-T</div>
                <p>
                I am an avid coding enthusiast who finds immense joy in crafting lines of logic. Coding isn't just work for me; it's a gratifying pursuit that brings both satisfaction and purpose.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">November 2022 - Present</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Mern Stack Developer</h3>
                <div className="subheading mb-3">S-M-I-T</div>
                <p>
                I am a dedicated MERN stack developer with a profound passion for coding, finding sheer delight in the process while recognizing it as a rewarding endeavor.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">November 2022 - Present</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    </>
  );
};

export default Experience;
