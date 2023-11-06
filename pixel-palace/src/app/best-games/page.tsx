"use client";
import React, { useState } from 'react';
import HeaderLayout from '../components/Header';
import { HeartOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined } from "@ant-design/icons";
import { Layout, Col, Row, Button, Pagination } from "antd";
import { ThemeProvider } from "next-themes";
import Filters from '../components/Filters';
import JuegosRecomendados from '../../../../juegos.json';

interface FilterProps {
  id: number;
  nombre: string;
  categoria: string[];
  desarrollador: string;
  fecha_lanzamiento: string;
  precio: number;
  imagen: string;
}

export default function BestGames() {
  const { Content, Footer } = Layout;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 12;
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = currentPage * itemsPerPage;
  const cardsPaginados: FilterProps[] = JuegosRecomendados.slice(startIndex, endIndex);
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout className="w-full min-h-screen dark:bg-gray-700 bg-white">
        <HeaderLayout />
        <Content className="p-4 mt-8">
          <div className="flex flex-row p-8">
            <div className="flex flex-col items-center">
              <Filters />
            </div>
            <div className="px-12">
              <h1 className="text-2xl font-bold mb-4">JuegosRecomendados</h1>
              <div className="flex flex-col justify-center items-center">
                <Row
                  gutter={[16, 16]}
                  className="md:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4"
                >
                {cardsPaginados.map((card, index) => (
                  <Col key={index} className="mb-4">
                            <div className="card-home card2 border border-gray-300 shadow-md rounded-xl dark:bg-gray-900 h-96">
                              <img
                                alt={card.nombre}
                                src={card.imagen}
                                className="w-full h-48 object-cover rounded-t-xl border border-gray-300"
                              />
                              <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">
                                  {card.nombre}
                                </h2>
                                <p className="text-gray-100">
                                  {card.nombre}
                                </p>
                                <p className="text-red-500 font-semibold mt-2">
                                  ${card.precio} 
                                </p>
                              </div>
                            </div>
                          </Col>
                  ))}
                </Row>
                <Pagination
                current={currentPage}
                total={JuegosRecomendados.length}
                pageSize={itemsPerPage}
                onChange={(page) => setCurrentPage(page)}
                />
              </div>
            </div>
          </div>
        </Content>
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
  )
}
