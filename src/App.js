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


function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Dashbord" element={<HomePage />} />
      <Route path="/create-blog" element={<HomeView />} />
      <Route path="/view-blog" element={<ViewBlog/>} />
      <Route path="/blog-page/:id" element={<BlogPage/>} />
      <Route path="/edit-page/:id" element={<EditPage/>}/>
      <Route path="/test-page" element={<TestPage />} />
      <Route path="/support-page" element={<SupportPage />} />
      <Route path="/user-details" element={<UserDetail/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
    </Routes>
  );
}

export default App;
