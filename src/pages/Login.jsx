import React, { useState } from "react";
import InputField from "../components/InputField";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", { email, password });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Corporate Cab Login
        </h2>

        <form onSubmit={handleSubmit}>
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-4">
          Don’t have an account? <a href="#" className="text-blue-600 hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
}
