import React, { useState, useEffect } from 'react';

const slides = [
  (
    <div>
      <h1 className="mb-3 text-4xl font-myHeader text-myBlue">Education</h1>
      <p className="text-2xl font-myText text-myOcean">
        MSc with econometrics  
        <br />
        Utrecht University  
        <br />
        Awarded Cum Laude
      </p>
    </div>
  ),
  (
    <div>
      <h1 className="mb-3 text-4xl font-myHeader text-myBlue">Relevant experience</h1>
      <p className="text-2xl font-myText text-myOcean">
        3+ years web design 
        <br />
        Programming training
      </p>
    </div>
  ),
  (
    <div>
      <h1 className="mb-3 text-4xl font-myHeader text-myBlue">Skills and interest</h1>
      <p className="text-2xl font-myText text-myOcean font-semibold"> Frontend webdevelopment </p>
         <p className="text-2xl font-myText text-myOcean">
          HTML, (Taiwlind) CSS, JavaScript, <br /> React + Vite
          </p>
         <p className="text-2xl font-myText text-myOcean font-semibold pt-3"> Backend webdevelopment </p>
         <p className="text-2xl font-myText text-myOcean">
          Node.js, Express.js, Git, PostgreSQL
          </p>
    </div>
  )
];

const TextCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // wissel elke 4 seconden

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg shadow-lg px-6 text-center">
      <div className="transition-opacity duration-500 ease-in-out w-full">
        {slides[index]}
      </div>
    </div>
  );
}

export default TextCarousel