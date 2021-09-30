import React from "react";

const Education = () => {
  return (
    <>
      {/* <!-- Education--> */}
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Bharati Vidyapeeth deemed University College of Engineering Pune</h3>
              <div className="subheading mb-3">Bachelor of Technology</div>
              <div>Information Technology</div>
              <p>9.94 CGPA</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">August 2017 - August 2021</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0">St. Xavier's School</h3>
              <div className="subheading mb-3">Science</div>
              <p>Senior Secondary-6.67 CGPA</p>
              <p>Secondary-8.86 CGPA</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">August 2016 - May 2017</span>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
};

export default Education;
