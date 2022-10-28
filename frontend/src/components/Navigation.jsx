import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Docs from "../views/Docs";
import Home from "../views/Home";
import Login from "../views/Login";
import Header from "./Header";
import Signup from "../views/Signup";
import ProtectedRoute from "./ProtectedRoute";
import Error404 from "../views/404";

export default function Navigation() {
  const authenticated = useSelector((state) => state.auth.authenticated);
  return (
    <BrowserRouter>
      { authenticated && <Header />}
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
