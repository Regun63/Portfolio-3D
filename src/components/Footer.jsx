import React from 'react'

const Footer=()=> {
  return (
    <footer className='my-20 sm:px-10 pt-7 pb-3 border-t border-white/20 flex justify-between items-center flex-wrap gap-5'>
        <div className="text-white/70 flex gap-2">
        <p className=''>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <div className="w-12 h-12 rounded-full flex justify-center items-center bg-black/50 border border-white/30">
          <img src="src/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </div>
        <div className="w-12 h-12 rounded-full flex justify-center items-center bg-black/50 border border-white/30">
          <img src="src/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </div>
        <div className="w-12 h-12 rounded-full flex justify-center items-center bg-black/50 border border-white/30">
          <img src="src/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </div>
      </div>

      <p className="text-white/60">© 2024 Adrian Hajdin. All rights reserved.</p>
    
  

    </footer>
  )
}

export default Footer
