import React from 'react';

const Button = ({ name, containerClass,isBeam=false, onClick }) => {
  return (
    <button 
      className={`px-4 py-0 cursor-pointer bg-black/45 text-white font-semibold rounded-lg hover:bg-white/40 transition active:scale-95 ${containerClass}`} 
      onClick={onClick}
    >
            {isBeam &&
               ( 
                <span className='relative  flex sm:left-6 top-5 lg:left-10 xl:left-20 size-3'>
               <span className='btn-ping'/>
                <span className='btn-ping_dot'/>
               </span>)}
        
      {name}
    </button>
  );
};

export default Button;
