import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "IIT Kharagpur",
    description:
      "Currently a Second Year Undergraduate, pursuing my Dual Degree of the Department of Civil Engineering",
    link: "Learn More",
  },
  {
    name: "Narayana Junior College",
    description:
      "Passed my CBSE Class XII Board Examinations.",
    link: "Learn More",
  },
  {
    name: "Delhi Public School",
    description:
      "Passed my CBSE Class X Board Examinations.",
    link: "Learn More",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto border-b">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className=" h2 text-accent mb-6">My Education.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I am currently a student of IIT
              Kharagpur.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 "
          >
            <div>
              {services.map((service, index) => {
                return (
                  <div
                    key={index}
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {service.name}
                      </h4>
                      <p className="font-secondary leading-tight ">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight></BsArrowUpRight>
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {service.link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
