import { motion } from "motion/react";
import { Award, Code, Globe, Zap } from "lucide-react";
import { Achievement } from "../types";

const achievements: Achievement[] = [
  {
    title: "Arctic Code Vault Contributor",
    description: "Recognized by GitHub for contributing to open source projects preserved in the Arctic Code Vault.",
    icon: "Award"
  },
  {
    title: "Built 10+ Web Tools",
    description: "Created and deployed multiple utility tools including image compressors and SEO checkers.",
    icon: "Zap"
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to various React and Next.js libraries on GitHub.",
    icon: "Code"
  },
  {
    title: "Performance Expert",
    description: "Consistently achieving 95+ Lighthouse scores on all client and personal projects.",
    icon: "Globe"
  }
];

const IconMap: any = {
  Award: <Award className="text-emerald-600" />,
  Zap: <Zap className="text-emerald-600" />,
  Code: <Code className="text-emerald-600" />,
  Globe: <Globe className="text-emerald-600" />
};

export default function Achievements() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-display font-medium mb-16 text-center">Achievements</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-8 rounded-3xl bg-neutral-50 border border-neutral-100"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                {IconMap[item.icon || "Award"]}
              </div>
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
