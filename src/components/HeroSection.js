import React from 'react';

const HeroSection = () => {
  return (
    <div className="w-full bg-blue-500 text-white text-center p-20">
      <h1 className="text-4xl font-bold">Supporting Mental Well-Being</h1>
      <p className="text-xl mt-4">Join us in breaking the stigma around mental health.</p>
      <button className="mt-8 px-6 py-3 bg-purple-700 rounded hover:bg-purple-800 transition duration-200">
        Learn More
      </button>
    </div>
  );
};

export default HeroSection;
