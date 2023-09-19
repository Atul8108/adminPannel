module.exports = {
  PHONENUMBER: () => {
    return localStorage.getItem("LogInNumber", "NODATA");
  },
  PASSWORD: () => {
    return localStorage.getItem("LogInPassword", "NODATA");
  },
  USERINFO:()=>{
    return localStorage.getItem("userInfo")
  }
  // SIGNUPNUMBER:()=>{
  //   return localStorage.getItem("signUpNumber")
  // },
  // SIGNUPPASSWORD:()=>{
  //   return localStorage.getItem("signUpPassword")
  // }

};
