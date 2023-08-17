import { Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import Login from "./views/Login";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomeView />} />
    </Routes>
  );
}

export default App;
