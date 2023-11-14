'use client';

import HeaderLayout from '../../components/Header';
import { ThemeProvider } from 'next-themes';
import FooterLayout from '../../components/Footer';
import { Layout } from 'antd';

export default function Categoria() {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <Layout className='w-full min-h-screen dark:bg-gray-700 bg-white'>
        <HeaderLayout />
        <div className='w-full py-12 md:py-24 lg:py-32'>hola</div>

        <FooterLayout />
      </Layout>
    </ThemeProvider>
  );
}
