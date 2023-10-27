"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import InputField from "../Inputs/InputField";
import { Form, Alert, message } from "antd";
import { signIn } from "@/app/services/firebase";
import Link from "next/link";
import { AuthModalProps } from "@/app/types/types";

const Login: React.FC<AuthModalProps> = ({ onClose }) => {
  const [form] = Form.useForm();
  const [error, setError] = useState<string | null>(null);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const data = { email };
    try {
      const user = await signIn(data, password, false);
      // Si llegamos a este punto, el inicio de sesión fue exitoso
      if (user) {
        setLoginSuccess(true);
        onClose();
      } else {
        message.error("Inicio de sesión fallido. Verifica tus credenciales.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const handleSubmit = () => {
    handleLogin();
  };

  return (
    <div className="bg-white p-8 rounded text-center w-100 h-100">
      <h1 className="text-4xl font-semibold text-green-600 mb-6">
        Iniciar Sesión
      </h1>
      <Form
        form={form}
        onFinish={handleSubmit}
        className="w-full mx-auto sm:w-1/2"
      >
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
          className="bg-green-600 hover:bg-green-500 text-white w-full py-3 rounded-md transition-colors duration-300 focus:outline-none focus:ring focus:ring-primary-500"
        >
          Iniciar Sesión
        </button>
      </Form>
      {error && <Alert message={error} type="error" className="mt-2" />}
      {loginSuccess && message.info("Inicio de sesión exitoso")}

      <Link className="text-green-600" href="/forgot-password">
        ¿Olvidaste tu contraseña?
      </Link>
    </div>
  );
};

export default Login;
