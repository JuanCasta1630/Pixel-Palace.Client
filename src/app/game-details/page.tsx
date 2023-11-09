"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "../loading";
import { getGameDetails } from "../services/firebase";
import HeaderLayout from "../components/Header";
import FooterLayout from "../components/Footer";
import { ThemeProvider } from "next-themes";

function GameDetails() {
  const [gameDetails, setGameDetails] = useState(null);
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <HeaderLayout />
      <div className="dark:bg-gray-900">
        
      </div>
      <FooterLayout />
    </ThemeProvider>
  );
}

export default GameDetails;
