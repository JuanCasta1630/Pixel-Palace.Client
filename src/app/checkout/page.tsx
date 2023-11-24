/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import PaymentForm from "../components/Steper/index";
import HeaderLayout from "../components/Header";
import { ThemeProvider } from "next-themes";
import { Alert, Layout } from "antd";
import FooterLayout from "../components/Footer";
import { useSession } from "next-auth/react";
import cookies from "js-cookie";
import { useGames } from "../hooks/useGames";
import AuthModal from "../components/AuthModal";
import { saveTransaction } from "../servers/reques";
import { useRouter } from "next/navigation";
import Loading from "../loading";

const Stepper: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const { Content } = Layout;
  const { data: session } = useSession();
  const { gameAll, loading } = useGames();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileUserOpen, setMobileUserOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const openRegisterModal = () => {
    setRegisterModalOpen(true);
    if (isMobileUserOpen) {
      toggleMobileUser();
    }
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const closeRegisterModal = () => {
    setRegisterModalOpen(false);
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileUser = () => {
    setMobileUserOpen(!isMobileUserOpen);
  };
  //   const [user, setUser] = useState([])
  //   useEffect(() => {
  //     const fetchUserData = async () => {
  //       // Verifica que session y session.user existan y tengan un ID antes de realizar la llamada
  //       if (session && sessionÇ?.user && session.user.userId) {

  //         try {
  //           // Hacer la llamada a tu endpoint para obtener información adicional del usuario
  //           const response = await fetch(`http://localhost:8081/user/${session.user.userId
  //         }`);
  //           console.log(response, 'RESPONSE');

  //           if (response.ok) {
  //             const userData = await response.json();
  //             console.log("Información adicional del usuario:", userData);
  //             // Asegúrate de que setUser esté dentro del bloque try
  //             setUser(userData);
  //             // Realiza las acciones necesarias con la información adicional del usuario
  //           } else {
  //             console.error("Error al obtener información del usuario:", response.statusText);
  //           }
  //         } catch (error) {
  //           console.error("Error al obtener información del usuario:", error);
  //         }
  //       }
  //     };

  //     // Llama a fetchUserData solo si session cambia
  //     fetchUserData();
  //   }, [session]);
  useEffect(() => {
    if (errorMessage) {
      const timeoutId = setTimeout(() => {
        setErrorMessage("");
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [errorMessage]);
  const productId = cookies.get("productId");
  const router = useRouter();
  const filterGame: any = gameAll.filter((game: any) => {
    return game?.id === productId;
  });

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };
  const openLoginModal = () => {
    setLoginModalOpen(true);
    if (isMobileUserOpen) {
      toggleMobileUser();
    }
  };
  const handleSubmit = async (values: any) => {
    if (step === 1) {
      nextStep();
    } else if (step === 2) {
      nextStep();
    } else if (step === 3) {
      if (!session) {
        openLoginModal();
        return;
      }

      const data: any = [];
      try {
        // await saveTransaction(data);
        router.push("/confirmation-page");
        console.log("Transaction saved successfully!");
        nextStep();
      } catch (error) {
        console.error("Error saving the transaction:", error);
        setErrorMessage("Error saving the transaction. Please try again.");
      }
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });
  if (loading) {
    <Loading/>
  }
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout className=" w-full min-h-screen dark:bg-gray-700 bg-white">
        <HeaderLayout />
        <Content className="p-10 mt-10 flex justify-center items-center">
          <div className="flex justify-center items-center flex-col max-w-[fit-content] p-6 mt-10 rounded-md shadow-lg">
            {step === 1 && (
              <>
                <h2 className="text-2xl font-bold mb-4">Card Information</h2>
                <PaymentForm onSubmit={handleSubmit} />
              </>
            )}

            {step === 2 && (
              <Formik
                initialValues={{ name: "", email: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <div className="w-48">
                  <Form className="w-48">
                    <h2 className="text-2xl font-bold mb-4">
                      Additional Information
                    </h2>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="field input-field mt-2 mb-2"
                    />
                    <div className="text-red-500">
                      <ErrorMessage name="name" />
                    </div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="field input-field mt-2 mb-2"
                    />
                    <div className="text-red-500">
                      <ErrorMessage name="email" />
                    </div>
                    <div className="flex justify-between">
                      <button
                        className="bg-gray-900 text-gray-100 px-4 py-2 rounded-md w-20"
                        onClick={prevStep}
                      >
                        Back
                      </button>
                      <button
                        className="button1 w-20 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        type="submit"
                      >
                        Next
                      </button>
                    </div>
                  </Form>
                </div>
              </Formik>
            )}

            {step === 3 && (
              <>
                <h2 className="text-2xl font-bold mb-4">Resume Payment</h2>
                <>
                  <div className="mb-4">
                    <img
                      width={300}
                      src={
                        filterGame[0]?.imagen
                          ? filterGame[0]?.imagen
                          : filterGame[0]?.imageUrl ||
                            "https://pixel-palace.netlify.app/logo.png"
                      }
                      alt="imagen"
                    />
                    <p className="text-lg font-semibold">
                      Product:{" "}
                      {filterGame[0]?.nombre
                        ? filterGame[0]?.nombre
                        : filterGame[0]?.name}
                    </p>
                    <p className="text-lg font-semibold">
                      Price: $
                      {filterGame[0]?.precio
                        ? filterGame[0]?.precio
                        : filterGame[0]?.price}
                    </p>
                    <p className="text-lg w-96 text-justify">
                      {filterGame[0]?.description
                        ? filterGame[0]?.description
                        : null}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <button
                      className="2xl:text-2xl bg-gray-900 text-gray-100 px-4 py-2 m-1 rounded-md w-48"
                      onClick={prevStep}
                    >
                      Back
                    </button>
                    <button
                      className="button2 2xl:text-2xl bg-green-500 text-white px-4 py-2 m-1 rounded-md hover:bg-green-600 w-48"
                      onClick={handleSubmit}
                    >
                      Send
                    </button>
                  </div>
                </>
              </>
            )}
          </div>
          {errorMessage && (
            <Alert
              message="Error"
              description={errorMessage}
              type="error"
              showIcon
              className="fixed bottom-20 right-2 p-4"
            />
          )}
        </Content>
        <FooterLayout />
      </Layout>
      <AuthModal
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        initialTab={0}
      />
      <AuthModal
        isOpen={isRegisterModalOpen}
        onClose={closeRegisterModal}
        initialTab={1}
      />
    </ThemeProvider>
  );
};

export default Stepper;
