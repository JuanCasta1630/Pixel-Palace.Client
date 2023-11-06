"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "../loading";
import { getGameDetails } from "../services/firebase";
import HeaderLayout from "../components/Header";
import FooterLayout from "../components/Footer";
import { ThemeProvider } from "next-themes";

function GameDetails() {
  const { query } = useRouter();
  const gameId = query?.gameId;
  const [gameDetails, setGameDetails] = useState(null);

  useEffect(() => {
    if (gameId) {
      const gameDetails = getGameDetails(gameId);
      setGameDetails(gameDetails);
    } else {
      console.log("no encontrado");
    }
  }, [gameId]);

  if (!gameDetails) {
    return <Loading />;
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <HeaderLayout />
      <div className="dark:bg-gray-900">
        <h1>{gameDetails.nombre}</h1>
        <img src={gameDetails.imagen} alt={gameDetails.nombre} />
        <p>Release Date: {gameDetails.fecha_lanzamiento}</p>
        <p>Category: {gameDetails.categoria}</p>
        <p>Developer: {gameDetails.desarrollador}</p>
        <p>Price: {gameDetails.precio}</p>
      </div>
      <FooterLayout />
    </ThemeProvider>
  );
}

export default GameDetails;
