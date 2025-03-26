import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // Define navigate

  return (
    <div className="flex gap-3">
      <button onClick={() => navigate('/counter')} className="px-5 py-2 bg-sky-500 rounded-lg hover:bg-sky-800 duration-200">Counter</button>
      <button onClick={() => navigate('/color')} className="px-5 py-2 bg-sky-500 rounded-lg hover:bg-sky-800 duration-200">Color</button>
      <button onClick={() => navigate('/password')} className="px-5 py-2 bg-sky-500 rounded-lg hover:bg-sky-800 duration-200">Password</button>
      <button onClick={() => navigate('/timer')} className="px-5 py-2 bg-sky-500 rounded-lg hover:bg-sky-800 duration-200">Timer</button>
      <button onClick={() => navigate('/currency-converter')} className="px-5 py-2 bg-sky-500 rounded-lg hover:bg-sky-800 duration-200">Currency Converter</button>
    </div>
  );
};

export default Home;
