import { BrowserRouter, Route, Routes } from "react-router-dom";

import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ForgotPassword />} path="/forgot-password" />
        <Route element={<Home />} path="/" />
        <Route element={<Offers />} path="/offers" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<SignIn />} path="/sign-in" />
        <Route element={<SignUp />} path="/sign-up" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;