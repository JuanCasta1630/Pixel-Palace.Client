import React, { useState } from 'react';
import InputField from '../Inputs/InputField';
import { Alert } from 'antd';
import { signIn } from '@/app/services/firebase';
import { AuthModalProps } from '@/app/types/types';
import { message } from "antd";

const RegistrationForm: React.FC<AuthModalProps> = ({onClose}) => {
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

  const handleNext = async () => {
    if (step === 1) {
      // Validar campos del primer paso
      if (!name || !lastName || !username || !email) {
        setError('Por favor complete todos los campos.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      // Validar campos del segundo paso
      if (password !== confirmPassword) {
        setError('Las contraseñas no coinciden.');
        return;
      }
      const data = {email, password, name, lastName, username, birthdate}
      // Realizar el registro de usuario en Firebase
      signIn(data, password, true)
      setIsRegistered(true)
      onClose();
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  return (
    <div className="bg-white p-8 rounded text-center w-100 h-100">
      <h1 className="text-4xl font-semibold text-primary mb-6">Registro</h1>
      {isRegistered ? (
        <>
          <img
            src="/nallis.jpeg"
            alt="Avatar"
            className="w-16 h-16 rounded-full mx-auto"
          />
          <p className="text-primary mt-4 mb-4">¡Registro exitoso!</p>
        </>
      ) : (
        <form className="grid grid-cols-2 gap-4">
          {step === 1 && (
            <>
              <InputField
                label="Nombre"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                required
              />

              <InputField
                label="Apellido"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Tu apellido"
                required
              />

              <InputField
                label="Nombre de Usuario"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Tu nombre de usuario"
                required
              />
              <InputField
                label="Correo electrónico"
                type="email"
                value={email}
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
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Tu contraseña"
                required
              />

              <InputField
                label="Confirmar Contraseña"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirma tu contraseña"
                required
              />

              <InputField
                label="Fecha de Cumpleaños"
                type="date"
                value={birthdate}
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
                className="bg-primary hover:bg-primary-700 text-white w-1/3 py-3 rounded-md transition-colors duration-300 focus:outline-none focus:ring focus:ring-primary-500"
              >
                Atrás
              </button>
            )}
            <button
              type="button"
              onClick={handleNext}
              className="bg-primary hover-bg-primary-700 text-white w-1/3 py-3 rounded-md transition-colors duration-300 focus:outline-none focus:ring focus:ring-primary-500"
            >
              {step === 1 ? 'Siguiente' : 'Finalizar'}
            </button>
          </div>
        </form>
      )}
      {error && message.info("Hubo un problema, revisa tus datos")}
    </div>
  );
};

export default RegistrationForm;
