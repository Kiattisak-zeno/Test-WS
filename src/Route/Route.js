import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserProvider } from "../Data/UserContext";
import Home from "../Page/Home";
import Login from "../Page/Login";
import ShowData from "../Page/ShowData";
import Signup from "../Page/Signup";

const Route_ = () => {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/ShowData" element={<ShowData />}></Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
};

export default Route_;
