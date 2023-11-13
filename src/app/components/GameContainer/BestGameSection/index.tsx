/* eslint-disable @next/next/no-img-element */
import { Row, Col, Button, Card } from 'antd';
import Link from 'next/link';

interface BestGamesSectionProps {
  juegosPopulares: any[]; // Reemplaza 'any[]' con el tipo correcto de tus datos
}

const BestGamesSection: React.FC<BestGamesSectionProps> = ({
  juegosPopulares,
}) => (
  <Card className='dark:bg-gray-400 text-white'>
    <h2 className='text-center text-2xl font-semibold mb-6'>
      The best games (Digital)
    </h2>
    <div className='flex flex-col justify-center items-center'>
      <Row
        gutter={[16, 16]}
        className='md:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4'
      >
        {juegosPopulares.map((game: any, index) => (
          <Col className='w-full sm:mx-2 md:mx-2 lg:mx-2 2xl:mx-2' key={index}>
            <div className='card-home card2 border border-gray-300 shadow-md rounded-xl dark:bg-gray-900 h-96'>
              <Link href={`/game-details/${game.id}`}>
                <img
                  alt={game.nombre}
                  src={game.imagen}
                  className='w-full h-48 object-cover rounded-t-xl border border-gray-300'
                />
                <div className='p-4'>
                  <h2 className='text-xl font-semibold mb-2'>{game.nombre}</h2>
                  <p className='text-gray-100'>{game.categoria.join(', ')}</p>
                  <p className='text-gray-100'>{game.fecha_lanzamiento}</p>
                  <p className='text-red-500 font-semibold mt-2'>
                    ${game.precio}
                  </p>
                </div>
              </Link>
            </div>
          </Col>
        ))}
      </Row>

      <Button
        type='primary'
        block
        size='large'
        className='mt-6 button1 dark:w-96'
        onClick={() => (window.location.href = '/best-games')}
      >
        Read More
      </Button>
    </div>
  </Card>
);

export default BestGamesSection;
