/* eslint-disable @next/next/no-img-element */
import React, { Children, Component, useState, useEffect } from "react";
import { Layout, Card, Col, Row, Pagination, Typography, Button } from "antd";
import {
  HeartOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import juegos from "@/app/services/juegos.json";
import HeaderLayout from "../Header";
import { ThemeProvider } from "next-themes";

 
const { Header, Content, Footer } = Layout;

const GameContainer: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const onChangePage = (page: number) => {
    setCurrentPage(page);
  };
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };
  const gamesToShow = juegos.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    
  <ThemeProvider enableSystem={true} attribute="class">

   <Layout className=" w-full min-h-screen flex flex-col dark:bg-white bg-gray-700">
  <HeaderLayout />
  <Content className="p-4 flex-1 overflow-y-auto mt-24 flex justify-center items-center">

    <Row
      gutter={[16, 16]}
      className="md:grid md:grid-cols-2 lg:grid-cols-3"
    >
      {gamesToShow.map((game, index) => (
        <Col span={24} xs={24} xxl={24} md={12} xl={12} lg={4} key={index}>
          <Card className="bg-gray-300 shadow-lg w-96 h-full mx-2 md:mx-2 lg:mx-4 dark:bg-primary">
            <img
              alt={game.nombre}
              src={game.imagen}
              className="w-full h-48 md:h-64 lg:h-80 object-cover"
            />
            <Typography className="text-xl font-semibold mt-2">
              {game.nombre}
            </Typography>
            <Typography className="text-sm">
              {game.desarrollador}
            </Typography>
            <Typography className="text-sm"> {game.precio}</Typography>
            <Typography className="text-sm">
              {game.fecha_lanzamiento}
            </Typography>
            <Typography className="text-sm">
              Categoría: {game.categoria.join(", ")}
            </Typography>
          </Card>
        </Col>
      ))}
    </Row>
  </Content>
  <Pagination
    current={currentPage}
    total={juegos.length}
    pageSize={pageSize}
    onChange={onChangePage}
    showSizeChanger={false}
    className="mt-8 text-center"
  />
  <Footer className="bg-green-600 text-white p-4 text-center flex justify-between items-center mt-8 dark:bg-primary dark:text-black">
    <div className="flex-1 text-center">
      Hecho con <HeartOutlined /> grupo 3
    </div>
    <div className="flex items-center space-x-4 text-3xl">
      <Button
        className="text-white dark:text-black"
        type="link"
        icon={<FacebookOutlined />}
      />
      <Button
        className="text-white dark:text-black"
        type="link"
        icon={<TwitterOutlined />}
      />
      <Button
        className="text-white dark:text-black"
        type="link"
        icon={<InstagramOutlined />}
      />
      {/* <Button title={'dark'}onClick={toggleDarkMode}/> */}
    </div>
  </Footer>
</Layout>
</ThemeProvider>
  );
};

export default GameContainer;
