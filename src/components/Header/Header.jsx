// Navbar of the right side part
import React from 'react'
import "./header.css";

const Header = () => {
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
        </nav>
    </>
  )
}

export default Header