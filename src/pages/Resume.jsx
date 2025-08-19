

const Resume = () => {
  return (
   <>
    

    
      
    
    
    
   


    
    <div className="flex flex-row bg-white py-20 text-center w-screen">
      <div className="flex flex-col justify-center w-1/2 pl-20">
        <h1 className="mb-3 text-4xl font-myHeader text-myBlue"> Education </h1>
        <p className="text-2xl font-myText text-myOcean"> MSc with econometrics 
          <br />
          Utrecht University
          <br />
          Awarded Cum Laude
        </p>
  
        <h1 className="mt-10 mb-3 text-4xl font-myHeader text-myBlue"> Relevant experience </h1>
        <p className="text-2xl font-myText text-myOcean"> 3+ years web design 
          <br />
          Programming training
        </p>


      </div> 
      <div className="flex flex-col justify-center w-1/2 pr-20">
        <h1 className="mb-3 text-4xl font-myHeader text-myBlue"> Skills and interest </h1>
        <p className="text-2xl font-myText text-myOcean font-semibold"> Frontend webdevelopment 
        </p>
         <p className="text-2xl font-myText text-myOcean">
          HTML, (Taiwlind) CSS, JavaScript, <br /> React + Vite
          </p>
         <p className="text-2xl font-myText text-myOcean font-semibold pt-3"> Frontend webdevelopment     
          Node.js, Express.js, Git, PostgreSQL
        </p>
      </div> 
    </div>

     </>
  );
};

export default Resume;