import { motion } from "motion/react";
import { Mail, Github, Linkedin, Twitter, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const whatsappNumber = "7738205757";
  const whatsappMessage = "Hey Sushil, i had visited your portfolio site!";
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-display font-medium mb-8">Let's Connect</h2>
            <p className="text-lg text-neutral-600 mb-12 leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-8">
              <a href="mailto:mishrasushil889@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-neutral-50 rounded-2xl flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                  <Mail className="text-neutral-400 group-hover:text-emerald-600 transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Email Me</p>
                  <p className="text-lg font-medium">mishrasushil889@gmail.com</p>
                </div>
              </a>

              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 bg-neutral-50 rounded-2xl flex items-center justify-center group-hover:bg-green-50 transition-colors">
                  <MessageCircle className="text-neutral-400 group-hover:text-green-600 transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">WhatsApp Me</p>
                  <p className="text-lg font-medium">+91 7738205757</p>
                </div>
              </a>

              <div className="flex gap-4 pt-4">
                {[
                  { icon: <Github />, href: "https://github.com/sushil" },
                  { icon: <Linkedin />, href: "https://linkedin.com/in/sushil-mishra-6aab42145" },
                  { icon: <Twitter />, href: "#" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-12 h-12 border border-neutral-100 rounded-xl flex items-center justify-center text-neutral-400 hover:text-emerald-600 hover:border-emerald-100 hover:bg-emerald-50 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-50 p-10 rounded-[2.5rem] border border-neutral-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-white border border-neutral-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-white border border-neutral-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest ml-1">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 bg-white border border-neutral-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest ml-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-white border border-neutral-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none"
                />
              </div>
              <button className="w-full py-5 bg-neutral-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-neutral-800 transition-colors">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
