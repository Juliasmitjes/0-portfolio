import Weather from "../components/Weather";

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
              alt="Pijl naar beneden"
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
        <div className="flex justify-around items-end w-full h-76">
          <a href="#memory">
            <img
              src="/images/closedRound.png"
              alt="Memory"
              className="w-40 cursor-pointer translate-y-6 transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </a>
          <a href="#rps">
            <img
              src="/images/closedRound.png"
              alt="Rock paper scissors"
              className="w-40 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </a>
          <a href="#tictactoe">
            <img
              src="/images/closedRound.png"
              alt="Tic tac toe"
              className="w-40 cursor-pointer translate-y-20 transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </a>
        </div>

        <p className="mt-25 pl-2 text-2xl font-myText text-myOcean text-left">
          Or maybe you'd rather play a game?
        </p>
      </div>

      </div>
    </div>
  </div>
);

export default Projects;