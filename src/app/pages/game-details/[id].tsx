import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "../../loading";
import { getGameDetails, getGames } from "../../services/firebase";
import HeaderLayout from "../../components/Header";
import FooterLayout from "../../components/Footer";
import { ThemeProvider } from "next-themes";
import { Layout } from "antd";
import { Game } from "../../types/types";
import { GetStaticProps } from "next";
function GameDetails() {
  const { Content, Footer } = Layout;

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout className="w-full min-h-screen dark:bg-gray-700 bg-white">
        <HeaderLayout />
        <Content className="p-4 mt-8">
         
        </Content>
        <FooterLayout />
      </Layout>
    </ThemeProvider>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  console.log(params);

  const id = params?.id as string;
  const data = await getGameDetails(id);
  return {
    props: {
      game: data,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const data = await getGames();
  const paths = data?.games?.map((game) => {
    return { params: { id: game.id.toString() } };
  });
  

  return {
    paths,
    fallback: true,
  };
};


export default GameDetails;
