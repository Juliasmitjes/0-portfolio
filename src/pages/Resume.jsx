import TextCarousel from '../components/Carousel.jsx';

const Resume = () => {
  return (
  <div className="flex flex-col items-center">
    <TextCarousel />
     <a
        href="/path/to/resume.pdf"
        download
        className="text-2xl pt-13 font-myText text-myOcean hover:text-myBlue cursor-pointer"
      >
      Download resume
      </a>
</div>
  );
};

export default Resume;