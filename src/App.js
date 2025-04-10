import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";
import Personas from "./pages/Personas";
import Login from "./pages/Login";
import Footer from "./components/shared/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const location = useLocation();
  const token = sessionStorage.getItem("token");

  // Redirige a login si no hay token y no estás en /login
  if (!token && location.pathname !== "/login") {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {/* Navbar solo si hay sesión */}
      {token && <Navbar />}
      <div className="container mt-3">
        <Routes>
          <Route path="/login" element={<Login />} />
          {token && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/personas" element={<Personas />} />
            </>
          )}
        </Routes>
      </div>
      {token && <Footer />}
    </>
  );
};

export default App;
