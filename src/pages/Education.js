import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        {/* <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Clarence
              <span className="text-primary">Taylor</span>
            </h1>
            <div className="subheading mb-5">
              3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
              <a href="mailto:name@email.com">name@email.com</a>
            </div>
            <p className="lead mb-5">
              I am experienced in leveraging agile frameworks to provide a
              robust synopsis for high level overviews. Iterative approaches to
              corporate strategy foster collaborative thinking to further the
              overall value proposition.
            </p>
            <div className="social-icons">
              <a className="social-icon" href="#!">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="social-icon" href="#!">
                <i className="fab fa-github"></i>
              </a>
              <a className="social-icon" href="#!">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="social-icon" href="#!">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </section> */}
        <hr className="m-0" />

        <section className="resume-section" id="education">
          <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">National Cambridge School</h3>
                <div className="subheading mb-3">Matriculation</div>
                <div>Computer Science</div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">2006 - 2019</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">Gov Boys Degree College 11-A North Karachi</h3>
                <div className="subheading mb-3">Intermediate</div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">2020 - 2022</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    </>
  );
};

export default Education;
