import Weather from "../components/Weather";
import { Link } from 'react-router-dom';


const navLinks = [
  { name: 'Memory', href: '/memory' },
  { name: 'Rps', href: '/rps' },
  { name: 'Tictactoe', href: '/tictactoe' },
]

const Projects = () => (
  <div className="min-h-screen bg-myWarm pt-26 pb-20">
    <div className="max-w-6xl mx-auto px-6">
      <h1 className="text-center text-4xl font-myHeader text-myBlue mb-12">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col items-center text-center space-y-6">
          <p className="font-bold text-2xl font-myText text-myOcean">
            Curious about today's weather?
          </p>
          <Weather />
        </div>

        <div className="flex flex-col items-center space-y-8">
          <p className="font-bold text-2xl font-myText text-myOcean">
            Or maybe you'd rather play a game?
          </p>

          




          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <Link to="/memory">
              <div className="h-90 flex flex-col p-4 bg-myOcean rounded-lg shadow-md cursor-pointer group">
                <div className="w-full text-center">
                  <span className="block text-white text-lg font-myHeader opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Memory
                  </span>
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <img
                    src="images/memory.png"
                    alt="Memory"
                    className="max-h-56 object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </Link>

           <Link to="/rps">
              <div className="h-90 flex flex-col p-4 bg-myOcean rounded-lg shadow-md cursor-pointer group">
                <div className="w-full text-center">
                  <span className="block text-white text-lg font-myHeader opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Rock Paper Scissors
                  </span>
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <img
                    src="images/rps.png"
                    alt="Rock Paper Scissors"
                    className="max-h-56 object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </Link>

            <Link to="/tictactoe">
              <div className="h-90 flex flex-col p-4 bg-myOcean rounded-lg shadow-md cursor-pointer group">
                <div className="w-full text-center">
                  <span className="block text-white text-lg font-myHeader opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Tic Tac Toe
                  </span>
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <img
                    src="images/tictactoe.png"
                    alt="Tic Tac Toe"
                    className="max-h-56 object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
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
