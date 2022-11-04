import React from 'react';

import Navbar from './component/Navbar';
import Main from './component/Main';
import Image from "./Image/Myself.jpg" 

import './App.css';

const App = () => {
  const info = "I am a software developer"
  //
  return (
    <>
      {/* .jsx */}
      {/* Component */}

      <Navbar />
      <Main name = "Jannat" age = "23" pic = {Image} info = {info}  />

    </>
  );
};

export default App;
