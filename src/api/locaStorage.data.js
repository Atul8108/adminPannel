module.exports = {
  PHONENUMBER: () => {
    return localStorage.getItem("LogInNumber", "NODATA");
  },
  PASSWORD: () => {
    return localStorage.getItem("LogInPassword", "NODATA");
  },
  USERINFO:()=>{
    return localStorage.getItem("userInfo")
  },
  BLOGLIST:()=>{
    return localStorage.getItem("blogList")
  }

};
