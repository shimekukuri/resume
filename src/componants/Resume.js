import React from "react";
import clsx from "clsx";

export default function Resume(props) {
  const { className } = props;

  const classes = clsx(className);

  return (
    <>
      <div className="resume-container">
        <div className="flex-center resume-subcontainer">
          <div className="resume-background">
            <div className="resume-margin">
              <h1 className="flex-center">Resume</h1>
              <h2>About:</h2>
              <p>Hello,</p>
              <p>
                I'm a recent Father that is looking to move his career into
                something more meaningfull to myself and my family. Starting in
                January of 2022 I started the road of Web Development. Sense
                that time I've taken two seperate courses one in pure JS and one
                in React, also during that time I've done various other courses,
                excersizes and general reading. In my spare time I'm an avid
                reader, musician, and avid vintage video game collector.
                Currently I'm still continuing to study Web Development to
                improve my skills and hopefully move into the subject as a
                career.
              </p>
              <h2>Education:</h2>
              <strong>
                <h4 className="resume-p">
                  Saint Clair County Community College
                </h4>
              </strong>
              <p className="resume-p">Associates of Computer Networking,</p>
              <p className="resume-p">• Served as president (2 years)</p>
              <p className="resume-p">• Coordinated charitable events</p>
              <p className="resume-p">• Graduated with Honors</p>
              <p> </p>
              <strong>
                <h4 className="resume-p">Ferris State University</h4>
              </strong>
              <p className="resume-p">Bachelors of Business Administration</p>
              <p className="resume-p">• Graduated with 3.8 GPA</p>
              <p className="resume-p">• Also completed Hacking courses</p>
              <p className="resume-p">• Graduated with Honors</p>
              <h2>Work History:</h2>
              <h4 className="resume-p">Jimmy Johns</h4>
              <p className="resume-p">
                <i>Team Member</i>
              </p>
              <p className="resume-p">• Dedicated closing team member</p>
              <p className="resume-p">• Prepared and managed orders</p>
              <p className="resume-p">• Maintained food and safety standards</p>
              <p></p>
              <h4 className="resume-p">Meijer</h4>
              <p className="resume-p">
                <i>Over-Night GM</i>
              </p>
              <p className="resume-p">
                • Created and executed business directives
              </p>
              <p className="resume-p">
                • Acting store director during overnight shifts
              </p>
              <p className="resume-p">• Licensed Fork-Lift operator</p>
              <p></p>
              <h4 className="resume-p">Ollies Bargain Outlet</h4>
              <p className="resume-p">
                <i>Co-General Manager</i>
              </p>
              <p className="resume-p">• Handle all HR duties</p>
              <p className="resume-p">• Manage all staff</p>
              <p className="resume-p">• Execute merchanizing standards</p>
              <p></p>
              <h2>References:</h2>
              <h4 className="resume-p">Troy Hicks</h4>
              <p className="resume-p">
                <i>Higher Education consultant</i>
                <p className="resume-p">• Contact information upon request</p>
              </p>
              <p></p>
              <h4 className="resume-p">Demite Luquer</h4>
              <i>(Retired) General Manager</i>
              <p className="resume-p">
              • Contact information upon request
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
