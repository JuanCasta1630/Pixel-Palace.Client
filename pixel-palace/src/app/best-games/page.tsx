"use client";
import React from "react";
import GameList from "../components/GameList";
import HeaderLayout from "../components/Header";
import FooterLayout from "../components/Footer";


export default function BestGames() {
  return (
    <div className="mt-20 w-full min-h-screen dark:bg-gray-700 bg-white ">
      <HeaderLayout />
      <h1 className="text-center font-semibold text-4xl mt-20">
        The best games
      </h1>
      <GameList />
      <FooterLayout />
    </div>
  );
}
