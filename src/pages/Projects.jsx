import Weather from "../components/Weather";

const Projects = () => {
  return (
    <div className="flex flex-col place-items-center justify-center bg-myWarm pt-15 mx-4">
      <h1 className="text-4xl font-myHeader text-myBlue pb-8">
        Projects
      </h1>
      <Weather /> 
    </div>
  )
}

export default Projects