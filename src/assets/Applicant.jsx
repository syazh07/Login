import React, { useEffect, useState,useContext  } from 'react'
import { FaBuilding } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { MdLocationPin, MdDateRange } from "react-icons/md";
import '../index.css'
import { useNavigate } from 'react-router-dom';
import { JobContext } from './jobContext';


const Jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "CodeTech Pvt Ltd",
    salary: "₹6-7 LPA",
    location: "Chennai",
    date: "09 May 2025",
    about: `CodeTech Pvt Ltd is a cutting-edge technology company specializing in creating dynamic and responsive web applications. We prioritize innovation, user experience, and continuous learning, making us a top destination for aspiring developers.`,
    website: "https://www.codetech.com",
    duty: `\n **Core Responsibilities**:\nDeveloping User Interfaces:\nImplementing the visual elements of a website or application using HTML, CSS, and JavaScript. \nCreating Responsive Designs:\nEnsuring websites and applications adapt seamlessly to different screen sizes and devices. \nImplementing Interactive Features:\nAdding dynamic elements and user interactions using JavaScript and frameworks like React, Angular, or Vue.js. \nOptimizing Website Performance:\nImproving page load times, minimizing resource usage, and ensuring efficient code execution. \nEnsuring Cross-Browser Compatibility:\nTesting and debugging websites to work correctly across different browsers and their versions. \nCollaborating with Designers and Back-end Developers:\nWorking closely with UI/UX designers to translate designs into functional code and with back-end developers to integrate front-end components with server-side logic. \nMaintaining and Updating Codebases:\nEnsuring code quality, reusability, and adherence to best practices. \nTroubleshooting and Debugging:\nIdentifying and resolving issues related to front-end functionality, performance, and compatibility. \nStaying Up-to-Date with Technologies:\nContinuously learning new front-end technologies, frameworks, and best practices.`,
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
    duty: `**Key Duties and Responsibilities**:\nTranslating Designs into Code:\nUI/UX developers take wireframes and visual designs created by UI/UX designers and implement them into functional user interfaces using front-end technologies like HTML, CSS, and JavaScript.\nBuilding User Interfaces:\nThey are responsible for developing the visual elements of applications, ensuring they are user-friendly, visually appealing, and consistent with the overall design.\nEnsuring Technical Feasibility:\nThey assess the technical viability of UI/UX designs and collaborate with designers to find solutions that are both aesthetically pleasing and technically sound.\nOptimizing Performance:\nUI/UX developers optimize applications for speed and scalability, ensuring a smooth and efficient user experience across different devices and platforms.\nTesting and Quality Assurance:\nThey conduct thorough testing of user interfaces to identify and fix bugs, ensure proper rendering across different platforms, and maintain high-quality standards.\nCollaboration and Communication:\nThey work closely with UI/UX designers, back-end developers, and other team members to ensure a cohesive and user-friendly product.\nUser Feedback Integration:\nThey gather feedback from users and stakeholders, analyze it, and use it to improve the user interface and experience.\nStaying Up-to-Date:\nThey keep abreast of the latest front-end technologies, design trends, and best practices to ensure their work is innovative and relevant.\nWriting Functional Requirements:\nThey contribute to the creation of technical documentation, including functional requirements and user guides.`
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
    duty: `**Responsibilities**:\n1. Front-End Development:\nDesigning and implementing user interfaces (UI) and user experiences (UX). \nUsing technologies like HTML, CSS, and JavaScript, along with frameworks like React, Angular, or Vue.js. \nEnsuring responsiveness and cross-platform optimization for various devices. \n2. Back-End Development: \nDeveloping server-side logic and APIs.\nWorking with databases (SQL and NoSQL).\nUtilizing technologies such as Node.js, Python (Django/Flask), or Java (Spring Boot).\n3. Database Management: \nDesigning, implementing, and managing databases to ensure efficient data storage and retrieval.\nOptimizing database performance.\n4. API Integration: \nCreating and integrating APIs (both RESTful and GraphQL) for seamless communication between front-end and back-end components.\n5. Version Control: \nUtilizing version control systems like Git, GitHub, or GitLab to manage and track code changes.\n6. Testing and Debugging: \nConducting thorough testing of applications to identify and fix bugs.\nTroubleshooting issues and ensuring seamless functionality.\n7. Collaboration and Communication:\nCollaborating with other developers, designers, and stakeholders to ensure project goals are met. \nCommunicating effectively with team members and stakeholders throughout the development process. \n8. Project Management: \nParticipating in project planning, task management, and code reviews.\nEnsuring projects are completed on time and within budget.\n9. Staying Updated: \nKeeping up with the latest trends and technologies in web development.\nContinuously learning and improving their skills.`
  },
];

