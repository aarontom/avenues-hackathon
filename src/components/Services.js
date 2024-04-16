import React from 'react';

const Services = () => {
  return (
    <div className="my-12 px-6">
      <h2 className="text-3xl font-semibold text-center">Our Services</h2>
      <div className="flex justify-around flex-wrap mt-8">
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
          <h3 className="text-xl font-bold">Counseling</h3>
          <p>Personal and group sessions to help you navigate mental health challenges.</p>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
          <h3 className="text-xl font-bold">Workshops</h3>
          <p>Interactive workshops focusing on mental health awareness and coping strategies.</p>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
          <h3 className="text-xl font-bold">Resources</h3>
          <p>Access to online materials and tools to support mental well-being.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;