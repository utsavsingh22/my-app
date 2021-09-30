import React from "react";

const Experience = () => {
  return (
    <>
      {/* <!-- Experience--> */}
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">Experience</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Associate Software Engineer</h3>
              <div className="subheading mb-3">ACCENTURE</div>
              <p>
                
                Currently on Training
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">Oct 2020 - Present</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Web Developer</h3>
              <div className="subheading mb-3">J&b Technology</div>
              <p>
              INTERN<br/>
              Created a new E-commerce website using wordpress for the client and designed the whole website.<br/> Made entire webpage in French and English Language.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">June 2020 - Aug 2020</span>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
};

export default Experience;
