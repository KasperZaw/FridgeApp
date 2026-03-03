import "./styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./frontend/LoginForm/login";
import Register from "./frontend/LoginForm/register";
import MainPage from "./frontend/MainPage/mainPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
