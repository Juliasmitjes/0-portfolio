'use client' 

import { useOutletContext } from 'react-router-dom';
import Resume from './Resume.jsx'; 
import Projects from './Projects.jsx';

const Home = () => {
  const { setShowContactForm } = useOutletContext();

  return (
    <div id="aboutme" className="bg-myDark">
      <div className="bg-myWarm pt-16 mx-6">

      <div className="flex flex-col items-center">
         <h1 className="text-[80px] font-myHeader text-myBlue">
        Hi! I'm Julia Smitjes
      </h1>
      <p className="text-3xl font-myText text-myOcean pt-4 pb-20">  
        Running on Wi-Fi, espresso, and curiosity.
      </p>

    <div className="relative inline-block">
        <img className="h-100 object-scale-down rounded-lg " src="images/JuliaSmitjesImage.jpeg" alt="Julia Smitjes" />
        <div className="absolute bottom-0 -left-15 w-60 h-115">
          <img src="images/pen1.png" alt="blue"
              className="absolute top-6 left-6 z-0" />
        </div>
        <div className="absolute bottom-0 -right-10 w-60 h-38">
          <img src="images/pen2.png" alt="blue"
            className="absolute top-0 left-0 z-10 rotate-[20deg]" />
      </div>
    </div>
  </div>   
    <div className="flex flex-col place-items-center justify-center bg-myWarm pt-15 mx-4">
      <h1 className="text-4xl font-myHeader text-myBlue pb-8">
        A bit about me
      </h1>
      <p className="text-2xl font-myText text-myOcean pb-25 max-w-lg text-center">
        I light up around good ideas and great people. From debugging code to designing systems, I’m all about mixing tech with taste.
      </p>
      </div>
    <div className="flex flex-col items-center">
      <div id="resume-section" className="w-2xl h-96 mb-40">
        <Resume />
      </div>
    </div>
    
    <div id="projects-section" >
      <Projects />
    </div>
      <div>
        <div className="flex flex-col place-items-center justify-center bg-myWarm pt-20 mx-4">
        <h1 className="text-4xl font-myHeader text-myBlue pb-8">
          Contact
        </h1>
        <p className="text-2xl font-myText text-myOcean pb-8 max-w-lg text-center">
          Let’s talk. I’d love to hear from you.
        </p>
        <button
            type="button"
            onClick={() => setShowContactForm(true)}
            className="hidden md:inline-flex items-center font-myText px-4 py-2 bg-myBlue text-white rounded-lg text-lg cursor-pointer font-bold hover:bg-myDark focus:outline-none focus:ring-2 focus:ring-blue-300 mb-6"
          >
            Get in touch
       </button>
      </div>
    </div>
  </div>  
</div>
  )
}

export default Home