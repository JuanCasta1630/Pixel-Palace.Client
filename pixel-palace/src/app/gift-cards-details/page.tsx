"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "../loading";
import { getGames, getGameDetails } from "@/app/services/firebase";
import HeaderLayout from "../components/Header";
import FooterLayout from "../components/Footer";
import { ThemeProvider } from "next-themes";
import { Button, Col, Layout, Row } from "antd";
import {
  RollbackOutlined,
  ShoppingCartOutlined
} from "@ant-design/icons";

function GameDetails() {
  const [giftCard, setGiftCard] = useState([]);
  const router = useRouter()

  const { Content } = Layout;
  const [loading, setLoading] = useState(true)

  /*
    useEffect(() => {
      getGiftCardsDetails()
        .then((result: any) => {
          if (result.success) {
            setGiftCard(result.games);
          } else {
            console.error("Error al obtener los juegos:", result.error);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error al obtener los juegos:", error);
          setLoading(false);
        });
    }, [games]);
  */

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout className="w-full min-h-screen dark:bg-gray-700 bg-white">
        <HeaderLayout />
        <Content className="p-4 mt-8">
          <div className="flex flex-col p-8">
            <div className="flex flex-col">
              <h1 className="text-center font-semibold text-4xl mt-3 mb-5">
                Game Details
              </h1>

              <Row gutter={[16, 16]}
                className="md:grid sm:grid-cols-1">
                {giftCard.map((giftCard: any, index) => (
                  <Col
                    className="w-full sm:mx-2 md:mx-2 lg:mx-4 2xl:mx-4 "
                    key={index}
                  >
                    <div className="card-details w-3/4 shadow-md dark:bg-gray-900 h-150 mx-auto">
                      <img
                        alt="Nintendo card"
                        src="https://firebasestorage.googleapis.com/v0/b/pixel-palacebaclup.appspot.com/o/nintendo_switch_logo.webp?alt=media&token=f46a9466-478f-4991-a991-09077180e1bb"
                        className=" w-full h-12 object-cover"
                      />
                      <div className="p-8">
                        <p className="text-2xl mb-2 ">Nombre:
                          <span className="font-bold"> Nintendo card{/*giftCard.nombre*/}</span>
                        </p>
                        <p className="text-gray-100 text-lg">Categorias:
                          <span className="font-bold"> Regalo, Aniversario{/*giftCard.categoria.join(", ")*/}</span>
                        </p>
                        <p className="text-gray-100 text-lg">Fecha de expiración:
                          <span className="font-bold"> 2024-02-25 {/*giftCard.fecha_lanzamiento*/}</span>
                        </p>
                        <h1 className="text-gray-100 font-semibold mt-2 text-2xl">Precio:
                          <span className="font-bold"> $44.99{/*giftCard.precio*/}</span>
                        </h1>
                      </div>

                      <div className="flex justify-between">
                        <Button
                          type="primary"
                          block
                          size="large"
                          className="my-4 button1 dark:w-44 mx-20"
                          onClick={() => (window.location.href = "")}
                        >
                          {<ShoppingCartOutlined />}Agregar al carrito
                        </Button>
                        <Button
                          type="primary"
                          block
                          size="large"
                          className="my-4 button1 dark:w-48 mx-20"
                          onClick={() => (window.location.href = "/best-games")}
                        > {<RollbackOutlined />}
                          Volver a los juegos
                        </Button>
                      </div>
                    </div>
                  </Col>
                ))}

                {/**************************************************************************/}
                <div className="card-details w-3/4 shadow-md dark:bg-gray-900 h-150 mx-auto">
                  <img
                    alt="Nintendo card"
                    src="https://firebasestorage.googleapis.com/v0/b/pixel-palacebaclup.appspot.com/o/nintendo_switch_logo.webp?alt=media&token=f46a9466-478f-4991-a991-09077180e1bb"
                    className=" w-full h-12 object-cover"
                  />
                  <div className="p-8">
                    <p className="text-2xl mb-2 ">Nombre:
                      <span className="font-bold"> Nintendo card{/*giftCard.nombre*/}</span>
                    </p>
                    <p className="text-gray-100 text-lg">Categorias:
                      <span className="font-bold"> Regalo, Aniversario{/*giftCard.categoria.join(", ")*/}</span>
                    </p>
                    <p className="text-gray-100 text-lg">Fecha de expiración:
                      <span className="font-bold"> 2024-02-25 {/*giftCard.fecha_lanzamiento*/}</span>
                    </p>
                    <h1 className="text-gray-100 font-semibold mt-2 text-2xl">Precio:
                      <span className="font-bold"> $44.99{/*giftCard.precio*/}</span>
                    </h1>
                  </div>

                  <div className="flex justify-between">
                  <Button
                      type="primary"
                      block
                      size="large"
                      className="my-4 button1 dark:w-48 mx-20"
                      onClick={() => (window.location.href = "")}
                    > {<ShoppingCartOutlined />}
                      Agregar al carrito
                    </Button>
                    <Button
                      type="primary"
                      block
                      size="large"
                      className="my-4 button1 dark:w-48 mx-20"
                      onClick={() => (window.location.href = "/best-games")}
                    > {<RollbackOutlined />}
                      Volver a los juegos
                    </Button>
                  </div>
                </div>
                {/**************************************************************************/}


              </Row>
            </div>
          </div>
        </Content>

        <FooterLayout />
      </Layout>
    </ThemeProvider>
  );
}

export default GameDetails;