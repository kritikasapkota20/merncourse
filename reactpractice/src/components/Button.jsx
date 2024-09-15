import React from 'react'

const Button = ({text,color,onClick}) => {
  return (
    <div>
      <button style={{background:color,color:"white"}} onClick={onClick}
      >{text}</button>
    
    </div>
  )
}

export default Button
