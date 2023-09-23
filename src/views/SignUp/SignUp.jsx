import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import phoneicon from "../../assets/phone.svg"
import eyeclose from "../../assets/eye-closed.svg"
import eyeopen from "../../assets/eye.svg"

const SignUp = () => {
  const navigate = useNavigate()
  const [eye, setEye] = useState(false)
 

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
      let signUpData = {
        "signUpNumber": phoneNumber?.value,
        "signUpPassword": password?.value
      }
      localStorage.setItem('LogInNumber', signUpData.signUpNumber);
      localStorage.setItem('LogInPassword', signUpData.signUpPassword);
      navigate("/", { replace: true })
    }
  }
  return (
    <>
      <div className='d-flex' style={{ height: '100vh' ,justifyContent:'center',alignItems:"center" }}>
        <div className="left_container">
          <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=826&t=st=1694842112~exp=1694842712~hmac=81f1e8375aa2a057d1944c60aff185c16920314db5174783d81949ae55cfa3b0" className="img-fluid" alt="Sampleimage" />
        </div>
        <div className="right-container">
        <div className='d-flex' style={{justifyContent:'center',alignItems:'center',gap:"20px"}}>
            <p className='m-0'>Sign up with:</p>
          <div className='icon'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
          </div>
          <hr/>
          <div className='d-flex flex-column'>
          <div className="group">
              <img className="password-icon" src={phoneicon} alt='..'/>
              <input className="input" type='tel' id='phoneNumber' placeholder="Phone Number" maxlength="10" required />
            </div>
            <br />
            <div className="group">
              <svg stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="password-icon">
                <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" stroke-linejoin="round" stroke-linecap="round"></path>
              </svg>
              <img className="eye-icon" src={eye ? eyeopen : eyeclose } alt='..' onClick={() => { setEye(!eye) }}/> 
              <input className="input" id='password' type={eye ? "text" : "password"} placeholder="password" />
            </div>
            <p className='para'><label>Already have Account? </label>&nbsp;<Link to='/'>Log In</Link></p>
            <br />
            <button class="btn btn-primary btn-lg btn-block " onClick={handleSubmit} style={{width:"250px"}}>Sign Up</button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp