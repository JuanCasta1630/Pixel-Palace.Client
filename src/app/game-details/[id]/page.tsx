/* eslint-disable @next/next/no-img-element */
'use client';

import { getGameDetails, getGames } from '@/app/services/firebase';
import { useEffect, useState } from 'react';
import FooterLayout from '../../components/Footer';
import { Game } from '../../types/types';
import { GetStaticProps } from 'next';
import HeaderLayout from '../../components/Header';
import { Layout } from 'antd';
import Loading from '../../loading';
import { ThemeProvider } from 'next-themes';
import { usePathname } from 'next/navigation';

function GameDetails() {
  const { Content } = Layout;
  const [data, setData] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const gameDetailId = pathname.split('/').at(2);

  useEffect(() => {
    if (gameDetailId) {
      getGameDetails(gameDetailId).then((resp) => {
        setData(resp as Game);
        setLoading(false);
      });
    }
  }, [gameDetailId]);

  if (loading) return <Loading/>;
console.log(data);

  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <Layout className='w-full min-h-screen dark:bg-gray-700 bg-white'>
        <HeaderLayout />
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container flex items-start gap-8 px-4 md:px-6'>
            <img
              src={data?.imagen}
              width='500'
              height='500'
              alt={data?.nombre}
              className='aspect-[1/1] object-cover object-center'
            />
            <div className='space-y-6'>
              <h1 className='text-4xl font-bold tracking-tighter'>
                {data?.nombre}
              </h1>
              <div className='flex space-x-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
                </svg>
              </div>
              <p className='text-2xl font-semibold text-zinc-900 dark:text-zinc-50'>
                $ {data?.precio}
              </p>
              <p className='text-base text-zinc-500 dark:text-zinc-400'>
                fecha de lanzamiento: {data?.fecha_lanzamiento}
                - Categoria : {data?.categoria.join(' - ')}
              </p>
              <div className='flex space-x-2'>
                <button className='inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 px-4 py-2 w-12 h-12 rounded-md border border-zinc-200 text-zinc-900 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50'>
                  7
                </button>
                <button className='inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 px-4 py-2 w-12 h-12 rounded-md border border-zinc-200 text-zinc-900 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50'>
                  8
                </button>
                <button className='inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 px-4 py-2 w-12 h-12 rounded-md border border-zinc-200 text-zinc-900 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50'>
                  9
                </button>
                <button className='inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 px-4 py-2 w-12 h-12 rounded-md border border-zinc-200 text-zinc-900 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50'>
                  10
                </button>
              </div>
              <button className='inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 px-4 py-2 w-full h-12 rounded-md bg-zinc-900 text-zinc-50 shadow-sm dark:bg-zinc-50 dark:text-zinc-900'>
                Add to Cart
              </button>
              <p className='text-xs text-zinc-500 dark:text-zinc-400'>
                Desarrollado por: {data?.desarrollador}
              </p>
            </div>
          </div>
        </section>
        <Content className='p-4 mt-8'></Content>
        <FooterLayout />
      </Layout>
    </ThemeProvider>
  );
}
export default GameDetails;
