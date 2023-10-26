  "use client";
  import { useRouter } from "next/navigation";
  import React, { useEffect, useState } from "react";
  import InputField from "../Inputs/InputField";
  import { Form,  Alert } from 'antd';
  const Login: React.FC = () => {
    const [form] = Form.useForm();
    const [error, setError] = useState<string | null>(null);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const router = useRouter();
  
    const handleLogin = () => {
      // Recuperar los datos del usuario registrado desde el localStorage
      const userData = localStorage.getItem('userData');
      if (userData) {
        const user = JSON.parse(userData);
        const email = form.getFieldValue('email');
        const password = form.getFieldValue('password');
        if (email === user.email && password === user.password) {
          // Simular un inicio de sesión exitoso y guardar un valor en el localStorage
          localStorage.setItem('userLoggedIn', 'true');
          setLoginSuccess(true);
          router.push('/');
        } else {
          setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
      } else {
        setError('Usuario no encontrado. Regístrate primero.');
      }
    };
  
    const handleSubmit = (values: any) => {
      handleLogin();
    };
  
    useEffect(() => {
      // Verificar si el usuario está registrado en el localStorage
      const userLoggedIn = localStorage.getItem('userLoggedIn');
      if (userLoggedIn === 'true') {
        router.push('/');
      }
    }, []);
  
    return (
      <div className="bg-white p-8 rounded text-center w-100 h-100">
        <h1 className="text-4xl font-semibold text-green-600 mb-6">Iniciar Sesión</h1>
        <Form
          form={form}
          onFinish={handleSubmit}
          className="w-96 mx-auto"
          initialValues={{ email: 'test@example.com', password: 'password' }}
        >
          <InputField
            label="Correo electrónico"
            type="email"
            name="email"
            placeholder="Tu correo o usuario"
            rules={[
              { required: true, message: 'Por favor ingrese su correo electrónico' },
              { type: 'email', message: 'Correo electrónico no válido' },
            ]}
          />
  
          <InputField
            label="Contraseña"
            type="password"
            name="password"
            placeholder="Tu contraseña"
            rules={[
              { required: true, message: 'Por favor ingrese su contraseña' },
            ]}
          />
  
  <button
          type="submit"
          className="bg-green-600 hover-bg-primary-700 text-white w-full py-3 rounded-md transition-colors duration-300 focus:outline-none focus:ring focus:ring-primary-500"
        >
          Iniciar Sesión
        </button>
        </Form>
        {error && <Alert message={error} type="error" className="mt-2" />}
        {loginSuccess && <Alert message="Inicio de sesión exitoso" type="success" className="mt-2" />}
      </div>
    );
  };
  
  export default Login;
