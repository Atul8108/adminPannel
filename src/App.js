import { Route, Routes } from "react-router-dom";
import HomeView from "./views/Home/HomeView";
import Login from "./views/Login/Login";
import ViewBlog from "./views/ViewBlog/ViewBlog";
import BlogPage from "./views/ViewBlog/BlogPage";
import EditPage from "./views/EditPage/EditPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomeView />} />
      <Route path="/view-blog" element={<ViewBlog/>} />
      <Route path="/blog-page/:id" element={<BlogPage/>} />
      <Route path="/edit-page/:id" element={<EditPage/>}/>
    </Routes>
  );
}

export default App;
