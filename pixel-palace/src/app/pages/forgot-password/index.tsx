import React, { useState } from 'react';
import InputField from '../../components/Inputs/InputField';
import { Form, Button, Alert } from 'antd';
import { handleResetPassword } from '@/app/services/firebase';


const ForgotPassword: React.FC = () => {
  const [form] = Form.useForm();
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  return (
    <div className="bg-white p-8 rounded text-center w-100 h-100">
      <h1 className="text-4xl font-semibold text-primary mb-6">Restablecer Contraseña</h1>
      <Form form={form}>
        <InputField
          label="Correo electrónico"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu correo electrónico"
          required
        />

        <Button
          type="primary"
          onClick={handleResetPassword}
          className="w-full"
        >
          Restablecer Contraseña
        </Button>
      </Form>

      {successMessage && (
        <Alert
          message={successMessage}
          type="success"
          className="mt-2"
        />
      )}
      {errorMessage && <Alert message={errorMessage} type="error" className="mt-2" />}
    </div>
  );
};

export default ForgotPassword;
