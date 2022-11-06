import React from 'react'

const About = (props) => {
  return (
    <div  className ='about'>
      <h1> About </h1>
      <p> {props.info} </p>
    </div>
     
  )
}

export default About