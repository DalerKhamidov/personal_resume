import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const adjectives = ["ynamic", "aring", "azzling", "elightful", "ependable"];

const HomePage = () => {
  const [currentText, setCurrentText] = useState("ynamic");
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  let timeint = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % adjectives.length);
    }, timeint); // Change text every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    setCurrentText(adjectives[index]);
  }, [index]);

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary text-secondary font-comfortaa">
      <div className='flex items-center'>
        <h1 className='text-7xl font-bold mb-8'>D</h1>
        <div className="text-7xl font-bold overflow-hidden mb-8">
            <div className="animate-spin-vertical">{currentText}</div>
        </div>
    </div>
    <p className="text-lg mb-6 text-[#38655A]">Select the Item Below</p>
    <div className="flex flex-col space-y-4">
        <button
        onClick={() => handleButtonClick('/projects')}
        className="text-xl bg-transparent border-none text-secondary py-2 px-4 rounded hover:bg-secondary hover:text-primary transition"
        >
        Projects
        </button>
        <button
        onClick={() => handleButtonClick('/about')}
        className="text-xl bg-transparent border-none text-secondary py-2 px-4 rounded hover:bg-secondary hover:text-primary transition"
        >
        About Me
        </button>
        <button
        onClick={() => handleButtonClick('/contact')}
        className="text-xl bg-transparent border-none text-secondary py-2 px-4 rounded hover:bg-secondary hover:text-primary transition"
        >
        Contact Me
        </button>
    </div>
      
    </div>
  );
};

export default HomePage;