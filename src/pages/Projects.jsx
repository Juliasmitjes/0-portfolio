import Weather from "../components/Weather";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-start bg-myWarm min-h-screen px-4 py-10">
      <h1 className="text-4xl font-myHeader text-myBlue mb-10 text-center">
        Projects
      </h1>

      <div className="flex flex-row w-full max-w-5xl h-[60vh]">
  
        <div className="flex-1 flex items-center justify-center">
          <Weather />
        </div>

   
        <div className="flex-1 flex items-center justify-center">
          <p className="text-xl">hadas</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;