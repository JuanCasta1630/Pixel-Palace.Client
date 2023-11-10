"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "../loading";
import { getGameDetails } from "../services/firebase";
import HeaderLayout from "../components/Header";
import FooterLayout from "../components/Footer";
import { ThemeProvider } from "next-themes";
import { Button, Col, Layout, Row } from "antd";

function GameDetails() {

  const [gameDetails, setGameDetails] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const [productId, setProductId] = useState('');

  const { Content } = Layout;

  useEffect(() => {
    // Obtener el valor del parámetro 'id' de la consulta
    const id = searchParams?.get('id');

    if (id) {
      setProductId(id);

      // Aquí puedes realizar cualquier lógica adicional con el ID, como cargar datos del producto, etc.
    }
  }, [searchParams]);


  useEffect(() => {
    getGameDetails("CYyx77GpbgO8yehCQTWf")
      .then((result: any) => {
        if (result.success) {
          setGameDetails(result.games);
        } else {
          console.error("Error al obtener los juegos:", result.error);
        };
      })
      .catch((error) => {
        console.error("Error al obtener los juegos:", error);
      });
  }, []);

  console.log(gameDetails, "pruebas de details");
  
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout className="w-full min-h-screen dark:bg-gray-700 bg-white">
        <HeaderLayout />
        <Content className="p-4 mt-8">
          <div className="flex flex-col p-8">
            <div className="flex flex-col">
              <h1 className="text-center font-semibold text-4xl">
                Game Details
              </h1>
              <Button
              type="primary"
              block
              size="large"
              className="my-4 button1 dark:w-44"
              onClick={() => (window.location.href = "/best-games")}
            >
              Go Back
            </Button>
            <p>ID del Producto: {productId}</p>
            </div>
          </div>
        </Content>
        <FooterLayout />
      </Layout>
    </ThemeProvider>
  );
}

export default GameDetails;
