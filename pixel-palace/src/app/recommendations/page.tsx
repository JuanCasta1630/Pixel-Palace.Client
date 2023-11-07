"use client";
import React, { useState, useEffect } from 'react';
import HeaderLayout from '../components/Header';
import { HeartOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined } from "@ant-design/icons";
import { Layout, Col, Row, Button, Pagination } from "antd";
import { ThemeProvider } from "next-themes";
import Filters, { FiltersProps } from '../components/Filters';
import JuegosRecomendados from '../../../../juegos.json';

interface Game {
  id: number;
  nombre: string;
  categoria: string[];
  desarrollador: string;
  fecha_lanzamiento: string;
  precio: number;
  imagen: string;
  plataforma: string;
}

interface FiltersData {
  plataforma: string;
  precio: number;
}

export default function Recommendations() {
  const { Content, Footer } = Layout;
  const itemsPerPage: number = 12;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [filters, setFilters] = useState<FiltersData>({ plataforma: 'all', precio: 2000 });

  useEffect(() => {
    const filtered = JuegosRecomendados.filter((game) => {
      return (
        (game.precio <= filters.precio) &&
        (filters.plataforma === 'all' || game.plataforma === filters.plataforma)
      );
    });

    setFilteredGames(filtered);
    setCurrentPage(1);
  }, [filters]);

  const handleFilterChange = (newFilters: FiltersData) => {
    setFilters(newFilters);
  };

  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = currentPage * itemsPerPage;

  const gamesPaginated: Game[] = filteredGames.slice(startIndex, endIndex);

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout className="w-full min-h-screen dark:bg-gray-700 bg-white">
        <HeaderLayout />
        <Content className="p-4 mt-8">
          <div className="flex flex-row p-8">
            <div className="flex flex-col items-center">
              <Filters onFilterChange={handleFilterChange} filters={filters} />
            </div>
            <div className="px-12">
              <h1 className="text-2xl font-bold mb-4">Tarjetas</h1>
              <div className="flex flex-col justify-center items-center">
                <Row
                  gutter={[16, 16]}
                  className="md:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4"
                >
                  {gamesPaginated.map((game, index) => (
                    <Col key={index} className="mb-4">
                      <div className="game-home game2 border border-gray-300 shadow-md rounded-xl dark:bg-gray-900 h-96">
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
                            {game.fecha_lanzamiento}
                          </p>
                          <p className="text-red-500 font-semibold mt-2">
                            ${game.precio}
                          </p>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
                <Pagination
                  current={currentPage}
                  total={filteredGames.length} 
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
  );
}
