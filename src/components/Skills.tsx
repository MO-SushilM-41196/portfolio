import { motion } from "motion/react";
import { 
  Code2, 
  Layout, 
  Database, 
  Settings, 
  Globe, 
  Cpu,
  Zap,
  Figma
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="text-emerald-600" />,
    skills: ["Next.js (SSR, SSG, ISR)", "React.js", "JavaScript (ES6+)", "HTML5", "CSS3"]
  },
  {
    title: "Backend & APIs",
    icon: <Database className="text-emerald-600" />,
    skills: ["PHP (Yii2 Framework)", "REST APIs", "Node.js (basic)", "MySQL", "PostgreSQL"]
  },
  {
    title: "CMS & Platforms",
    icon: <Settings className="text-emerald-600" />,
    skills: ["Adobe Experience Manager (AEM)", "OutSystems", "Nginx Configuration", "CSP Headers"]
  },
  {
    title: "Tools",
    icon: <Globe className="text-emerald-600" />,
    skills: ["Git/GitHub", "Amazon Q", "GitHub Copilot", "JIRA", "Zoho"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-medium mb-4">Technical Skills</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            A comprehensive list of technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-neutral-600">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
