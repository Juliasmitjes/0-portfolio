import TextCarousel from '../components/Carousel.jsx';

const Resume = () => {
  return (
   <>
   <TextCarousel />
   <div className="flex justify-center my-16">
    <button className="text-2xl font-myText text-myOcean hover:text-myBlue cursor-pointer">
      Download resume
    </button>
  </div>


  
   </>
  );
};

export default Resume;