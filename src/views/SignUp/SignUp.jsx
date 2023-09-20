import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {
  const navigate = useNavigate()
  function showPassword() {
    var x = document.getElementById("Password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

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
      <div className='container  d-flex' style={{ height: '100vh' }}>
        <div className="left_container">
          <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=826&t=st=1694842112~exp=1694842712~hmac=81f1e8375aa2a057d1944c60aff185c16920314db5174783d81949ae55cfa3b0" className="img-fluid" alt="Sampleimage" />
        </div>
        <div className="right-container">
          <div className='icon'>
            <p>Sign Up with:</p>
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
            <p className='para'><label>Already have Account? </label>&nbsp;<Link to='/'>Log In</Link></p>
            <br />
            <button class="btn btn-primary btn-lg btn-block " onClick={handleSubmit}>Sign Up</button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp