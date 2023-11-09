"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "../loading";
import { getGames } from "@/app/services/firebase";
import HeaderLayout from "../components/Header";
import FooterLayout from "../components/Footer";
import { ThemeProvider } from "next-themes";
import { Button, Col, Layout, Row } from "antd";

function GameDetails() {
  const [games, setGames] = useState([]);
  const router = useRouter()

  const { Content } = Layout;
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getGames()
      .then((result: any) => {
        if (result.success) {
          setGames(result.games);
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
              Back To Games
            </Button>
            <Row gutter={[16, 16]}
            className="md:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
              {games.map((game: any, index) => (
            <Col
              className="w-full sm:mx-2 md:mx-2 lg:mx-4 2xl:mx-4 "
              key={index}
            >
            <img
                      alt={game.nombre}
                      src={game.imagen}
                      className=" w-full h-48 object-cover rounded-t-xl border border-gray-300"
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold mb-2">
                        {game.nombre}
                      </h2>
                      <p className="text-gray-100">
                        {game.categoria.join(", ")}
                      </p>
                      <p className="text-gray-100">{game.fecha_lanzamiento}</p>
                      <p className="text-red-500 font-semibold mt-2">
                        ${game.precio}
                      </p>
                    </div>
                    </Col>
              ))}
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
