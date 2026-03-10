import { motion } from "motion/react";
import { BlogPost } from "../types";
import { ArrowUpRight } from "lucide-react";

const posts: BlogPost[] = [
  {
    title: "Mastering Next.js Server Components",
    excerpt: "Learn how to leverage RSCs for better performance and developer experience in your Next.js apps.",
    date: "March 15, 2026",
    readTime: "8 min read",
    category: "Tutorial"
  },
  {
    title: "The Future of CSS: Tailwind 4.0",
    excerpt: "Exploring the new features and architectural changes in the latest version of Tailwind CSS.",
    date: "February 28, 2026",
    readTime: "5 min read",
    category: "News"
  },
  {
    title: "Optimizing Web Performance",
    excerpt: "A deep dive into Core Web Vitals and how to achieve perfect Lighthouse scores.",
    date: "January 10, 2026",
    readTime: "12 min read",
    category: "Performance"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="section-padding bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-display font-medium mb-4">Latest Articles</h2>
            <p className="text-neutral-500">Sharing my thoughts and discoveries in web development.</p>
          </div>
          <button className="hidden md:block px-6 py-2 border border-neutral-200 rounded-full text-sm font-medium hover:bg-white transition-colors">
            View All Posts
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm group-hover:shadow-md transition-all h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-emerald-50 text-emerald-700 rounded">
                    {post.category}
                  </span>
                  <ArrowUpRight size={20} className="text-neutral-300 group-hover:text-emerald-600 transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-600 transition-colors">{post.title}</h3>
                <p className="text-neutral-500 text-sm mb-8 flex-grow">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-6 border-t border-neutral-50 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
