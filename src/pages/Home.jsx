'use client' 

import { useOutletContext } from 'react-router-dom';
import Resume from './Resume.jsx'; 
import Projects from './Projects.jsx';

const Home = () => {
  const { setShowContactForm } = useOutletContext();

  return (
    <div id="aboutme" className="bg-myOcean scroll-mt-0 overflow-x-hidden">
      <div className="bg-myWarm pt-6 mx-0 sm:pt-18 sm:mx-6">

      <div className="flex flex-col items-center">
         <h1 className="font-myHeader self-start sm:self-center ml-2 sm:ml-0 sm:text-center text-myBlue text-[50px] sm:text-[80px] ">
        Hi! I'm Julia Smitjes
      </h1>
      <p className="text-xl self-start ml-2 sm:self-center sm:ml-0 sm:text-3xl font-myText font-bold text-myOcean pt-2 pb-6 sm:pb-20">  
        Running on Wi-Fi, espresso, and curiosity.
      </p>
      <img className="h-full sm:h-100 object-scale-down sm:rounded-lg" src="images/JuliaSmitjesImage.jpeg" alt="Julia Smitjes" />
      </div>   
        <div className="flex flex-col sm:place-items-center sm:justify-center bg-myWarm pt-0 sm:pt-15 ml-2 sm:mx-4">
          <h1 className="hidden sm:block text-4xl font-myHeader text-myBlue pb-8">
            A bit about me
          </h1>
          <p className="hidden sm:block text-2xl font-bold font-myText text-myOcean pb-25 max-w-lg text-center">
            I light up around good ideas and great people. From debugging code to designing systems, I’m all about mixing tech with taste.
          </p>
          </div>
          <div id="resume-section" className="scroll-mt-25 bg-myOcean pb-12 sm:pt-4 sm:py-10">
            <div className="max-w-2xl mx-auto">
              <Resume />
            </div>
          </div>        
        <div id="projects-section" >
          <Projects />
        </div>
          <div>
            <div className="flex flex-col sm:place-items-center justify-center bg-myOcean pt-10 sm:pt-15">
            <h1 className="text-2xl sm:text-4xl pl-3 sm:pl-0 font-myHeader text-myBlue pb-3 sm:pb-8">
              Contact
            </h1>
            <p className="text-xl sm:text-2xl font-myText pl-3 sm:pl-0 text-white font-bold pb-8 max-w-lg sm:text-center">
              Let’s talk. I’d love to hear from you.
            </p>
            <button
                type="button"
                onClick={() => setShowContactForm(true)}
                className="block w-full sm:w-auto md:inline-flex items-center font-myText px-4 py-2 bg-myBlue text-white rounded-lg text-lg cursor-pointer font-bold hover:bg-myDark focus:outline-none focus:ring-2 focus:ring-blue-300 mb-6"
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