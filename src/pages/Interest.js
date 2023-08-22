import React from "react";
import Header from "../components/Header";

const Interest = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="interests">
          <div className="resume-section-content">
            <h2 className="mb-5">Interests</h2>
            <p>
            As a web developer, I constantly thrive on acquiring new skills, complementing my expertise. During leisure
            ,I'm an avid enthusiast of movies and cricket, finding immense joy in both playing and watching."
            </p>
            {/* <p className="mb-0">






            </p> */}
          </div>
        </section>
        <hr className="m-0" />
      </div>
    </>
  );
};

export default Interest;
