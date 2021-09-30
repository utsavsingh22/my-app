import React from "react";
import About from "./_About";
import Education from "./_Education";
import Experience from "./_Experience";
import Interests from "./_Interests";
import Skills from "./_Skills";

const PageContent = ({ Data }) => {
  return (
    <div className="container-fluid p-0">
      <About {...Data.About} Name={Data.Name} Socials={Data.Socials} />
      <Experience />
      <Education />
      <Skills />
      <Interests />
    </div>
  );
};

export default PageContent;