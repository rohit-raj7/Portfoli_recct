
import React from 'react';
import { assets } from '../assets/assets';
import { motion } from "framer-motion"

function About() {
  return (
    <motion.div 
    // initial={{ opacity:0 ,x:200  }}
    // transition={{ duration:1 }}
    // whileInView={{ opacity:1 ,x:0}}
    // viewport={{once:true }}

    initial={{ opacity: 0, x: 200 }}
    animate={{ opacity: [0, 0.5, 1], x: [200, 100, 0] }}
    exit={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    whileHover={{ scale: 1.05, }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 50, damping: 10 }}
    // viewport={{ once: true }}
    viewport={{ once: false, amount: 0.5 }}


     className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:mx-32 w-full overflow-hidden" id="About">
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-2 under font-light'>Our Brand</span></h1>
      <p className='text-gray-500 text-current mb-8'>Passionate About Properties, Dedicated to your Vision</p>
       <div className='flex flex-col md:flex-row items-center md:items-start
       md:gap-20'>
        <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 
        max-w-lg ' />
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
             <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl pr-28'>
                <div>
                    <p className='text-4xl font-medium text-gray-800 '> 10+</p>
                    <p>year of Excellence</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800 '> 14+</p>
                    <p>Project Completed</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800 '> 33+</p>
                    <p>Mn. sq. ft. Delivered</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800 '> 13+</p>
                    <p>Onging Project</p>
                </div>
             </div>
             <p className='my-10 max-w-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, culpa! Eligendi ut recusandae molestiae laudantium? Atque veniam vitae placeat expedita soluta? Minima, saepe.</p>
              <button className='bg-blue-600 px-8 py-2 rounded text-white'>Learn more</button>
        
        
        </div>
       </div>
   
    </motion.div>
  );
}

export default About;
