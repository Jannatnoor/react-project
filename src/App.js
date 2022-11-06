import React from 'react';

import Navbar from './component/Navbar';
import Main from './component/Main';
import Image from './Image/Myself.jpg';
import About from './component/About';
import Movie from './component/Movie';

import './App.css';

const movie = [
  {
    name: 'Black Adam',
    rating: '7.5',
    type: 'Action',
  },
  {
    name: 'Avenger',
    rating: '8.0',
    type: 'Action',
    release_date: '10/10/2022',
  },
  {
    name: 'Frozen',
    rating: '7',
    type: 'Animation',
    release_date: 'Unknown',
  },
];

const App = () => {
  const info = 'I am a software developer';
  //
  return (
    <>
      {/* .jsx */}
      {/* Component */}

      <Navbar />
      <Main name='Jannat' age='23' pic={Image} info={info} />
      <About info='I am jannatun Noor, Studying Software Engineering at TAMK' />
      <Movie data={movie} />
    </>
  );
};

export default App;
