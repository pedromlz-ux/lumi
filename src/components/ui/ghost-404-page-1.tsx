import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { FlowButton } from "@/components/ui/flow-button";

const containerVariants = {
  hidden: { 
    opacity: 0,
    y: 30
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const numberVariants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction * 40,
    y: 15,
    rotate: direction * 5
  }),
  visible: {
    opacity: 0.7,
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.8
    }
  }
};

const mascotVariants = {
  hidden: { 
    scale: 0.8,
    opacity: 0,
    y: 15,
    rotate: -5
  },
  visible: { 
    scale: 1,
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.6
    }
  },
  hover: {
    scale: 1.1,
    y: -10,
    transition: {
      duration: 0.8
    }
  },
  floating: {
    y: [-5, 5],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  }
};

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9F9FB] px-4 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div 
          className="text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-8 md:mb-12">
            <motion.span 
              className="text-[80px] md:text-[140px] font-black text-[#1A1A2E] opacity-10 font-inter select-none"
              variants={numberVariants}
              custom={-1}
            >
              4
            </motion.span>
            <motion.div
              variants={mascotVariants}
              whileHover="hover"
              animate={["visible", "floating"]}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#611CFC]/10 blur-3xl rounded-full -z-10" />
              <img
                src="/lumia-sentada.png"
                alt="Lumia Mascote"
                className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] object-contain select-none filter drop-shadow-2xl"
                draggable="false"
              />
            </motion.div>
            <motion.span 
              className="text-[80px] md:text-[140px] font-black text-[#1A1A2E] opacity-10 font-inter select-none"
              variants={numberVariants}
              custom={1}
            >
              4
            </motion.span>
          </div>
          
          <motion.h1 
            className="text-3xl md:text-5xl font-black text-[#1A1A2E] mb-4 md:mb-6 tracking-tight font-inter"
            variants={itemVariants}
          >
            Opa! Me perdi um pouquinho...
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-[#6B6B78] mb-8 md:mb-12 max-w-md mx-auto leading-relaxed font-inter"
            variants={itemVariants}
          >
            Parece que eu estava orquestrando tantos fluxos que acabei vindo parar aqui. Vamos voltar para casa?
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center"
          >
            <Link to="/">
              <FlowButton text={ "Voltar ao Hub" } />
            </Link>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
