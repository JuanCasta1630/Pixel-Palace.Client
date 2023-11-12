"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "../loading";
import { getGameDetails } from "../services/firebase";
import HeaderLayout from "../components/Header";
import FooterLayout from "../components/Footer";
import { ThemeProvider } from "next-themes";
import { Layout } from "antd";
import { Game } from "@/app/types/types";
function GameDetails() {
  const { Content, Footer } = Layout;

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout className="w-full min-h-screen dark:bg-gray-700 bg-white">
        <HeaderLayout />
        <Content className="p-4 mt-8"></Content>
        <FooterLayout />
      </Layout>
    </ThemeProvider>
  );
}

export default GameDetails;
