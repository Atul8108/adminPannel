import { Route, Routes } from "react-router-dom";
import HomeView from "./views/Home/HomeView";
import Login from "./views/Login/Login";
import ViewBlog from "./views/ViewBlog/ViewBlog";
import BlogPage from "./views/ViewBlog/BlogPage";
import EditPage from "./views/EditPage/EditPage";
import HomePage from "./components/HomePage/HomePage";
import TestPage from "./views/TestPage/TestPage";
import SupportPage from "./views/Support/SupportPage";
import UserDetail from "./views/UserDetails/UserDetail";
import SignUp from "./views/SignUp/SignUp";
import { ToastContainer } from "react-toastify";
import Loading from "./components/Loader/Loading";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [isFetching, setIsFetching] = useState(false);
  // useEffect(() => {
  //   setTimeout(function () {
  //     setIsFetching(false);
  //   }, 2000);
  // }, []);
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
      </Routes>
    </>
  );
}

export default App;
