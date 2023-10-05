import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { PASSWORD, USERINFO, PHONENUMBER } from '../../api/locaStorage.data';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import phoneicon from "../../assets/phone.svg"
import eyeclose from "../../assets/eye-closed.svg"
import eyeopen from "../../assets/eye.svg"
import { useRef } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [eye, setEye] = useState(false)
  const inputRef = useRef(null);
  const inputRefTwo = useRef(null);
  const inputRefThree = useRef(null);

  useEffect(() => {
    if (PHONENUMBER() && PASSWORD()) {
      if (PHONENUMBER() == "NODATA" && PASSWORD() == "NODATA") {
        navigate("/", { replace: true })
      } else {
        if (JSON.parse(USERINFO())?.isComplete) {
          navigate("/Dashbord", { replace: true })
        }
        else {
          navigate("/user-details", { replace: true })
        }
      }
    }
  }, [])

  const handleSubmit = () => {
    const phoneNumber = document.getElementById('phoneNumber');
    const password = document.getElementById('password');
    if (phoneNumber.value.length != 10) {
      toast.warning("phone Number Should Be 10 Digits Only !!!")
    }
    else if (password.value.length != 6) {
      toast.warning("Password length should Grater then 6 Charater")
    }
    else if (phoneNumber.value && password.value) {

      if (phoneNumber.value == PHONENUMBER() && password.value == PASSWORD()) {
        let LogInData = {
          "phoneNumber": phoneNumber?.value,
          "Password": password?.value
        }
        localStorage.setItem('LogInNumber', LogInData.phoneNumber);
        localStorage.setItem('LogInPassword', LogInData.Password);
        if (phoneNumber.value == PHONENUMBER() && password.value == PASSWORD()) {
          navigate("/create-blog", { replace: true })
        }
        else if (PHONENUMBER() != "NODATA" && PASSWORD() != "NODATA") {
          if (JSON.parse(USERINFO())?.isComplete) {
            navigate("/Dashbord", { replace: true })
          }
          else {
            navigate("/user-details", { replace: true })
          }
        }
      } else {
        toast.error("Username Or Password Not Matching !!!")
      }

    }
  }
  function handleChange(e)
  {
    if (e.key === 'Enter') {
      console.log("enter in press");
      inputRefTwo.current.focus();
    }
  }
  return (
    <>
      <div className='d-flex' style={{ height: '100vh', justifyContent: 'center', alignItems: "center", flexWrap: 'wrap' }}>
        <div className="left_container">
          <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?w=826&t=st=1694841557~exp=1694842157~hmac=ba76d72df8d067238481e0c3e072329ee356d554f03eaba8d2ded2ef425728c9" className="img-fluid" alt="Sampleimage" />
        </div>
        <div className="right-container">
          <div className='d-flex' style={{ justifyContent: 'center', alignItems: 'center', gap: "20px" }}>
            <p className='m-0'>Sign in with:</p>
            <div className='icon'>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>

          <hr />

          <div className='d-flex flex-column login-input-group'>
            <div className="group">
              <img className="password_icon" src={phoneicon} alt='..' />
              <input className="input" type='tel' id='phoneNumber' placeholder="Phone Number" maxlength="10" ref={inputRef} required  onKeyDown={(e)=>{handleChange(e)}} />
            </div>
            <br />
            <div className="group">
              <svg stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="password_icon">
                <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" stroke-linejoin="round" stroke-linecap="round"></path>
              </svg>

              <img className="eye-icon" src={eye ? eyeopen : eyeclose} alt='..' onClick={() => { setEye(!eye) }} />
              <input className="input" id='password' type={eye ? "text" : "password"} placeholder="password" ref={inputRefTwo} />
            </div>
            <p className='para'><label>New user? </label>&nbsp;<Link to='/signUp'>Sign Up</Link></p>
            <br />
            <button className="btn btn-primary btn-lg btn-block" ref={inputRefThree} onClick={handleSubmit} style={{ width: "250px" }}>Login</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login