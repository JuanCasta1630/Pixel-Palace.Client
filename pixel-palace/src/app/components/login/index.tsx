"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import InputField from "../Inputs/InputField";

const Login: React.FC = () => {
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState("");
  const router = useRouter();
  const simulateLogin = async () => {
    if (email === "test@example.com" && password === "password") {
      localStorage.setItem("token", "your-auth-token");
      router.push("/");
    } else {
      setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/home");
    }
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   body: JSON.stringify({ email, password }),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
      // if (response.ok) {
      //   // history.push('/home');
      // } else {
      //   setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
      // }
    } catch (error) {
      setError("Error de inicio de sesión");
    }
  };
  return (
    <div className="bg-white p-8 rounded text-center w-100 h-100">
      <h1 className="text-4xl font-semibold text-primary mb-6">
        Iniciar Sesión
      </h1>
      <form onSubmit={simulateLogin} className="w-96 mx-auto">
        <InputField
          label="Correo electrónico"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu correo electrónico"
          required
        />

        <InputField
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Tu contraseña"
          required
        />

        <button
          type="submit"
          className="bg-primary hover:bg-primary-700 text-white w-full py-3 rounded-md transition-colors duration-300 focus:outline-none focus:ring focus:ring-primary-500"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
