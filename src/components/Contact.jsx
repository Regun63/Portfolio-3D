import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
const Contact = () => {
 const formRef= useRef();
 const [loading,setLoading]=useState(false);
 const[formData,setFormData] =useState({
    name:'',
    message:'',
    email:''
  })

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit=async(event)=>{
    event.preventDefault();
    setLoading(true);
    try{
      emailjs.send('service_kfuiupc',
        'template_3rqr5uf',
        {
          from_name:formData.name,
          to_name:'Sushmita Biswas',
          from_email:formData.email,
          to_email:'biswassushmita947@gmail.com',
          message:formData.message
        },'tc7qCH9OwJD0GfDvj')
         setLoading(false)
         setFormData({
          name:'',
          message:'',
          email:''
         })
         alert('Your message has been successfully sent!')
    }
    catch(error){
      setLoading(false)

      setFormData({
        name:'',
        message:'',
        email:''
       })
      alert('Something went wrong!')
    }
    
  }
  
  return (
    <section className="my-20 sm:px-10 px-5" id="contact us">
      <h3 className="sm:text-4xl text-3xl font-semibold text-white">
        Contact Me
      </h3>
      <div className="flex items-center justify-center relative w-full min-h-screen">
   
        <div className="max-w-xl relative z-10 sm:px-10 bg-black/30 rounded-2xl px-5 mt-12">
          <h3 className="sm:text-4xl mt-12 text-3xl font-semibold text-white">Let's talk</h3>
          <p className="text-lg text-white/60 mt-3">
            Whether you’re looking to build a new website, improve your existing
            platform, or bring a unique project to life, I’m here to help.
          </p>
          <form className="flex flex-col mt-12 space-y-7" ref={formRef} onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="name" className="space-y-3 ">
              <span className=" text-lg text-white/90"> Enter Full name</span>
            
            <input type="text" name="name" id="name" placeholder="Sushmita Biswas" value={formData.name} onChange={handleChange} required className="w-full bg-zinc-700 px-5 py-2 min-h-14 rounded-lg placeholder:text-white/60 text-lg text-white/80 shadow-black-200 shadow-2xl focus:outline-none" />
            </label>

            <label htmlFor="email" className="space-y-3 ">
              <span className=" text-lg text-white/90"> Enter Email</span>
            
            <input type="email" name="email" id="email" placeholder="example@gmail.com" value={formData.email} onChange={handleChange} required className="w-full bg-zinc-700 px-5 py-2 min-h-14 rounded-lg placeholder:text-white/60 text-lg text-white/80 shadow-black-200 shadow-2xl focus:outline-none" />
            </label>

            <label htmlFor="message" className="space-y-3 ">
              <span className=" text-lg text-white/90"> Write your message</span>
            
            <textarea rows={6} name="message" id="message" placeholder="Hey there ! I wanna give you a job...." value={formData.message} onChange={handleChange} required className="w-full bg-zinc-700 px-5 py-2 min-h-14 rounded-lg placeholder:text-white/60 text-lg text-white/80 shadow-black-200 shadow-2xl focus:outline-none" />
            </label>

            <button type='submit' disabled={loading} className="bg-sky-300/70 px-5 py-2 mb-15 min-h-12 rounded-lg shadow-black-200 shadow-2xl flex justify-center items-center text-lg text-white gap-3">
              {loading? 'Sending...':'Send Message'}
              <img src="/src/assets/arrow-up.png" alt="arrow-up"  className="w-5 h-5 object-contain invert brightness-0"/>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
