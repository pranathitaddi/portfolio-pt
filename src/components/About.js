import React from "react";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";


const About = () => {

  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        {/* <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once:false, amount: 0.3}}
          className="flex-1 bg-about bg-no-repeat h-[640px] mix-blend-lighten bg-top"></motion.div>
        </div> */}
        {/* Image not on the right */}
        <div className="flex-1">
          <h2 className="h2 text-accent">About me</h2>
          {/* <h3 className="h3 mb-4">STUDENT</h3> */}
          <p className="mb-6">I am a student of IIT Kharagpur, deeply passionate about technology and quite interested in civil engineering. I am an amateur web developer. I also sing and make art in my free time. I am also an avid astrophile.</p>
          <div className="flex gap-x-6 lg:gap-x-10 mb-12">
            <div>
              <div className="text-[40px] font-tertiary text-gradient mb-2">
                {inView ? <CountUp start={0} end={2} duration={3}></CountUp> : null}
              </div>
              <div className="font-primary text-sm tracking-[2px]">
                Months of <br />
                Experience
              </div>
            </div>
            <div>
              <div className="text-[40px] font-tertiary text-gradient mb-2">
                {inView ? <CountUp start={0} end={7} duration={3}></CountUp> : null}k+
              </div>
              <div className="font-primary text-sm tracking-[2px]">
                Projects <br />
                Taken
              </div>
            </div>
          </div>
          <div className="flex gap-x-8 items-center">
            <button className="btn btn-lg">Contact Me</button>
            <a href='#' className="text-gradient btn-link">My Portfolio</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
