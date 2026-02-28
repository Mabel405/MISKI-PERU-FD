"use client"
import { motion } from "framer-motion";

export const SmokeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#12100e]"> 
      {/* Luz principal: Tono Arena/Ocre */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 40, 0],
          y: [0, 60, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-15%] left-[-10%] w-[900px] h-[900px] bg-[#d6ad60]/15 rounded-full blur-[140px]"
      />
      
      {/* Luz secundaria: Tono Tierra profunda */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -60, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#5c4033]/20 rounded-full blur-[160px]"
      />
    </div>
  );
};