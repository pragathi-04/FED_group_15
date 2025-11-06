import React, { useState } from "react";
import axios from "axios";
import "./register.css"; // optional if you want styling

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });

      alert("✅ Registration Successful! Please login");

      window.location.href = "/login"; // redirect
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed ❌");
      console.log(err);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account 📝</h2>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Register</button>
        </form>

        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default RegisterPage;
