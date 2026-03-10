import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "../images/sushil-mishra1.jpg",
  "../images/sushil-mishra2.jpg",
  "../images/sushil-mishra5.jpg",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      {/* Background Accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-3 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6"
          >
            Available for new opportunities
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tight leading-[0.9] mb-8">
            Hi, I'm <span className="text-emerald-600 italic">Sushil</span> Nandlal Mishra
          </h1>
          
          <p className="text-xl text-neutral-600 max-w-lg mb-10 leading-relaxed">
            Senior Software Developer specializing in <span className="text-neutral-900 font-medium">Next.js</span> and <span className="text-neutral-900 font-medium">React</span>. 6+ years of experience building high-performance fintech applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-neutral-900 text-white rounded-full font-medium flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-neutral-200 rounded-full font-medium hover:bg-neutral-50 transition-colors"
            >
              Contact Me
            </motion.a>
            <button className="w-full md:w-auto px-8 py-4 flex items-center justify-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors">
              <Download size={18} />
              Download Resume
            </button>
          </div>
        </motion.div>

        <div className="relative aspect-square max-w-md mx-auto md:ml-auto group">
          <div className="absolute inset-0 bg-emerald-600 rounded-3xl rotate-6 -z-10 opacity-10" />
          <div className="absolute inset-0 border-2 border-neutral-200 rounded-3xl -rotate-3 -z-10" />
          
          <div className="w-full h-full relative overflow-hidden rounded-3xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={HERO_IMAGES[currentIndex]}
                alt={`Sushil Mishra ${currentIndex + 1}`}
                referrerPolicy="no-referrer"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={prevImage}
                className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-900 hover:bg-white transition-colors shadow-lg"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextImage}
                className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-900 hover:bg-white transition-colors shadow-lg"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {HERO_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? "bg-emerald-600 w-6" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
