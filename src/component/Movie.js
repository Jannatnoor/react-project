import React from 'react';

const Movie = (props) => {
  console.log(props.data);

  return (
    <div>
      <p>name: {props.data[0].name}</p>
      <p>rating: </p>

      <p> - is a action movie</p>
      <p> is got rating - </p>
      <p>Black Adam released in: </p>
    </div>
  );
};

export default Movie;
