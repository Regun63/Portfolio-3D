import React, { useState } from "react";
import Globe from 'react-globe.gl';
import Button from './Button';
const About = () => {
    const [copydata,setcopydata]=useState(false);
        const handleCopy=()=>{
            navigator.clipboard.writeText('biswassushmita947@gmail.com');
            setcopydata(true);
            setTimeout(()=>{
                setcopydata(false);
            },500);
        };

    
  return (
    <section className="my-20 sm:px-10 px-5" id="About">
       <p className="sm:text-4xl text-3xl font-semibold text-white">
                About Me
            </p>
      <div className=" mt-10 grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Image Container */}
        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full border border-black/50 bg-black/50 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="/src/assets/grid.png"
              alt="About section image"
              className="w-full sm:h-[276px] h-auto object-cover rounded-md"
            />
            <div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">
                Hi, I am Sushmita Biswas.
              </p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                Welcome to my website.This shows my all over interest and skills
                over frontend and backend. I have used Three.js to make this
                website more 3D interactive and responsive
              </p>
            </div>
          </div>
        </div>  


        <div className="col-span-1 xl:row-span-3">
            <div className="w-full h-full border border-black/50 bg-black/50 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
             <img src="/src/assets/grid2.png" alt="" className="w-full sm:h-[276px] h-fit object-cover rounded-md"/>
             <div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">
                Tech Stack
              </p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                Specialized in FrontEnd -Javascript, React,Tailwind CSS,ThreeJs and for
                BackEnd- NodeJs,ExpressJs ecoSystems. 
              </p>
            </div>
            </div>
        </div>

        <div className="col-span-1 lg:row-span-3 xl:row-span-4">
            <div className="w-full h-full border border-black/50 bg-black/50 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
             <div className="w-full rounded-3xl sm:h-[326px] h-fit flex justify-center items-center">
                <Globe height={320} width={320} backgroundColor="rgba(0,0,0,0)" backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl='//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
                bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
                labelsData={[{
                    lat:22.634950,
                    lng:88.413581,
                    color:'rgb(255,0,0)',
                    text:'Here I am',
                    size:1,
                }]}
          />
             </div>
             <div>
             <p className="text-xl font-semibold mb-2 text-white font-generalsans">
                I work remotely across different timezones
              </p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                I'm based in India, with remote work available. 
              </p>
              <Button isBeam containerClass='md:w-full w-[210px]  pb-3 mt-10' name='Contact Me'/>
             </div>
            </div>
        </div>

        <div className="xl:col-span-2 col-span-1 xl:row-span-3">
          <div className="w-full h-full border border-black/50 bg-black/50 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="/src/assets/grid3.png"
              alt="About section image"
              className="w-full sm:h-[266px] h-fit object-contain "
            />
            <div className="text-center">
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">
                My passion for Tech World and Coding.
              </p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                I love Building crazy websites and explore new features and Technology.
              </p>
            </div>
          </div>
        </div> 

        <div className="col-span-1 lg:row-span-3 xl:row-span-2">
          <div className="w-full h-full border border-black/50 bg-black/50 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="/src/assets/grid4.png"
              alt="About section image"
              className="w-full sm:h-[276px] h-fit object-cover sm:object-top md:h-[196px] "
            />
            <div className="space-y-2 text-center">
              
              <p className="text-[#afb0b6] text-base font-generalsans">
                contact me
              </p>
              <div className="cursor-pointer flex justify-center items-center gap-2 " onClick={handleCopy}>
              <img 
                  src={copydata ? '/src/assets/tick.svg' : '/src/assets/copy.svg'} 
                    alt="Copy Icon" 
                    className="w-5 h-5" 
                    />
                    <p className="text-[#afb0b6] text-base font-generalsan md:text-xl sm:text-sm" >biswassushmita947@gmail.com</p>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default About;
