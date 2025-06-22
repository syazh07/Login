import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Portal = () => {
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    setTimeout(() => {
      navigate('/applicant');
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-violet-100 to-blue-100 px-4">
      {!submit ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-8 rounded shadow-md space-y-5"
        >
          <h2 className="text-2xl font-bold text-center text-purple-800">Job Application Form</h2>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-300"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-300"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Resume</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Skills</label>
            <input
              type="text"
              placeholder="Enter your skills"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-300"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">About Yourself</label>
            <textarea
              rows="4"
              placeholder="Start writing..."
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-300"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-2">Application submitted successfully!</h2>
          <p className="text-gray-700">Redirecting to the job listings...</p>
        </div>
      )}
    </div>
  );
};

export default Portal;
