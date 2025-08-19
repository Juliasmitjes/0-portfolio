import TextCarousel from '../components/Carousel.jsx';

const Resume = () => {
  return (
  <div className="flex flex-col items-center">
    <TextCarousel />
     <a
        href="/path/to/resume.pdf"
        download
        className="md:inline-flex items-center font-myText px-4 py-2 bg-myBlue text-white rounded-lg text-lg cursor-pointer font-bold hover:bg-myDark mt-8"
      >
      Download resume
      </a>
</div>
  );
};

export default Resume;