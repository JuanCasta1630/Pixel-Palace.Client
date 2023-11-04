import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { image: '/foto1.jpg', title: 'Slide 1', content: 'Contenido del primer slide' },
    { image: '/foto2.jpg', title: 'Slide 2', content: 'Contenido del segundo slide' },
    { image: '/foto3.jpg', title: 'Slide 3', content: 'Contenido del tercer slide' },
    { image: '/foto1.jpg', title: 'Slide 4', content: 'Contenido del cuarto slide' },
    { image: '/foto2.jpg', title: 'Slide 5', content: 'Contenido del quinto slide' },
    { image: '/foto3.jpg', title: 'Slide 6', content: 'Contenido del sexto slide' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Cambia cada 5 segundos (5000 ms)
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full max-w-screen-md mx-auto overflow-hidden mt-20">
      <div className="carousel flex transform transition-transform translate-x-0">
        {items.map((item, index) => (
          <div key={index} className="w-full  relative">
            <img src={item.image} alt={item.title} className="w-full h-screen object-cover" />
            <div className="absolute top-0 left-0 w-full bg-black opacity-50" />
            <div className="absolute top-0 left-0 p-4 text-white">
              <h2 className="text-2xl font-bold dark:text-white">{item.title}</h2>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
