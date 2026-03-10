import { motion } from "motion/react";
import { Experience } from "../types";

const experiences: Experience[] = [
  {
    role: "Senior Software Developer",
    company: "Motilal Oswal Financial Services Ltd",
    period: "2020 – Present",
    description: [
      "Led development of high-traffic fintech platforms using Next.js and React.js, serving thousands of daily users.",
      "Drove SEO improvements, lazy loading, and SSR to enhance page speed and search engine visibility.",
      "Leveraged Amazon Q and GitHub Copilot to accelerate development and optimize solutions.",
      "Built interactive dashboards using Highcharts.js (Pie, Donut, Area, Bar charts).",
      "Designed secure REST APIs using Yii2 Advanced Framework with AES encryption.",
      "Managed enterprise CMS operations on Adobe Experience Manager (AEM) for 1.3+ years.",
      "Managed AEM and Nginx configurations, including reverse proxy rules and CSP headers."
    ]
  },
  {
    role: "Fellowship (React.js & Yii2)",
    company: "BridgeLabz Solutions Pvt Ltd",
    period: "2019 - 2020",
    description: [
      "Specialized in React.js and Yii2 development.",
      "Developed a notes application with CRUD functionality and secure authentication."
    ]
  },
  {
    role: "Software Tester Intern",
    company: "Intelliswift Software Pvt Ltd",
    period: "2018 - 2019",
    description: [
      "Gained hands-on experience in manual testing and quality assurance.",
      "Performed functional and regression testing on web applications."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-display font-medium mb-16 text-center">Work Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-[200px_1fr] gap-12">
                <div className="mb-4 md:mb-0">
                  <p className="text-emerald-600 font-bold text-sm uppercase tracking-widest">{exp.period}</p>
                  <h3 className="text-xl font-bold mt-1">{exp.company}</h3>
                </div>
                
                <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm">
                  <h4 className="text-lg font-bold mb-4">{exp.role}</h4>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-neutral-600 text-sm flex gap-3">
                        <span className="text-emerald-500 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
