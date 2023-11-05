/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Layout, Col, Row, Pagination, Button } from "antd";
import {
  HeartOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import juegos from "@/app/services/juegos.json";
import regalos from "@/app/services/regalos.json";
import HeaderLayout from "../Header";
import { ThemeProvider } from "next-themes";
import Carousel from "../Carrusel";
import Link from "next/link";
import { useRouter } from "next/router";
import CategoriasPage from "../Categories/indext";

const { Content, Footer } = Layout;

const GameContainer: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const onChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const gamesToShow = juegos.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Filtrar juegos populares, recomendaciones y tarjetas de regalo
  const juegosPopulares = juegos.filter((game) => game).slice(0, 4);
  const recomendaciones = juegos.filter((game) => game).slice(0, 4);
  const tarjetasDeRegalo = regalos.filter((game) => game).slice(0, 4);

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout className="w-full min-h-screen dark:bg-gray-700 bg-white">
        <HeaderLayout />
        <Carousel />
        <Content className="p-4">
          {/* Sección de Tarjetas de Regalo */}
          <h2 className="text-2xl font-semibold mb-4">Gift Cards</h2>
          <div className="flex flex-col justify-center items-center">
            <Row
              gutter={[8, 8]}
              className="sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-4 "
            >
              {tarjetasDeRegalo.map((game, index) => (
                <Col className="mx-2 sm:mx-4 md:mx-2 lg:mx-4 " key={index}>
                  <div className="card-home card2 border border-gray-300 shadow-md rounded-xl dark:bg-gray-900 dark:w-24 dark:h-24 ">
                    <Link href={`/gift-cards`}>
                      <div className="border border-gray-300 shadow-md rounded-xl dark:bg-gray-900 dark:w-24 dark:h-24 hover:shadow-lg transition duration-300">
                        <img
                          alt={game.nombre}
                          src={game.imagen}
                          className="dark:w-24 dark:h-24 object-contain rounded-xl"
                        />
                      </div>
                    </Link>
                    {/* <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">
                      {game.nombre}
                    </h2>
                    <p className="text-gray-100">{game.categoria.join(", ")}</p>
                    <p className="text-gray-100">{game.fecha_lanzamiento}</p>
                    <p className="text-red-500 font-semibold mt-2">
                      ${game.precio}
                    </p>
                  </div> */}
                  </div>
                </Col>
              ))}
            </Row>

            <Button
              type="primary"
              block
              size="large"
              className="my-4 button1 dark:w-48 md:hidden lg:hidden 2xl:hidden"
              onClick={() => (window.location.href = "/forgot-password")}
            >
              Read More
            </Button>
          </div>
          {/* Sección de Juegos Populares */}
          <h2 className="text-2xl font-semibold mb-4">
            The best games (Digital)
          </h2>
          <div className="flex flex-col justify-center items-center">
            <Row
              gutter={[16, 16]}
              className="md:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4"
            >
              {juegosPopulares.map((game, index) => (
                <Col key={index}>
                  <div className="card-home card2 border border-gray-300 shadow-md rounded-xl dark:bg-gray-900 h-96">
                    <Link href={`/best-games`}>
                      <img
                        alt={game.nombre}
                        src={game.imagen}
                        className="w-full h-48 object-cover rounded-t-xl border border-gray-300"
                      />
                      <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">
                          {game.nombre}
                        </h2>
                        <p className="text-gray-100">
                          {game.categoria.join(", ")}
                        </p>
                        <p className="text-gray-100">
                          {game.fecha_lanzamiento}
                        </p>
                        <p className="text-red-500 font-semibold mt-2">
                          ${game.precio}
                        </p>
                      </div>
                    </Link>
                  </div>
                </Col>
              ))}
            </Row>

            <Button
              type="primary"
              block
              size="large"
              className="my-4 button1 dark:w-48 md:hidden lg:hidden 2xl:hidden"
              onClick={() => (window.location.href = "/forgot-password")}
            >
              Read More
            </Button>
          </div>
          {/* Sección de Recomendaciones */}
          <h2 className="text-2xl font-semibold mb-4">
            Recommendations for you
          </h2>
          <div className="flex flex-col justify-center items-center ">
            <Row
              gutter={[16, 16]}
              className="md:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4"
            >
              {recomendaciones.map((game, index) => (
                <Col className=" mx-2 sm:mx-4 md:mx-2 lg:mx-4" key={index}>
                  <div className="card-home card2 border border-gray-300 shadow-md rounded-xl dark:bg-gray-900 h-96">
                    <Link href={`/recommendations`}>
                      <img
                        alt={game.nombre}
                        src={game.imagen}
                        className="w-full h-48 object-cover rounded-t-xl border border-gray-300"
                      />
                      <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">
                          {game.nombre}
                        </h2>
                        <p className="text-gray-100">
                          {game.categoria.join(", ")}
                        </p>
                        <p className="text-gray-100">
                          {game.fecha_lanzamiento}
                        </p>
                        <p className="text-red-500 font-semibold mt-2">
                          ${game.precio}
                        </p>
                      </div>
                    </Link>
                  </div>
                </Col>
              ))}
            </Row>

            <Button
              type="primary"
              block
              size="large"
              className="my-4 button1 dark:w-48 md:hidden lg:hidden 2xl:hidden"
              onClick={() => (window.location.href = "/forgot-password")}
            >
              Read More
            </Button>
          </div>
          <CategoriasPage />
        </Content>
        {/* <Pagination
          current={currentPage}
          total={juegos.length}
          pageSize={pageSize}
          onChange={onChangePage}
          showSizeChanger={false}
          className="text-center"
        /> */}
        <Footer className="bg-blue-800 text-white p-4 text-center flex justify-between items-center dark:bg-gray-900">
          <div className="flex-1 text-center">
            Made with <HeartOutlined /> Team 3
          </div>
          <div className="dark:text-white flex items-center space-x-4 text-3xl">
            <Button
              className="dark:text-white text-white"
              type="link"
              icon={<FacebookOutlined />}
            />
            <Button
              className="dark:text-white text-white"
              type="link"
              icon={<TwitterOutlined />}
            />
            <Button
              className="dark:text-white text-white"
              type="link"
              icon={<InstagramOutlined />}
            />
          </div>
        </Footer>
      </Layout>
    </ThemeProvider>
  );
};

export default GameContainer;
