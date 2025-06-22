import React, { createContext, useState, useEffect } from 'react';

export const JobContext = createContext();

const defaultJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "CodeTech Pvt Ltd",
    salary: "₹6-7 LPA",
    location: "Chennai",
    date: "09 May 2025",
    about: `CodeTech Pvt Ltd is a cutting-edge technology company specializing in creating dynamic and responsive web applications. We prioritize innovation, user experience, and continuous learning, making us a top destination for aspiring developers.`,
    website: "https://www.codetech.com",
    duty: `Developing UI using HTML, CSS, JavaScript\nCreating Responsive Designs\nImplementing Interactive Features with React\nOptimizing Website Performance\nEnsuring Cross-Browser Compatibility\nWorking with designers and backend developers\nMaintaining and Updating Codebases\nDebugging and Troubleshooting\nKeeping up with front-end technologies`
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "DesignHub",
    salary: "₹4-6 LPA",
    location: "Bangalore",
    date: "08 May 2025",
    about: `DesignHub is a premier digital design agency transforming ideas into visually captivating and user-friendly interfaces. We thrive on design thinking, user research, and modern trends.`,
    website: "https://www.designhub.in",
    duty: `Translating Designs into Code\nBuilding User Interfaces\nEnsuring Technical Feasibility\nOptimizing Performance\nTesting and Quality Assurance\nCollaborating with Teams\nIncorporating User Feedback\nKeeping up with design trends`
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "TechNova Solutions",
    salary: "₹10-14 LPA",
    location: "Bangalore",
    date: "05 May 2025",
    about: `TechNova Solutions is a full-service IT firm offering end-to-end solutions with modern stacks like MERN and serverless architectures. We promote a culture of ownership and innovation.`,
    website: "https://www.technova.io",
    duty: `Frontend & Backend Development\nDatabase Management\nAPI Integration\nVersion Control (Git)\nTesting & Debugging\nTeam Collaboration\nProject Management\nStaying Updated with Tech`
  }
];

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("postedJobs")) || [];
    setJobs([...defaultJobs, ...savedJobs]);
  }, []);

  const addJob = (job) => {
    const updatedJobs = [...jobs, job];
    setJobs(updatedJobs);
    localStorage.setItem("postedJobs", JSON.stringify(updatedJobs.filter(j => !defaultJobs.some(d => d.id === j.id))));
  };

  return (
    <JobContext.Provider value={{ jobs, addJob }}>
      {children}
    </JobContext.Provider>
  );
};
