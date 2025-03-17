import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../threeComponents/HackerRoom";
import CanvasLoader from '../threeComponents/CanvasLoader';
import { Leva } from 'leva';
import { useMediaQuery } from 'react-responsive';
import ReactLogo from "../threeComponents/ReactLogo";
import Threejslogo from "../threeComponents/Threejslogo";
import HeroCamera from "./HeroCamera";
import Astronaut from '../threeComponents/Astronaut';
import Button from './Button';

const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <section className="min-h-screen flex flex-col relative w-full">
            {/* Content above the button */}
            <div className="w-full flex flex-col sm:mt-36 mt-20 gap-3 sm:px-10 px-5">
                <center className="text-white/78 sm:text-2xl text-lg">
                    Hello this is Sushmita. Welcome to my 3D website
                    <span className="animate-wave text-2xl">&#128075;</span>
                </center>
                <p className="bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent text-center text-xl sm:text-2xl md:text-3xl xl:text-4xl font-generalsans font-black">
                    Building products and Brands
                </p>
            </div>

            {/* 3D Canvas */}
            <div className="absolute w-full h-full inset-0">
                <Leva />
                <Canvas className="h-full w-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 3, 5]} />
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom position={[-0.2, -1.4, -9]} rotation={[0, 0, 0]} scale={isMobile ? 0.5 : [0.76, 0.91, 0.5]} />
                        </HeroCamera>
                        <ReactLogo position={isMobile ? [-3, 4, -15] : [-8, 5, -15]} scale={isMobile ? 0.3 : 0.5} />
                        <Threejslogo scale={isMobile ? 0.015 : 0.03} position={isMobile ? [4, 5.0, -18.1] : [8.6, 4.6, -18.1]} rotation={[-4.4, 5.2, -8.8]} />
                        <Astronaut scale={isMobile ? 2.6 : 3.4} position={isMobile ? [0, -6, -18] : [0, -10, -18]} rotation={[-5, -9.7, -3]} />
                        <ambientLight intensity={0.6} />
                        <directionalLight position={[5, 10, 5]} intensity={1} />
                        <pointLight position={[0, 5, 0]} intensity={2} />
                    </Suspense>
                </Canvas>
            </div>

            {/* Button at the bottom */}
            <a className="relative w-full flex justify-center mt-auto pb-10" href='#About'>
                <Button 
                    name="Let's work together" 
                    isBeam={true} 
                    containerClass="w-full max-w-xs sm:max-w-md lg:max-w-lg px-6 py-3 text-lg sm:text-xl"
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                />
            </a>
        </section>
    );
};

export default Hero;
