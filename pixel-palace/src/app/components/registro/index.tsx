"use client";
import React, { useState } from 'react';
import InputField from '../Inputs/InputField';

const RegistrationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    //lógica de registro, como enviar los datos al servidor.
  };

  return (
    <div  className="bg-white p-8 rounded text-center w-100 h-100">
      <h1 className="text-4xl font-semibold text-primary mb-6">Registro</h1>
      <form onSubmit={handleRegister} className="grid grid-cols-2 gap-4">
        <InputField
          label="Nombre"
          type="text"
          value={name}
          onChange={setName}
          placeholder="Tu nombre"
          required
        />

        <InputField
          label="Correo electrónico"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="Tu correo electrónico"
          required
        />

        <InputField
          label="Contraseña"
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="Tu contraseña"
          required
        />

        <InputField
          label="Confirmar Contraseña"
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          placeholder="Confirma tu contraseña"
          required
        />

        <button
          type="submit"
          className="bg-primary hover:bg-primary-700 text-white w-full py-3 rounded-md transition-colors duration-300 focus:outline-none focus:ring focus:ring-primary-500 col-span-2"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
