import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import EditUser from "./components/Edit-User-Profile/EditUser";
import HomePage from "./components/HomePage/HomePage";
import Loading from "./components/Loader/Loading";
import EditPage from "./views/EditPage/EditPage";
import HomeView from "./views/Home/HomeView";
import Login from "./views/Login/Login";
import SignUp from "./views/SignUp/SignUp";
import SupportPage from "./views/Support/SupportPage";
import TestPage from "./views/TestPage/TestPage";
import UserDetail from "./views/UserDetails/UserDetail";
import BlogPage from "./views/ViewBlog/BlogPage";
import ViewBlog from "./views/ViewBlog/ViewBlog";
import { useEffect } from "react";

function App() {

  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setIsFetching(false);
    }, 2000);
  }, []);
  if (isFetching) {
    return (
      <div
        className="d-flex"
        style={{
          justifyContent: "center ",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Loading />
      </div>
    );
  }

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashbord" element={<HomePage />} />
        <Route path="/create-blog" element={<HomeView />} />
        <Route path="/view-blog" element={<ViewBlog />} />
        <Route path="/blog-page" element={<BlogPage />} />
        <Route path="/edit-page" element={<EditPage />} />
        <Route path="/test-page" element={<TestPage />} />
        <Route path="/support-page" element={<SupportPage />} />
        <Route path="/user-details" element={<UserDetail />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/edit-user" element={<EditUser/>} />
      </Routes>
    </>
  );
}

export default App;
