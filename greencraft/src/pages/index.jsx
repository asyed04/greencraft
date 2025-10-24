import React from 'react';
import Contact from './pages/contact.jsx';

function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Blank Page</h1>
      <p className="text-lg text-gray-600">
        Start building your content here 🚀
      </p>
      <Contact/>
    </div>
  );
}

export default Landing;