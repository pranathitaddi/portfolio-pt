import React from "react";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <div className="section" id="contacts">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div 
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1">
            <div>
              <h4 className="text-x1 uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                {" "}
                Let's work <br></br> Together.
              </h2>
            </div>
          </motion.div>
          <motion.form 
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 border rounded-2×1 flex flex-col gap-y-6 pb-24 p-6 items-start">
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Email"
            ></input>
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Name"
            ></input>
            <textarea
              className="bg-transparent resize-none mb-12 border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Message"
            ></textarea>
            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
