/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import InputField from '../Inputs/InputField';
import usersData from '@/app/services/users.json';
import { NewUserProps } from '@/app/types/types';
import { Alert } from 'antd';
const RegistrationForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const [error, setError] = useState('');

  const handleNext = () => {
    if (step === 1) {
      // Validar campos del primer paso
      if (!name || !lastName || !username || !email) {
        setError('Por favor complete todos los campos.');
        return;
      }
      setError('');
      setStep(2);
    } else if (step === 2) {
      // Validar campos del segundo paso
      if (!password || !confirmPassword || password !== confirmPassword) {
        setError('Las contraseñas no coinciden o faltan datos.');
        return;
      }
      // Crear un nuevo usuario con los datos ingresados
      const newUser: NewUserProps = {
        name,
        lastName,
        username,
        email,
        password,
        birthdate,
        isRegistered,
      };

      // Agregar el nuevo usuario al arreglo de usuarios en el archivo JSON
      //@ts-ignore
      usersData.users.push(newUser);
      localStorage.setItem('userData', JSON.stringify(newUser));
      setName('');
      setLastName('');
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setBirthdate('');
      setIsRegistered(true);

      // Guardar una bandera que indica que el usuario se ha registrado
      localStorage.setItem('userRegistered', 'true');
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  return (
    <div className="bg-white p-8 rounded text-center w-100 h-100">
      <h1 className="text-4xl font-semibold text-green-600 mb-6">Registro</h1>
      {isRegistered ? (
        <>
          <img
            src="/nallis.jpeg"
            alt="Avatar"
            className="w-16 h-16 rounded-full mx-auto"
          />
          <p className="text-green-600 mt-4 mb-4">¡Registro exitoso!</p>
        </>
      ) : (
        <form className="grid grid-cols-2 gap-4">
          {step === 1 && (
            <>
              <InputField
                label="Nombre"
                type="text"
                value={name}
                //@ts-ignore
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                required
              />

              <InputField
                label="Apellido"
                type="text"
                value={lastName}
                //@ts-ignore
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Tu apellido"
                required
              />

              <InputField
                label="Nombre de Usuario"
                type="text"
                value={username}
                //@ts-ignore
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Tu nombre de usuario"
                required
              />
              <InputField
                label="Correo electrónico"
                type="email"
                value={email}
                //@ts-ignore
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                required
              />
            </>
          )}

          {step === 2 && (
            <>
              <InputField
                label="Contraseña"
                type="password"
                value={password}
                //@ts-ignore
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Tu contraseña"
                required
              />

              <InputField
                label="Confirmar Contraseña"
                type="password"
                value={confirmPassword}
                //@ts-ignore
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirma tu contraseña"
                required
              />

              <InputField
                label="Fecha de Cumpleaños"
                type="date"
                value={birthdate}
                //@ts-ignore
                onChange={(e) => setBirthdate(e.target.value)}
                placeholder="Tu fecha de cumpleaños"
                required
              />
            </>
          )}

          <div className="col-span-2 space-x-4">
            {step === 2 && (
              <button
                type="button"
                onClick={handleBack}
                className="text-green-600 hover:bg-primary-700 text-white w-1/3 py-3 rounded-md transition-colors duration-300 focus:outline-none focus:ring focus:ring-primary-500"
              >
                Atrás
              </button>
            )}
            <button
              type="button"
              onClick={handleNext}
              className="bg-green-600 hover:bg-primary-700 text-white w-1/3 py-3 rounded-md transition-colors duration-300 focus:outline-none focus:ring focus:ring-primary-500"
            >
              {step === 1 ? 'Siguiente' : 'Finalizar'}
            </button>
          </div>
        </form>
      )}
      {error && <Alert type='success' className="text-red-500 mt-2" message={error}/>}
    </div>
  );
};

export default RegistrationForm;
