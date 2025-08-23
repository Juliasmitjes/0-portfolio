import TextCarousel from '../components/Carousel.jsx';

const Resume = () => {
  return (
  <div className="sm:pt-10 flex flex-col items-center">
    <TextCarousel />
     <a
        href={`${import.meta.env.BASE_URL}ResumeJuliaSmitjes.pdf`}
        download
        className="block w-full text-center sm:w-auto md:inline-flex items-center font-myText sm:mt-10 px-4 py-2 bg-myBlue text-white sm:rounded-lg text-lg cursor-pointer font-bold hover:bg-myDark active:scale-110 sm:active:scale-100"
      >
      Download resume
      </a>
</div>
  );
};

export default Resume;