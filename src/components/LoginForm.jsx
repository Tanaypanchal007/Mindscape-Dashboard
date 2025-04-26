import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 Import useNavigate

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleFormValidation = (e) => {
    e.preventDefault();

    if (email === "Tanaypanchal7@gmail.com" && password === "Tanaypanchal7") {
      localStorage.setItem("isLoggedIn", "true"); // 👈 Set login flag
      alert("Login Successful!");
      navigate("/AdminDashboard");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleFormValidation}
          className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-md w-96"
        >
          <h2 className="text-2xl font-semibold font-mono text-center mb-4">
            Admin Login
          </h2>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="border p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="border p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </section>
    </>
  );
};

export default LoginForm;
