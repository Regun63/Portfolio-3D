import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { workExperiences } from "../constants/index";
import {OrbitControls} from '@react-three/drei'
import CanvasLoader from '../threeComponents/CanvasLoader'
import Developer from '../threeComponents/Developer'
const Experience = () => {
  return (
    <section className="my-20 sm:px-10">
      <div className="w-full text-white/90">
        <h3 className="sm:text-4xl text-3xl font-semibold text-white">
          My Work Experiences
        </h3>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12">
          <div className="col-span-1 rounded-lg bg-black/40 border border-black/40">
            <Canvas>
                <ambientLight intensity={7}/>
                <spotLight position={[10,10,10]} angle={0.15} penumbra={1}/>
                <directionalLight position={[10,10,10]} intensity={1}/>
                <OrbitControls enableZoom={false} enablePan maxPolarAngle={Math.PI/2}/>
                <Suspense fallback={<CanvasLoader/>}>
                    <Developer position={[0,-3,0]} scale={3} rotation={[0,0,0]}  animationName='Hi' />
                </Suspense>
            </Canvas>
          </div>

          <div className="col-span-2 rounded-lg bg-black/30 border border-black/40">
            <div className="py-5 px-2.5 sm:px-5 sm:py-10">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[auto_1fr] items-start gap-5  transition-all ease-in-out duration-500 cursor-pointer hover:bg-black/70 rounded-lg sm:px-5 px-2.5 group"
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="rounded-3xl w-16 h-16 p-2 bg-black/60">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="flex-1 w-0.5 mt-4 h-full transition-all ease-in-out duration-500 bg-black/30 group-hover:bg-white/30 group-last:hidden" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white/80">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
