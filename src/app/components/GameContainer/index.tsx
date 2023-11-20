/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from "react";
import { Layout, Col, Row, Button } from "antd";
import juegos from "@/app/services/juegos.json";
import regalos from "@/app/services/regalos.json";
import HeaderLayout from "../Header";
import { ThemeProvider } from "next-themes";
import Carousel from "../Carrusel";
import Link from "next/link";
import CategoriasPage from "../Categories/index";
import FooterLayout from "../Footer";
import CreateGame from "../CreateGame";
import { getCards } from "@/app/services/firebase";
import { Game } from "@/app/types/types";
import { useGames } from "@/app/hooks/useGames";
import Loading from "@/app/loading";
import GiftCardsSection from "./GiftCardsSection";
import BestGamesSection from "./BestGameSection";
import RecommendationsSection from "./RecommendationsSection";

const { Content } = Layout;

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

  const { games } = useGames();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards()
      .then((result: any) => {
        if (result.success) {
          setCards(result.card);
        } else {
          console.error("Error al obtener los juegos:", result.error);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los juegos:", error);
      });
  }, []);


  // Filtrar juegos populares, recomendaciones y tarjetas de regalo
  const juegosPopulares = games.filter((game) => game).slice(0, 4);
  const recomendaciones = games.filter((game) => game).slice(0, 4);
  const tarjetasDeRegalo = cards.filter((game) => game).slice(0, 4);

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout className="w-full min-h-screen dark:bg-gray-700 bg-white">
        <Content className="p-4">
        <Carousel />
          <GiftCardsSection tarjetasDeRegalo={tarjetasDeRegalo} />
          <BestGamesSection juegosPopulares={juegosPopulares} />
          <RecommendationsSection recomendaciones={recomendaciones} />
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
        <FooterLayout />
      </Layout>
    </ThemeProvider>
  );
};

export default GameContainer;
