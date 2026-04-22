"use client";
import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: { text: string; image: string; name: string; role: string }[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  className="p-6 sm:p-8 rounded-3xl border shadow-lg w-[85vw] sm:w-full sm:max-w-xs bg-white/5 backdrop-blur-md border-white/10 text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20 group" 
                  key={i}
                >
                  <div className="text-sm sm:text-base font-medium leading-relaxed italic opacity-90 group-hover:opacity-100 transition-opacity">
                    &ldquo;{text}&rdquo;
                  </div>
                  <div className="flex items-center gap-3 mt-6">
                    <img
                      width={44}
                      height={44}
                      src={image}
                      alt={name}
                      className="h-11 w-11 rounded-full border-2 border-white/20 object-cover shadow-sm transition-transform group-hover:scale-105"
                    />
                    <div className="flex flex-col">
                      <div className="font-bold tracking-tight leading-5 text-[#4ECDC4]">{name}</div>
                      <div className="text-xs leading-5 opacity-60 tracking-tight font-medium uppercase">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
