import React from 'react';

const OrganicGraphics: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Organic Bold Stroke 1 - Inspired by logo loop */}
      <svg
        className="absolute -top-1/4 -left-1/4 w-[80%] h-[150%] opacity-10 animate-float-slow"
        viewBox="0 0 800 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 900C100 900 300 1000 500 700C700 400 600 100 400 100C200 100 100 400 300 600C500 800 800 700 800 700"
          stroke="white"
          strokeWidth="60"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Organic Bold Stroke 2 - Mirrored/Varied loop */}
      <svg
        className="absolute -bottom-1/4 -right-1/4 w-[70%] h-[130%] opacity-[0.07] animate-float-delayed"
        viewBox="0 0 800 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'rotate(180deg)' }}
      >
        <path
          d="M100 900C100 900 300 1000 500 700C700 400 600 100 400 100C200 100 100 400 300 600C500 800 800 700 800 700"
          stroke="white"
          strokeWidth="80"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Sparkle/Star element from logo */}
      <svg
        className="absolute top-1/4 right-1/4 w-32 h-32 opacity-20 animate-pulse"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 0C50 0 55 35 90 40C95 41 95 59 90 60C55 65 50 100 50 100C50 100 45 65 10 60C5 59 5 41 10 40C45 35 50 0 50 0Z"
          fill="white"
        />
      </svg>
      
      <svg
        className="absolute bg-bottom-1/3 left-1/3 w-20 h-20 opacity-10 animate-pulse"
        style={{ animationDelay: '1s' }}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 0C50 0 55 35 90 40C95 41 95 59 90 60C55 65 50 100 50 100C50 100 45 65 10 60C5 59 5 41 10 40C45 35 50 0 50 0Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default OrganicGraphics;
