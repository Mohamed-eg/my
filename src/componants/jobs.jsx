import React from "react";

const Jobs = () => {
  const jobs = [
    {
      company: "ABC Company",
      position: "Web Developer",
      duration: "January 2019 - Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam diam id ligula feugiat fringilla.",
    },
    {
      company: "XYZ Corporation",
      position: "Frontend Developer",
      duration: "June 2017 - December 2018",
      description:
        "Nullam pulvinar nunc non ultricies commodo. Cras eu libero ac neque congue lacinia vitae nec nulla.",
    },
    // Add more job objects as needed
  ];

  return (
    <div className="jobs-container">
      <h2>Work Experience</h2>
      {jobs.map((job, index) => (
        <div className="job-item" key={index}>
          <h3>{job.position}</h3>
          <p className="company-name">{job.company}</p>
          <p className="duration">{job.duration}</p>
          <p className="description">{job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
