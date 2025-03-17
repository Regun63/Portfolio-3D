import React, { useState,Suspense } from "react"; 
import { useGSAP } from "@gsap/react";
import { myProjects } from "../constants/index";
import gsap from "gsap";
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import CanvasLoader from '../threeComponents/CanvasLoader';
import DemoComputer from '../threeComponents/DemoComputer';

const Projects = () => {
    const projectCount = myProjects.length;
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    let curr = myProjects[selectedProjectIndex];

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === "previous") {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    // Smooth Animation on Text Change
    useGSAP(() => {
        gsap.fromTo(
            ".animatedText",
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.inOut" }
        );
    }, [selectedProjectIndex]);

    return (
        <section className="my-20 sm:px-10 px-5" id="Projects">
            <p className="sm:text-4xl text-3xl font-semibold text-white">
                Project Section
            </p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 w-full gap-5">
                
                {/* Project Card */}
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-gray-500 bg-gray-900/60 rounded-lg">
                    
                    {/* Project Image (Spotlight) */}
                    <div className="w-full h-80 rounded-xl overflow-hidden">
                        <img
                            src={curr.spotlight}
                            alt="spotlight"
                            className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Project Logo */}
                    <div className="p-3 backdrop-filter backdrop-blur-xl w-fit rounded-xl shadow-lg" style={curr.logoStyle}>
                        <img src={curr.logo} alt="logo1" className="h-10 w-10 shadow-sm" />
                    </div>

                    {/* Project Details */}
                    <div className="flex flex-col gap-5 text-white my-5">
                        <p className="text-2xl font-semibold animatedText">{curr.title}</p>
                        <p className="text-[#afb0b6] text-base font-generalsans">{curr.desc}</p>
                        <p className="text-[#afb0b6] text-base font-generalsans">{curr.subdesc}</p>
                    </div>

                    {/* Tech Stack Icons */}
                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {curr.tags.map((tag, index) => (
                                <div key={index} className="w-10 h-10 rounded-md p-2 bg-white/10 backdrop-filter backdrop-blur-lg flex justify-center items-center shadow-md">
                                    <img src={tag.path} alt={tag.name} />
                                </div>
                            ))}
                        </div>

                        {/* Live Site Link */}
                        <a
                            className="flex items-center gap-2 cursor-pointer text-white/80 hover:text-teal-400 transition-all"
                            href={curr.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p>Check Live Site</p>
                            <img src="/src/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                        </a>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between items-center mt-7">
                        <button
                            className="w-12 h-12 p-3 cursor-pointer active:scale-90 transition-all rounded-full bg-gray-800 hover:bg-teal-600 shadow-lg flex justify-center items-center"
                            onClick={() => handleNavigation("previous")}
                        >
                            <img src="/src/assets/left-arrow.png" alt="left arrow" className="w-5 h-5" />
                        </button>

                        <button
                            className="w-12 h-12 p-3 cursor-pointer active:scale-90 transition-all rounded-full bg-gray-800 hover:bg-teal-600 shadow-lg flex justify-center items-center"
                            onClick={() => handleNavigation("next")}
                        >
                            <img src="/src/assets/right-arrow.png" alt="right arrow" className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                  <Canvas>
                    <ambientLight intensity={Math.PI} />
                    <directionalLight position={[10, 10, 5]} />
                    <Center>
                      <Suspense fallback={<CanvasLoader />}>
                        <group scale={1.8} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                          <DemoComputer texture={curr.texture} />
                        </group>
                      </Suspense>
                    </Center>
                    <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                  </Canvas>
                </div>
            </div>
        </section>
    );
};

export default Projects;
