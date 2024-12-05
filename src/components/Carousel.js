import React, { useState } from "react";

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + items.length) % items.length
      );
    };
    return (
        <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-1/2 m-auto object-cover shadow-xl"
              />
              <div className="p-4 text-center">
                <h2 className="text-3xl text-white font-semibold font-gabarito pb-2">{item.title}</h2>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/3 left-1/4 transform -translate-y-1/2 text-white rounded-full px-4 py-2 hover:bg-slate-400 hover:bg-opacity-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/3 right-1/4 transform -translate-y-1/2 text-white rounded-full px-4 py-2 hover:bg-slate-400 hover:bg-opacity-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    );
}

export default Carousel;