'use client';
import React from 'react';
import { useFormik } from 'formik';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

interface PaymentFormProps {
  onSubmit: (values: any) => void;
}

interface PaymentFormValues {
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  cvc: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onSubmit }) => {
  const initialValues: PaymentFormValues = {
    cardNumber: '1234 5678 9101 1121',
    cardHolder: 'Pepe',
    expirationDate: '21/23',
    cvc: '123',
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <>
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="cardNumber">Card Number: </label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cardNumber}
          className='dark:bg-gray-700 m-2 rounded-2x1 border-gray-300'
        />
      </div>

      <div>
        <label htmlFor="cardHolder">Card Holder: </label>
        <input
          type="text"
          id="cardHolder"
          name="cardHolder"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cardHolder}
          className='dark:bg-gray-700 m-2 rounded-2x1 border-gray-300'
        />
      </div>

      <div>
        <label htmlFor="expirationDate">Expiration Date: </label>
        <input
          type="text"
          id="expirationDate"
          name="expirationDate"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.expirationDate}
          className='dark:bg-gray-700 m-2 rounded-2x1 border-gray-300'
        />
      </div>

      <div>
        <label htmlFor="cvc">CVC: </label>
        <input
          type="text"
          id="cvc"
          name="cvc"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cvc}
          className='dark:bg-gray-700 m-2 rounded-2x1 border-gray-300'
        />
      </div>

      <Cards
        cvc={formik.values.cvc}
        expiry={formik.values.expirationDate}
        focused={formik.errors.expirationDate ? 'expiry' : ''}
        name={formik.values.cardHolder}
        number={formik.values.cardNumber}
      />
    <div className='flex flex-row items-center align-middle justify-center m-2'>
    <button
      className="flex items-center justify-center px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      type="submit"
    >
      <span className="mr-2">Submit</span>
      <svg
        className="w-4 h-4 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M9.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 11H3a1 1 0 110-2h10.586L9.293 4.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
    </div>
    </form>
    </>
  );
};

export default PaymentForm;
