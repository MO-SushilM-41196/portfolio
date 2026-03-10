export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-neutral-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-sm text-neutral-500">
            © 2026 Sushil Nandlal Mishra. All rights reserved.
          </p>
          <p className="text-xs text-neutral-400 mt-2">
            Built with <span className="text-neutral-900 font-medium">React</span>, <span className="text-neutral-900 font-medium">Tailwind CSS</span> & <span className="text-neutral-900 font-medium">Framer Motion</span>.
          </p>
        </div>

        <div className="flex items-center gap-8">
          <a href="#home" className="text-xs font-bold text-neutral-400 uppercase tracking-widest hover:text-emerald-600 transition-colors">Home</a>
          <a href="#projects" className="text-xs font-bold text-neutral-400 uppercase tracking-widest hover:text-emerald-600 transition-colors">Projects</a>
          <a href="#contact" className="text-xs font-bold text-neutral-400 uppercase tracking-widest hover:text-emerald-600 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
