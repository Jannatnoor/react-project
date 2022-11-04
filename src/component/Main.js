import React from 'react'


const Main = (props) => {
  return (
    <div className='desc'>
        <img className='img' src={props.pic}/>
        <div>
        <h1> {props.name} </h1>
        <p>age {props.age} </p>
        <p> {props.info} </p>
        
        </div>
        
    </div>
  )
}

export default Main
