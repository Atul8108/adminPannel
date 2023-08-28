import { Route, Routes } from "react-router-dom";
import HomeView from "./views/Home/HomeView";
import Login from "./views/Login/Login";
import ViewBlog from "./views/ViewBlog/ViewBlog";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomeView />} />
      <Route path="/view-blog" element={<ViewBlog/>} />
    </Routes>
  );
}

export default App;
