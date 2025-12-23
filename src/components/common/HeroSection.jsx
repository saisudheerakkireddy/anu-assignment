import React from 'react';

const HeroSection = () => {
  return (
    <div className="text-center mb-10">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Four Services + One Mission:{' '}
        <span className="text-gray-900">Empowering global talent.</span>
      </h1>
      <p className="text-rose-500 text-lg italic">
        Not just study options but experience the future-ready-courses.
      </p>
    </div>
  );
};

export default React.memo(HeroSection);

