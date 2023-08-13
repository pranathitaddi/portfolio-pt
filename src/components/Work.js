import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className='section' id='skills'>
      <div className='container mx-auto mt-5'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div variants={fadeIn('right',0.3)} initial='hidden' whileInView='show' viewport={{once:false,amount:0.7}} className='flex-1 flex flex-col gap-y-32 mb-10 lg:mb-0'>
            <div>
              <h2 className='h2 leading-tight'>My Skillset</h2>
              <p className="max-w-sm mb-16">I am a passionate student trying to pursue and gain more and
                more skills towards web development everyday.</p>
              <button className='btn btn-sm'>View All Skills</button>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-lg'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 trasition-all duration-500 z-50'>
                <span className='text-gradient'>Front-End Development</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 trasition-all duration-700 z-50'>
                <span className='text-3x1 text-white' >HTML, CSS, JavaScript, ReactJS</span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('left',0.3)} initial='hidden' whileInView='show' viewport={{once:false,amount:0.7}} className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-lg'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt=''/>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 trasition-all duration-500 z-50'>
                <span className='text-gradient'>Back-End Development</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 trasition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Django, NodeJS</span>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-lg'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt=''/>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 trasition-all duration-500 z-50'>
                <span className='text-gradient'>Other APIs</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 trasition-all duration-700 z-50'>
                <span className='text-3x1 text-white'></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;