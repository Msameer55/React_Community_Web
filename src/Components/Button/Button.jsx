import React from 'react'
import "./Button.css"
import { NavLink } from 'react-router-dom'

const Button = ({text, className, path}) => {
  return (
    <>
        
            <NavLink to={path} className={className}>{text}</NavLink>
        
    </>
  )
}

export default Button
