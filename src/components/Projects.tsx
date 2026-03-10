import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "../types";

const projects: Project[] = [
  {
    title: "Image Compressor Tool",
    description: "A high-performance web tool to compress JPG/PNG images without losing quality. Built with Next.js and Web Workers.",
    image: "https://picsum.photos/seed/compress/800/600",
    tags: ["Next.js", "Web Workers", "Tailwind CSS"],
    liveUrl: "https://sushil-imagecompress.vercel.app",
    githubUrl: "https://github.com/sushil/image-compressor"
  },
  {
    title: "SaaS Dashboard Template",
    description: "A modern, responsive dashboard for SaaS products with dark mode support and complex data visualizations.",
    image: "https://picsum.photos/seed/dashboard/800/600",
    tags: ["React", "Recharts", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "E-commerce UI Kit",
    description: "A comprehensive UI kit for e-commerce platforms focusing on conversion and accessibility.",
    image: "https://picsum.photos/seed/shop/800/600",
    tags: ["React", "Tailwind", "Headless UI"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-display font-medium mb-4">Featured Projects</h2>
            <p className="text-neutral-500 max-w-xl">
              A selection of my favorite works, ranging from developer tools to complex web applications.
            </p>
          </div>
          <a href="#" className="text-emerald-600 font-bold hover:underline flex items-center gap-2">
            View All Projects <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.liveUrl} className="p-3 bg-white rounded-full text-neutral-900 hover:bg-emerald-50">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.githubUrl} className="p-3 bg-white rounded-full text-neutral-900 hover:bg-emerald-50">
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-neutral-100 rounded-md text-neutral-600">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors">{project.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
