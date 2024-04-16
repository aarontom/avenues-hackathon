import React from 'react';
import featureImage from '../assets/images/smile.jpeg'

const About = () => {
    return (
        <div className="main-container">
            <div className="flex flex-col lg:flex-row items-center justify-center my-12 mx-4 lg:mx-8 min-h-screen flex flex-col border-x-4 border-gray-400 border-opacity-50">
            <div className="lg:w-1/2 lg:ml-12">
                <h2 className="text-2xl font-bold">About Us</h2>
                <p className="mt-4">
                We are dedicated to improving mental health culture and reducing stigma through education, support, and community engagement.
                </p>
            </div>
            <div className="lg:w-1/2 flex justify-center">
                <div className="w-2/3 my-4 p-4"> {/* Additional padding is added here */}
                <img 
                    src={featureImage} 
                    className="w-full h-auto border-4 border-gray-300" // Add rounded class if you want rounded borders
                    style={{ maxWidth: '100%', height: 'auto' }} 
                />
                </div>
            </div>
            </div>
        </div>
      );
    };

export default About;
