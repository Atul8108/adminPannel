import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <>
      <div className='container  d-flex' style={{ height: '100vh' }}>
        <div className="left_container">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sampleimage" />
        </div>
        <div className="right-container">
          <div className='icon'>
            <p>Sign in with:</p>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
          <hr/>
          <form>
            <div className='d-flex flex-column'>
              <input  className="input" type='text' placeholder='User Name' />
              <lable>User Name</lable>
              <br/>
              <input className="input" type='password' placeholder='Password' />
              <p className='para'><label>Password </label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<a href='/'>Forget Password?</a></p>
              <br/>
              <Link to={"/home"} style={{textDecoration:"none"}}>
                <button type="button" class="btn btn-primary btn-lg btn-block ">Login</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>

  )
}

export default Login