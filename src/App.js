import { Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import Login from "./views/Login";
import ViewBlog from "./views/ViewBlog";


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
