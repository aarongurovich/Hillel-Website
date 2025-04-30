import React from 'react';

interface HeroProps {
  onDonateClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDonateClick }) => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-blue-900 to-red-800 flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Hats.jpg')",
            opacity: 0.3
          }}
        />
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Welcome to Texas Tech Hillel
        </h1>
        <p className="text-xl sm:text-2xl text-white mb-10">
          Your Jewish home away from home on campus
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 bg-white text-red-800 rounded-md hover:bg-gray-100 transition-colors font-medium text-lg"
          >
            Learn More
          </button>
          <button
            onClick={onDonateClick}
            className="px-8 py-3 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors font-medium text-lg"
          >
            Donate via Zelle
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};