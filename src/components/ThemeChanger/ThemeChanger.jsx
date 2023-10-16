import React, { useState } from 'react'
import "./ThemeChange.css"
const ThemeChanger = ({ handleChange, isChecked }) => {

  return (
    <>
      <div className='toggle-container' >
        {/* <input type='checkbox' id='check' className='toggle' onChange={handleChange} checked={isChecked}/>
        <label htmlFor='check'>Dark Mode </label> */}
        <label className="switch" htmlFor='check' >
          <input type="checkbox" id='check' className='toggle' onChange={handleChange} checked={isChecked}/>
          <span className="slider"></span>
        </label>
      </div>
    </>
  )
}

export default ThemeChanger