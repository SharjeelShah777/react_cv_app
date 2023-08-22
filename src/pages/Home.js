import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Sharjeel Ahmed
              <span className="text-primary">Shah</span>
            </h1>
            <div className="subheading mb-5">
              North-Karachi · Pakistan · (+92) 3170251595 ·
              <a href="mailto:name@email.com">sharjeelshah626@email.com</a>
            </div>
            <p className="lead mb-5">
            As a hardworking and passionate individual, I bring a strong work ethic and unwavering commitment to achieving success in everything I do. With a proven track record of taking on challenges and delivering exceptional results, I thrive in fast-paced environments and am always eager to learn new skills. Whether working independently or as part of a team, I bring a positive attitude and collaborative approach to achieving shared goals. With a passion for excellence and a dedication to continuous improvement, I am excited to contribute my skills and energy to a dynamic organization that values hard work, creativity, and innovation.
            </p>
            <div className="social-icons">
              <a target="blank" className="social-icon" href="https://www.linkedin.com/in/sharjeel-shah-986874274/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a target="blank" className="social-icon" href="https://github.com/SharjeelShah777">
                <i className="fab fa-github"></i>
              </a>
              {/* <a className="social-icon" href="https://www.facebook.com/sharjeelshah.shah.39/">
                <i className="fab fa-instagram"></i>
              </a> */}
              <a target="blank" className="social-icon" href="https://www.facebook.com/sharjeelshah.shah.39/">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </section>
        <hr className="m-0" />
{/* =============================Experience Area======================================== */}

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
{/* =============================Education Area======================================== */}
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
{/* =============================Skills Area======================================== */}
        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">Programming Languages & Tools</div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <i className="fab fa-html5"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-css3-alt"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-js-square"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-react"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-node-js"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-sass"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-less"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-wordpress"></i>
              </li>
              
              
            </ul>
            <div className="subheading mb-3">Workflow</div>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Mobile-First, Responsive Design
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Cross Browser Testing & Debugging
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Cross Functional Teams
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Agile Development & Scrum
              </li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />

        
      </div>
    </>
  );
};

export default Home;
