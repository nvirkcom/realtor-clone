import { BrowserRouter, Route, Routes } from "react-router-dom";

import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<ForgotPassword />} path="/forgot-password" />
          <Route element={<Home />} path="/" />
          <Route element={<Offers />} path="/offers" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<SignIn />} path="/sign-in" />
          <Route element={<SignUp />} path="/sign-up" />
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={5000} closeOnClick draggable hideProgressBar={false} newestOnTop={false} pauseOnFocusLoss pauseOnHover position="bottom-center" rtl={false} theme="dark" />
    </>
  );
}

export default App;