import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Password from './Password'
import Counter from './Counter'
import Color from './Color'
import Home from './Home';
import CurCon from './currency/CurCon';

const App = () => {
  return (
    <div className='h-screen w-full flex flex-col bg-[#212121]'>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/color" element={<Color />} />
        <Route path="/password" element={<Password />} />
        <Route path="/currency-converter" element={<CurCon />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App