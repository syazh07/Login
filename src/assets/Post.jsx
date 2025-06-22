import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JobContext } from './jobContext.jsx';

const Post = () => {
  const navigate = useNavigate();
  const { addJob } = useContext(JobContext);

  const [form, setForm] = useState({
    title: "",
    company: "",
    salary: "",
    location: "",
    date: "",
    about: "",
    duty: "",
    website: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const job = { ...form, id: Date.now() };
    addJob(job);
    navigate("/applicant");
  };

  return (
    <div className="max-w-2xl mx-auto mt-24 p-8 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Post a Job</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-semibold text-purple-800">Job Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Frontend Developer, etc."
            onChange={handleChange}
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <div>
          <label className="block font-semibold text-purple-800">Company Name:</label>
          <input
            type="text"
            name="company"
            placeholder="Enter company name"
            onChange={handleChange}
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <div>
          <label className="block font-semibold text-purple-800">Salary:</label>
          <input
            type="text"
            name="salary"
            placeholder="₹10-12 LPA"
            onChange={handleChange}
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <div>
          <label className="block font-semibold text-purple-800">Location:</label>
          <input
            type="text"
            name="location"
            placeholder="City or remote"
            onChange={handleChange}
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <div>
          <label className="block font-semibold text-purple-800">Posted Date:</label>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <div>
          <label className="block font-semibold text-purple-800">Company Website:</label>
          <input
            type="url"
            name="website"
            placeholder="https://example.com"
            onChange={handleChange}
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="block font-semibold text-purple-800">About Company:</label>
          <textarea
            name="about"
            rows="3"
            placeholder="Brief company description..."
            onChange={handleChange}
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <div>
          <label className="block font-semibold text-purple-800">Duties & Responsibilities:</label>
          <textarea
            name="duty"
            rows="4"
            placeholder="Mention job responsibilities..."
            onChange={handleChange}
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 rounded-md font-semibold hover:bg-purple-800 transition"
        >
          Save & Post Job
        </button>
      </form>
    </div>
  );
};

export default Post;
