import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="flex items-center justify-between bg-gray-50 rounded-lg shadow-lg px-6 py-8 h-72 w-full max-w-4xl mx-auto">
   
      <button
        onClick={handlePrev}
        className="px-4 py-2 bg-myBlue text-white rounded hover:bg-myOcean transition"
      >
        <FaArrowLeft />
      </button>


      <div className="text-center w-full px-6">
        {slides[index]}
      </div>

   
      <button
        onClick={handleNext}
        className="px-4 py-2 bg-myBlue text-white rounded hover:bg-myOcean transition"
      >
    <FaArrowRight />
    </button>
    </div>

  );
};

export default TextCarousel;