const Applicant = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [category, setCategory] = useState("");
  const [details, setDetails] = useState(null);
const { jobs } = useContext(JobContext);

  
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    job.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
    (category === "" || job.title.toLowerCase().includes(category.toLowerCase()))
  );

  const handleApply = (jobId) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !user.mail || !user.password) {
      alert("Please login to apply for jobs.");
      navigate("/login");
      return;
    }

    let appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    if (!appliedJobs.includes(jobId)) {
      appliedJobs.push(jobId);
      localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
    }

    alert(`Application submitted for job ID: ${jobId}`);
    navigate("/apply");
  };

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-4">
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className='max-w-7xl mx-auto flex items-center-safe justify-between px-6 py-4 h-15'>
          <nav className="flex place-items-end-safe bg-purple-100 h-15 ">
            <a href="#" className="text-purple-800 hover:text-purple-600 font-bold text-1xl" onClick={() => navigate("/")}>Home</a>
            <a href="#" className="text-purple-800 hover:text-purple-600 font-bold text-1xl" onClick={() => navigate("/login")}>Login/Sign Up</a>
            <button className='px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 cursor-pointer' onClick={() => navigate("/post-job")}>Post Jobs</button>
          </nav>
        </div>
      </header>

      <div className="text-center mb-6 flex flex-col items-center">
        <h2 className="text-3xl font-serif text-purple-800 animate-bounce bg-purple-200">Your Dream Job Awaits Here!</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <input
            type="text"
            placeholder="🔍Search for Jobs..."
            className="p-2 border rounded-md shadow w-full sm:w-64"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search by location"
            className="p-2 border rounded-md shadow w-full sm:w-64"
            onChange={(e) => setSearchLocation(e.target.value)}
          />
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border rounded-md shadow w-full sm:w-64"
          >
            <option value="">All Categories</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center">
        {details === null ? (
          <div className="w-full lg:w-1/2 bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-4 text-purple-800">JOB LISTINGS</h2>
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="mb-4 border p-4 rounded-md hover:bg-purple-50 cursor-pointer"
              >
                <h2
                  className="text-lg font-semibold text-purple-600 hover:underline"
                  onClick={() => setDetails(job)}
                >
                  {job.title}
                </h2>
                <p><FaBuilding className="inline" /> <b>Company:</b> {job.company}</p>
                <p><RiMoneyRupeeCircleFill className="inline" /> <b>Salary:</b> {job.salary}</p>
                <p><MdLocationPin className="inline" /> <b>Location:</b> {job.location}</p>
                <p><MdDateRange className="inline" /> <b>Posted On:</b> {job.date}</p>
                <button
                  className="mt-2 px-4 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
                  onClick={() => handleApply(job.id)}
                >
                  Apply
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full lg:w-1/2 bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">{details.company}</h2>
            <h3 className="text-lg font-semibold">About:</h3>
            <p className="mb-3">{details.about}</p>
            <h3 className="text-lg font-semibold">Duties & Responsibilities:</h3>
            <p className="whitespace-pre-line mb-3">{details.duty}</p>
            <p><b>Contact:</b> <a className="text-blue-600 underline" href={details.website} target="_blank" rel="noopener noreferrer">{details.website}</a></p>
            <div className="mt-4 flex gap-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setDetails(null)}
              >
                Back to Listings
              </button>
              <button
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                onClick={() => handleApply(details.id)}
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Applicant;
