/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import HeaderLayout from "../components/Header";
import { Layout, Col, Row, Button, Pagination } from "antd";
import { ThemeProvider } from "next-themes";
import Filters from "../components/Filters";
import Tarjetas from "../../../gift-cards.json";
import { getCards } from "../services/firebase";
import FooterLayout from "../components/Footer";
import Link from "next/link";
import Loading from "../loading";

interface FilterProps {
  id: number;
  codigo: string;
  valor: number;
  moneda: string;
  fecha_expiracion: string;
  estado: string;
  image: string;
  juego_relacionado: string;
}

export default function GiftCards() {
  const { Content, Footer } = Layout;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 12;

  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = currentPage * itemsPerPage;

  const cardsPaginados: FilterProps[] = Tarjetas.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleFilterChange = (filters: FilterProps) => {};
  useEffect(() => {
    getCards()
      .then((result: any) => {
        if (result.success) {
          setCards(result.card);
        } else {
          console.error("Error al obtener los juegos:", result.error);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los juegos:", error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading />;
  }
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
              <h1 className="text-2xl font-bold mb-4">Gift cards</h1>
              <div className="flex flex-col justify-center items-center">
                <Row
                  gutter={[16, 16]}
                  className="md:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4"
                >
                  {cards.map((card: any, index) => (
                    <Col key={index} className="mb-4">
                      <div className="card-home card2 border border-gray-300 shadow-md rounded-xl dark:bg-gray-900 h-96">
                        <Link href={`/cards-details`}>
                          <img
                            alt={card.fecha_lanzamiento}
                            src={card.imagen}
                            className="w-full h-48 object-cover rounded-t-xl border border-gray-300"
                          />
                          <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">
                              {card.nombre}
                            </h2>
                            <h2 className="text-xl font-semibold mb-2">
                              {card.fecha_lanzamiento}
                            </h2>
                            <p className="text-red-500 font-semibold mt-2">
                              ${card.precio}
                            </p>
                          </div>
                        </Link>
                      </div>
                    </Col>
                  ))}
                </Row>
                <Pagination
                  current={currentPage}
                  total={Tarjetas.length}
                  pageSize={itemsPerPage}
                  onChange={(page) => setCurrentPage(page)}
                />
              </div>
            </div>
          </div>
        </Content>
        <FooterLayout />
      </Layout>
    </ThemeProvider>
  );
}
