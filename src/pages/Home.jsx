'use client' 

import Resume from './Resume.jsx'; 

const Home = () => {
  return (
    <div className="grid grid-rows-2 place-items-center justify-center bg-myWarm pt-16 mx-4">
      <h1 className="text-[80px] font-myHeader text-myBlue">
        Hi! I'm Julia Smitjes
      </h1>
      <p className="text-3xl font-myText text-myOcean pb-10">  
        Running on Wi-Fi, espresso, and curiosity.
      </p>

    <div className="relative inline-block">
        <img className="h-100 object-scale-down" src="/images/JuliaSmitjesImage.jpeg" alt="Julia Smitjes" />
        <div className="absolute bottom-0 -left-15 w-36 h-32">
          <img src="/images/closedRound.png" alt="closed round"
              className="absolute top-6 left-6 z-0" />
          <img src="/images/openRound.png" alt="open round"
            className="absolute top-0 left-0 z-10 rotate-[20deg]" />
        </div>
    </div>
    <div className="grid grid-rows-2 place-items-center justify-center bg-myWarm pt-15 mx-4">
      <h1 className="text-4xl font-myHeader text-myBlue">
        A bit about me
      </h1>
      <p className="text-2xl font-myText text-myOcean pb-20 max-w-lg text-center">
        I light up around good ideas and great people. From debugging code to designing systems, I’m all about mixing tech with taste.
      </p>
      </div>
   <Resume />
  </div>    
  )
}

export default Home