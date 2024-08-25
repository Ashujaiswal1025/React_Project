import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const {userid} = useParams()
  return (
    <div className=' relative flex justify-center items-center p-10'>
       <div className=" w-full flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-center">
          <img
            className="w-24 h-24 rounded-full border-4 border-orange-500"
            src="https://via.placeholder.com/150"
            alt="User Avatar"
          />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-2xl font-semibold text-gray-800">{userid}</h2>
          <p className="mt-2 text-gray-700">Software Developer</p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">About</h3>
          <p className="text-gray-700 mt-2">
            {userid} is a skilled software developer with 5 years of experience in web development. He is proficient in React, Node.js, and has a strong passion for learning new technologies.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>HTML & CSS</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
        <div className="mt-6 text-center">
          <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300">
            Edit Profile
          </button>
        </div>
      </div>
       </div>
    </div>
  );
}

export default User;
