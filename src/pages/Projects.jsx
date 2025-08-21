import Weather from "../components/Weather";
import { Link } from 'react-router-dom';


const navLinks = [
  { name: 'Memory', href: '/memory' },
  { name: 'Rps', href: '/rps' },
  { name: 'Tictactoe', href: '/tictactoe' },
]

const Projects = () => (
  <div className="min-h-screen bg-myWarm py-10">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-center text-4xl font-myHeader text-myBlue mb-8">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
   
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center">
            <img
              src="/images/arrow.png"
              alt="arrow"
              className="w-28 h-auto"
            />
            <p className="ml-2 mb-10 text-2xl font-myText text-myOcean">
              Curious about today's <br />
              weather?
            </p>
          </div>
          <Weather />
        </div>

   
    <div className="flex flex-col items-start">
        <div className="flex justify-around items-end w-full h-76 gap-8">
          <Link to="/memory">
            <img
              src="/images/memory.png"
              alt="Memory"
              className="w-40 cursor-pointer translate-y-6 transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-75"
            />
          </Link>
          <a href="/rps">
            <img
              src="/images/rps.png"
              alt="Rock paper scissors"
              className="w-40 cursor-pointer transition-transform mr-4 duration-300 ease-in-out hover:scale-110"
            />
          </a>
          <a href="/tictactoe">
            <img
              src="/images/tictactoe.png"
              alt="Tic tac toe"
              className="w-40 cursor-pointer translate-y-20 mr-10 transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </a>
        </div>

        <div className="flex items-center mt-25 ml-7">
          <p className="text-2xl font-myText text-myOcean mt-25 pl-7">
            Or maybe you'd rather play a game?
          </p>
          <img 
            src="/images/arrow2.png" 
            alt="arrow" 
            className="w-28 h-auto rotate-16" />
        </div>
       </div>
      </div>
    </div>
  </div>
);

export default Projects;