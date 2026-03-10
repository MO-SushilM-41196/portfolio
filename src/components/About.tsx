import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-display font-medium mb-8">About Me</h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                I am a Senior Software Developer with 6+ years of experience building scalable, high-performance web applications in fintech and enterprise domains.
              </p>
              <p>
                Strong expertise in Next.js (SSR, SSG, ISR), React.js, API integrations, and performance optimization. Proven experience delivering production-grade products, improving SEO, page speed, and user engagement.
              </p>
              <p>
                Hands-on experience with Adobe Experience Manager (AEM), OutSystems, and secure API development using Yii2 Advanced Framework.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h4 className="text-3xl font-display font-bold text-neutral-900">6+</h4>
                <p className="text-sm text-neutral-500 uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-display font-bold text-neutral-900">20+</h4>
                <p className="text-sm text-neutral-500 uppercase tracking-wider">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100"
          >
            <h3 className="text-xl font-bold mb-6">My Journey</h3>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-emerald-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white" />
                <h4 className="font-bold">Senior Software Developer</h4>
                <p className="text-sm text-neutral-500">Motilal Oswal • 2020 - Present</p>
              </div>
              <div className="relative pl-8 border-l-2 border-emerald-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-emerald-200 rounded-full border-4 border-white" />
                <h4 className="font-bold">Fellowship (React.js & Yii2)</h4>
                <p className="text-sm text-neutral-500">BridgeLabz Solutions • 2019 - 2020</p>
              </div>
              <div className="relative pl-8 border-l-2 border-emerald-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-emerald-200 rounded-full border-4 border-white" />
                <h4 className="font-bold">Software Tester Intern</h4>
                <p className="text-sm text-neutral-500">Intelliswift Software • 2018 - 2019</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
