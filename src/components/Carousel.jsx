import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  (
    <div>
      <h1 className="mb-3 text-2xl sm:text-4xl font-myHeader text-myBlue">Education</h1>
      <p className="text-lg sm:text-2xl font-myText text-white sm:text-myOcean font-semibold">
        MSc International Management</p>
        <p className="text-lg sm:text-2xl font-myText text-white sm:text-myOcean font-semibold sm:font-normal">
        strong focus on Econometrics
        <br />
        <br />
        Utrecht University  
        </p>
        <p className="text-lg sm:text-2xl font-myText text-white sm:text-myOcean font-semibold">
        Awarded Cum Laude
        </p>
    </div>
  ),
  (
    <div>
      <h1 className="mb-3 text-2xl sm:text-4xl font-myHeader text-myBlue">Relevant experience</h1>
      <p className="text-lg sm:text-2xl font-myText text-white sm:text-myOcean font-semibold sm:font-normal">
        3+ years experience in brand management, content creation, data analysis
      </p>
    </div>
  ),
  (
    <div>
      <h1 className="mb-1 sm:mb-3 text-2xl sm:text-4xl font-myHeader text-myBlue">Competences</h1>
      <p className="text-lg sm:text-2xl font-myText text-white sm:text-myOcean font-semibold"> Frontend webdevelopment </p>
         <p className="hidden sm:block text-lg sm:text-2xl font-myText text-white sm:text-myOcean">
          HTML, (Tailwind) CSS, JavaScript, <sm:br /> React + Vite
          </p>
          <h1 className="mb-1 sm:mb-3 text-2xl sm:text-4xl font-myHeader text-myBlue pt-3 sm:pt-6">Interests</h1>
         <p className="text-lg sm:text-2xl font-myText text-white sm:text-myOcean font-semibold "> Backend webdevelopment </p>
         <p className="hidden sm:block text-lg sm:text-2xl font-myText text-white sm:text-myOcean">
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
    <div className="flex items-center justify-between sm:bg-gray-50 sm:rounded-lg sm:shadow-lg px-2 sm:px-6 h-70 sm:h-86 w-full">
   
      <button
        onClick={handlePrev}
        className="px-3 sm:px-4 py-2 bg-myOcean text-white rounded hover:bg-myDark active:scale-110 sm:active:scale-100 cursor-pointer"
      >
        <FaArrowLeft />
      </button>

      <div className="text-center sm:px-6">
        {slides[index]}
      </div>
   
      <button
        onClick={handleNext}
        className="px-3 sm:px-4 py-2 bg-myOcean text-white rounded hover:bg-myDark active:scale-110 sm:active:scale-100 cursor-pointer"
      >
    <FaArrowRight />
    </button>
    </div>

  );
};

export default TextCarousel;
