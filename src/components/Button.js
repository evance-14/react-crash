import React from 'react'

//recieves prop from parent(Header) destructured
const Button = ({color,text,onClick}) => {
  return <button 
  onClick={onClick} style={{backgroundColor:color}} className='btn'>{text}
  </button>
}

export default Button
