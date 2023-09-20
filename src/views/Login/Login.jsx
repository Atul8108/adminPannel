import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { PASSWORD, USERINFO, PHONENUMBER} from '../../api/locaStorage.data';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"


const Login = () => {
  const navigate = useNavigate();


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
    const password = document.getElementById('Password');
      if (phoneNumber.value.length != 10) {
        toast.warning("phone Number Should Be 10 Digits Only !!!")
      }
      else if (password.value.length != 6) {
        toast.warning("Password length should Grater then 6 Charater")
      }
      else if (phoneNumber.value && password.value) {

        if(phoneNumber.value == PHONENUMBER() && password.value == PASSWORD()){
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
      }else{
        toast.error("Username Or Password Not Matching !!!")
      }

      }
  }

  function showPassword() {
    console.log("function click");
    var x = document.getElementById("Password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  return (
    <>
      <div className='container  d-flex' style={{ height: '100vh' }}>
        <div className="left_container">
          <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?w=826&t=st=1694841557~exp=1694842157~hmac=ba76d72df8d067238481e0c3e072329ee356d554f03eaba8d2ded2ef425728c9" className="img-fluid" alt="Sampleimage" />
        </div>
        <div className="right-container">
          <div className='icon'>
            <p>Sign in with:</p>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
          <hr />
          <div className='d-flex flex-column'>
            <input className="input" type='tel' id='phoneNumber' placeholder='Phone Number' maxlength="10" required />
            <lable>Phone Number</lable>
            <br />
            <input className="input" type='password' id='Password' placeholder='Password' required />
            <p><input type="checkbox" onClick={() => { showPassword() }} />&emsp;Show Password</p>
            <p className='para'><label>New user? </label>&nbsp;<Link to='/signUp'>Sign Up</Link></p>
            <br />
            <button class="btn btn-primary btn-lg btn-block " onClick={handleSubmit}>Login</button>
            
          </div>
        </div>
      </div>

    </>
  )
}

export default Login