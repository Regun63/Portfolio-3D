import React from 'react' 

import {clientReviews} from '../constants/index.js'

const Client=()=> {
  return (
     <section className='my-20 sm:px-10 px-5'  id='Reviews'>
        <div>
            <h3 className='sm:text-4xl text-3xl font-semibold text-white'>Reviews from my Clients</h3>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5 mt-12'>
            {clientReviews.map((item)=>(
                <div key={item.id} className='rounded-lg md:p-10 p-5 col-span-1 bg-white/10 bg-opacity-50'>
                   <div >
                   <div className='flex lg:flex-row flex-col justify-between lg:items-center items-start gap-5 mt-3'>
                    <div className='flex gap-3'>
                        <img src={item.img} alt='reviewer image' className='w-12 h-12 rounded-full'/>
                        <div className='flex flex-col'>
                            <p className='text-white/80 text-lg font-semibold'>
                                {item.name}
                            </p>
                            <p className='text-white/56 md:text-md text-sm'>
                                {item.position}
                            </p>
                        </div>
                    </div>
                   </div>
                    <p className='text-white font-light py-3'>
                        {item.review}
                    </p>
                    <div className='flex justify-end self-end gap-3 items-center'>
                        {Array.from({length:5}).map((_,index)=>(
                            <img key={index} src='/src/assets/star.png' alt='star' className='w-4 h-4'/>
                        ))}
                   </div>
                   </div>
                  
                </div>
            ))}
        </div>

     </section>
  )
}

export default Client
