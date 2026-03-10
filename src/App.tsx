/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ExperienceSection from "./components/Experience";
import Achievements from "./components/Achievements";
import Blog from "./components/Blog";
import MapSection from "./components/Map";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import { MessageCircle } from "lucide-react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const whatsappNumber = "7738205757";
  const whatsappMessage = "Hey Sushil, i had visited your portfolio site!";
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setShowPopup(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader key="preloader" onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all group relative"
            >
              <MessageCircle size={32} />
              <span className="absolute right-full mr-4 px-4 py-2 bg-white text-neutral-900 text-sm font-bold rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-neutral-100">
                Connect on WhatsApp
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <ExperienceSection />
              <Achievements />
              <Blog />
              <MapSection />
              <Contact />
            </main>
            <Footer />

            {/* Welcome Popup */}
            <AnimatePresence>
              {showPopup && (
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="fixed bottom-8 left-8 z-[60] max-w-sm"
                >
                  <div className="glass p-6 rounded-3xl border-emerald-100 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-600" />
                    <button 
                      onClick={() => setShowPopup(false)}
                      className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 transition-colors"
                    >
                      ✕
                    </button>
                    <h4 className="text-lg font-bold mb-2">Welcome Visitors!</h4>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Welcome to Sushil's Portfolio!! I'm glad you're here. Explore my work and let's build something amazing together.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase tracking-widest">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
                      Live Portfolio
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </div>
  );
}
