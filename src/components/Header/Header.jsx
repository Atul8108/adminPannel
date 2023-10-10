import React from 'react'
import "./header.css";
import ThemeChanger from '../ThemeChanger/ThemeChanger';
import { useState , useEffect } from 'react';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDark(storedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    let htmlEle = document.querySelector(':root');
    htmlEle.setAttribute("data-theme" , isDark ? "dark" : "light");
  }, [isDark])
  
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <>
      <nav className="navbar navbar-light bg-light w-100">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <ThemeChanger isChecked={isDark} handleChange={toggleTheme} />
      </nav>
    </>
  )
}

export default Header