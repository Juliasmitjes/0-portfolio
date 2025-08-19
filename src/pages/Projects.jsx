import Weather from "../components/Weather";

const Projects = () => (
  <div className="min-h-screen bg-myWarm px-4 py-10">
    <h1 className="text-center text-4xl font-myHeader text-myBlue ">
      Projects
    </h1>

    <div className="pt-5 grid grid-cols-2 w-screen h-[60vh]">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center mb-4">
          <img
            src="/images/arrow.png"
            alt="Pijl naar beneden"
            className="w-28 h-auto"
          />
      <p className="ml-2 pb-13 text-2xl font-myText text-myOcean">
        Curious about today's <br />weather?
      </p>
    </div>

    <Weather />
  </div>

    <div className="flex items-center justify-center">
      <p className="text-xl">hadas</p>
    </div>
  </div>
</div>
);

export default Projects;