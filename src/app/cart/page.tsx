"use client"
import React from 'react'
import HeaderLayout from "../components/Header";
import FooterLayout from "../components/Footer";
import { ThemeProvider } from "next-themes";
import { Layout } from "antd";

export default function Cart() {

  const { Content, Footer } = Layout;

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout className="ww-full min-h-screen dark:bg-gray-700 bg-white">
        <HeaderLayout />
        <Content className="p-4 mt-8"></Content>
        <FooterLayout />
      </Layout>
    </ThemeProvider>
  );
}
