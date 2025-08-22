import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  (
    <div>
      <h1 className="mb-3 text-4xl font-myHeader text-myBlue">Education</h1>
      <p className="text-2xl font-myText text-myOcean font-semibold">
        MSc International Management</p>
        <p className="text-2xl font-myText text-myOcean font-normal">
        strong focus on Econometrics
        <br />
        <br />
        Utrecht University  
        </p>
        <p className="text-2xl font-myText text-myOcean font-semibold">
        Awarded Cum Laude
        </p>
    </div>
  ),
  (
    <div>
      <h1 className="mb-3 text-4xl font-myHeader text-myBlue">Relevant experience</h1>
      <p className="text-2xl font-myText text-myOcean">
        3+ years experience in brand management, content creation, data analysis
      </p>
    </div>
  ),
  (
    <div>
      <h1 className="mb-3 text-4xl font-myHeader text-myBlue">Proficient</h1>
      <p className="text-2xl font-myText text-myOcean font-semibold"> Frontend webdevelopment </p>
         <p className="text-2xl font-myText text-myOcean">
          HTML, (Taiwlind) CSS, JavaScript, <br /> React + Vite
          </p>
          <h1 className="mb-3 text-4xl font-myHeader text-myBlue pt-6">Beginner</h1>
         <p className="text-2xl font-myText text-myOcean font-semibold "> Backend webdevelopment </p>
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
    <div className="flex items-center justify-between bg-gray-50 rounded-lg shadow-lg px-6 h-86 w-full">
   
      <button
        onClick={handlePrev}
        className="px-4 py-2 bg-myBlue text-white rounded hover:bg-myOcean cursor-pointer"
      >
        <FaArrowLeft />
      </button>


      <div className="text-center px-6">
        {slides[index]}
      </div>

   
      <button
        onClick={handleNext}
        className="px-4 py-2 bg-myBlue text-white rounded hover:bg-myOcean cursor-pointer"
      >
    <FaArrowRight />
    </button>
    </div>

  );
};

export default TextCarousel;
