import "./styles/App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./frontend/LoginForm/login";
import Register from "./frontend/LoginForm/register";
import MainPage from "./frontend/MainPage/mainPage";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
    <Toaster />
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
