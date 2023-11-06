import React, { useState } from "react";
import InputField from "../Inputs/InputField";
import { Alert } from "antd";
import { signIn } from "@/app/services/firebase";
import { AuthModalProps } from "@/app/types/types";
import { message } from "antd";
import RandomAvatar from "../Avatars";

const RegistrationForm: React.FC<AuthModalProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState("");

  const handleNext = async () => {
    if (step === 1) {
      console.log(step);
      // Validar campos del primer paso
      if (!name || !lastName || !username || !email) {
        setError("Por favor complete todos los campos.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      // Validar campos del segundo paso
      if (password !== confirmPassword) {
        setError("Las contraseñas no coinciden.");
        return;
      }
      const data = { email, password, name, lastName, username, birthdate };
      // Realizar el registro de usuario en Firebase
      const result = await signIn(data, password, true);
      if (result) {
        setIsRegistered(true);
        onClose();
      } else {
        message.error(
          "Registration failed. The provided email is already associated with an existing account."
        );
      }
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  return (
    <div className="card dark:bg-white bg-gray-100">
      <div className="card2 bg-white p-8 rounded text-center w-100 h-100 dark:bg-gray-900">
        <h1 className="heading text-gray-900 dark:text-white">Register</h1>
        {isRegistered ? (
          <>
            <RandomAvatar/>
            <p className="text-green-600 mt-4 mb-4 dark:text-primary">
              ¡Successful registration!
            </p>
          </>
        ) : (
          <form className="grid grid-cols-2 gap-4">
            {step === 1 && (
              <>
                <InputField
                  label="Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />

                <InputField
                  label="Lastname"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Your lastname"
                  required
                />

                <InputField
                  label="User's Name"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Your User's Name"
                  required
                />
                <InputField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                />
              </>
            )}

            {step === 2 && (
              <>
                <InputField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                  required
                />

                <InputField
                  label="Password confirm"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                />

                <InputField
                  label="Birthday"
                  type="date"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                  placeholder="Your birthday"
                  required
                />
              </>
            )}

            <div className="col-span-2 space-x-4">
              {step === 2 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="button1 bg-green-600 hover:bg-green-500 text-white dark:bg-primary dark:hover:bg-green-700 dark:text-black w-1/3 py-3 rounded-md transition-colors duration-300 focus:outline-none focus:ring focus:ring-primary-500"
                >
                  Back
                </button>
              )}
              <button
                type="button"
                onClick={handleNext}
                className="button1 text-white w-1/3 dark:text-white"
              >
                {step === 1 ? "Next" : "Finish"}
              </button>
            </div>
          </form>
        )}
        {error && (
          <Alert type="success" className="text-red-500 mt-2" message={error} />
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
