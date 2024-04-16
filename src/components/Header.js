import React from 'react';
import logo from '../assets/images/logo.png';  
import logo2 from '../assets/images/logo2.png';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src={logo2} alt="Aptos Mental Health Logo" className="h-8 mr-4" />
          <h1 className="text-xl font-bold text-purple-800">Aptos Mental Health</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="text-purple-600 hover:text-purple-800 transition duration-200">About</a></li>
            <li><a href="#services" className="text-purple-600 hover:text-purple-800 transition duration-200">Services</a></li>
            <li><a href="#testimonials" className="text-purple-600 hover:text-purple-800 transition duration-200">Testimonials</a></li>
            <li><a href="#contact" className="text-purple-600 hover:text-purple-800 transition duration-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;