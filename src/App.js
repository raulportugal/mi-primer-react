import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
import Personas from "./pages/Personas";
import Login from "./pages/Login";
import AcercaDe from "./pages/AcercaDe";
import Footer from "./components/shared/Footer";
import { AuthContext } from "./context/AuthContext";
import { jwtDecode } from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 > Date.now()) {
          setUser(decoded);
        } else {
          localStorage.removeItem("token");
        }
      } catch {
        localStorage.removeItem("token");
      }
    }
  }, [setUser]);

  return (
    <>
      {user && <Navbar />}
      <div className="container mt-3">
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/personas"
            element={user ? <Personas /> : <Navigate to="/login" />}
          />
          <Route
            path="/categorias"
            element={user ? <Categorias /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route path="/acercade" element={<AcercaDe />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
