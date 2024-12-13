import React, { useState } from "react";
import LoginPage from "./components/Login";
import RegisterPage from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email, password) => {
    if (email === "user@gmail.com" && password === "1234") {
      setIsAuthenticated(true);
      setCurrentPage("dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleRegisterRedirect = () => {
    setCurrentPage("register");
  };

  const handleLoginRedirect = () => {
    setCurrentPage("login");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      {currentPage === "login" && (
        <LoginPage onLogin={handleLogin} onRegisterRedirect={handleRegisterRedirect} />
      )}
      {currentPage === "register" && <RegisterPage onLoginRedirect={handleLoginRedirect} />}
      {currentPage === "dashboard" && isAuthenticated && <Dashboard />}
    </div>
  );
}

export default App;

