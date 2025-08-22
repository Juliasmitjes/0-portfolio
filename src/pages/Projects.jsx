import Weather from "../components/Weather";
import { Link } from 'react-router-dom';


const navLinks = [
  { name: 'Memory', href: '/memory' },
  { name: 'Rps', href: '/rps' },
  { name: 'Tictactoe', href: '/tictactoe' },
]

const Projects = () => (
  <div className="bg-myWarm pt-10 sm:pt-26 pb-20">
    <div className="max-w-6xl mx-auto sm:px-6">
      <h1 className="text-center text-2xl sm:text-4xl font-myHeader text-myBlue mb-3 sm:mb-12">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        <div className="flex flex-col items-center text-center space-y-6">
          <p className="font-bold text-lg sm:text-2xl font-myText text-myOcean">
            Curious about today's weather?
          </p>
          <Weather />
        </div>

        <div className="flex flex-col items-center space-y-8">
          <p className="font-bold text-lg sm:text-2xl font-myText text-myOcean">
            Or maybe you'd rather play a game?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <Link to="/memory">
              <div className="sm:h-90 flex flex-col p-4 bg-myWarm rounded-lg shadow-md cursor-pointer group sm:transition-transform duration-300 ease-in-out sm:hover:scale-110 active:scale-110">
                <div className="w-full text-center">
                  <span className="block h-8 text-myOcean text-lg font-myHeader sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Memory
                  </span>
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <img
                    src="images/memory.png"
                    alt="Memory"
                    className="max-h-30 sm:max-h-56 object-contain transition-transform duration-300 ease-in-out group-hover:scale-120"
                  />
                </div>
              </div>
            </Link>

           <Link to="/rps">
              <div className="sm:h-90 flex flex-col p-4 bg-myWarm rounded-lg shadow-md cursor-pointer group sm:transition-transform duration-300 ease-in-out sm:hover:scale-110 active:scale-110">
                <div className="w-full text-center">
                  <span className="block h-8 text-myOcean text-lg font-myHeader sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Rock Paper Scissors
                  </span>
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <img
                    src="images/rps.png"
                    alt="Rock Paper Scissors"
                    className="max-h-30 sm:max-h-56 object-contain transition-transform duration-300 ease-in-out group-hover:scale-120"
                  />
                </div>
              </div>
            </Link>

            <Link to="/tictactoe">
              <div className="sm:h-90 flex flex-col p-4 bg-myWarm rounded-lg shadow-md cursor-pointer group sm:transition-transform duration-300 ease-in-out sm:hover:scale-110 active:scale-110">
                <div className="w-full text-center">
                  <span className="block h-8 text-myOcean text-lg font-myHeader sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Tic Tac Toe
                  </span>
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <img
                    src="images/tictactoe.png"
                    alt="Tic Tac Toe"
                    className="max-h-30 sm:max-h-56 object-contain transition-transform duration-300 ease-in-out group-hover:scale-120"
                  />
                </div>
              </div>
            </Link>

          </div>
        </div>  
      </div>
    </div>
  </div>
);

export default Projects;
