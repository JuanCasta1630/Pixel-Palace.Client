'use client'
import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import PaymentForm from "../components/Steper/index";
import HeaderLayout from '../components/Header';
import { ThemeProvider } from 'next-themes';
import { Layout } from 'antd';
import FooterLayout from '../components/Footer';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import confetti from "canvas-confetti";

const Stepper: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const { Content, Footer } = Layout;

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (values: any) => {
    try {
      if (step === 1) {
      } else if (step === 2) {
      } else if (step === 3) {
        console.log('Form submitted with values:', values);

        setSuccessMsg('Thank you for your purchase!');
        confetti({
          zIndex: 999,
          particleCount: 100,
          spread: 160,
          angle: -100,
          origin: {
            x: 1,
            y: 0,
          },
        });

        throw new Error('There was an error processing the purchase.');
      }
      nextStep();
    }
    catch (error: any) {
      setErrorMsg(error.message);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <Layout className='w-full min-h-screen dark:bg-gray-700 bg-white'>
        <HeaderLayout />
        <Content className="p-10 mt-10">
          <div className="justify-center items-center w-full p-6 mt-10 rounded-md shadow-md">
            {step === 1 && (
              <>
                <h2 className="text-2xl font-bold mb-4">Card Information</h2>
                <PaymentForm onSubmit={handleSubmit} />
              </>
            )}

            {step === 2 && (
              <Formik
                initialValues={{ name: '', email: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <h2 className="text-2xl font-bold mb-4">Step 2: Additional Information</h2>
                  <Field type="text" name="name" placeholder="Name" className='m-2' />
                  <Field type="email" name="email" placeholder="Email" className='m-2' />
                  <div className="flex justify-between">
                    <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md" onClick={prevStep}>Back</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" type="submit">Next</button>
                  </div>
                </Form>
              </Formik>
            )}

            {step === 3 && (
              <>
                <h2 className="text-2xl font-bold mb-4">Step 3: Confirm Payment</h2>
                <div className="flex justify-between">
                  <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md" onClick={prevStep}>Back</button>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                    onClick={handleSubmit}
                  >Submit</button>
                </div>
                {/* Snackbar con el mensaje de éxito */}
                <Snackbar
                  open={!!successMsg}
                  autoHideDuration={5000}
                  onClose={() => setSuccessMsg(null)}>
                  <MuiAlert
                    onClose={() => setSuccessMsg(null)}
                    severity="success"
                    sx={{ width: '100%' }}>
                    {successMsg}
                  </MuiAlert>
                </Snackbar>
                {/* Snackbar con el mensaje de error */}
                <Snackbar
                  open={!!errorMsg}
                  autoHideDuration={5000}
                  onClose={() => setErrorMsg('')}>
                  <MuiAlert
                    onClose={() => setErrorMsg('')}
                    severity="error"
                    sx={{ width: '100%' }}>
                    {errorMsg}
                  </MuiAlert>
                </Snackbar>

              </>
            )}
          </div>
        </Content>
        <FooterLayout />
      </Layout>
    </ThemeProvider >
  );
};

export default Stepper;