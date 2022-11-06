import React from 'react';

import Navbar from './component/Navbar';
import Main from './component/Main';
import Image from "./Image/Myself.jpg" 
import About from './component/About';

import './App.css';
import { render } from '@testing-library/react';

const App = () => {
  const info = "I am a software developer"
  //
  return (
    <>
      {/* .jsx */}
      {/* Component */}

      <Navbar />
      <Main name = "Jannat" age = "23" pic = {Image} info = {info}  />
      <About info = "I am jannatun Noor, Studying Software Engineering at TAMK"  />

    </>
  );
};

export default App;