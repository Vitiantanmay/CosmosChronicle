
import React from 'react';

interface HomePageProps {
  onEnter: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onEnter }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 animate-fade-in">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider animate-glow">
          CosmosChronicle
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400">
          A journey through space history & beyond
        </p>
      </div>
      <button
        onClick={onEnter}
        className="mt-12 px-8 py-3 border-2 border-sky-500 text-sky-500 rounded-full text-lg font-bold
                   hover:bg-sky-500 hover:text-black hover:shadow-[0_0_20px_theme(colors.sky.500)]
                   transition-all duration-300 transform hover:scale-105"
      >
        Enter Timeline
      </button>
    </div>
  );
};

export default HomePage;
