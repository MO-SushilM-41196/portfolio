import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Step 0: Damru (3 seconds)
    const timer1 = setTimeout(() => setStep(1), 3000);
    // Step 1: Finale (Starts after Step 0 exit, total duration ~8 seconds)
    const timer2 = setTimeout(() => onComplete(), 8000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-neutral-950 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Cinematic Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
              opacity: 0,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: [null, "-20%"],
              opacity: [0, 0.4, 0],
            }}
            transition={{ 
              duration: Math.random() * 4 + 3, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 2
            }}
            className="absolute w-1 h-1 bg-orange-400 rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* Surya / Sun Effect - Exactly one rotation over the full duration */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: 0, ease: "linear" }}
          className="relative w-[600px] h-[600px]"
        >
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent"
              style={{ transform: `translate(-50%, -50%) rotate(${i * 30}deg)` }}
            />
          ))}
        </motion.div>
        <div className="absolute w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px]" />
      </motion.div>

      <div className="relative w-full max-w-2xl h-[500px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="damru-v3"
              initial={{ scale: 0.2, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 1.5, opacity: 0, rotate: 45, filter: "blur(10px)" }}
              transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative"
            >
              {/* Cinematic Damru with Surya Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 3, repeat: 0, ease: "easeInOut" }}
                  className="w-48 h-48 bg-orange-500/20 rounded-full blur-2xl"
                />
              </div>

              <motion.div
                animate={{ 
                  rotate: [0, -15, 15, -15, 15, 0],
                  scale: [1, 1.03, 1]
                }}
                transition={{ repeat: 0, duration: 3, ease: "easeInOut" }}
              >
                <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_40px_rgba(249,115,22,0.5)]">
                  <defs>
                    <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFEDD5" />
                      <stop offset="40%" stopColor="#F97316" />
                      <stop offset="60%" stopColor="#EA580C" />
                      <stop offset="100%" stopColor="#9A3412" />
                    </linearGradient>
                  </defs>
                  <path d="M20 20H80L55 50L80 80H20L45 50L20 20Z" fill="#171717" stroke="url(#metalGrad)" strokeWidth="3" />
                  <ellipse cx="50" cy="20" rx="30" ry="10" fill="#262626" stroke="url(#metalGrad)" strokeWidth="2" />
                  <ellipse cx="50" cy="80" rx="30" ry="10" fill="#262626" stroke="url(#metalGrad)" strokeWidth="2" />
                  
                  {/* Vibrating Beads */}
                  <motion.g 
                    animate={{ rotate: [0, 45, -45, 45, -45, 0] }} 
                    transition={{ duration: 3, repeat: 0, ease: "easeInOut" }}
                  >
                    {/* Right side string */}
                    <line x1="50" y1="50" x2="90" y2="50" stroke="#F97316" strokeWidth="1.5" />
                    <circle cx="90" cy="50" r="5" fill="#F97316" />
                    {/* Left side string */}
                    <line x1="50" y1="50" x2="10" y2="50" stroke="#F97316" strokeWidth="1.5" />
                    <circle cx="10" cy="50" r="5" fill="#F97316" />
                  </motion.g>
                </svg>
              </motion.div>

              {/* Sonic Ripples */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 3.5, opacity: [0, 0.3, 0] }}
                  transition={{ 
                    duration: 3, 
                    repeat: 0, 
                    delay: i * 0.5,
                    ease: "easeOut" 
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-orange-500/10 rounded-full"
                />
              ))}
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="finale"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-center relative"
            >
              {/* Final Surya Burst */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 12, opacity: [0, 0.2, 0] }}
                transition={{ duration: 4, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-orange-500 rounded-full blur-3xl"
              />

              <motion.h2 
                initial={{ letterSpacing: "1.5em", opacity: 0 }}
                animate={{ letterSpacing: "0.2em", opacity: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="text-6xl md:text-8xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-b from-orange-100 via-orange-500 to-orange-900 italic py-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
              >
                Har Har Mahadev
              </motion.h2>
              
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2, delay: 1 }}
                className="h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent mb-6"
              />
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 2 }}
                className="text-orange-100/80 uppercase tracking-[0.6em] text-xs font-bold drop-shadow-sm"
              >
                Welcome to the Creative Universe of Sushil
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
