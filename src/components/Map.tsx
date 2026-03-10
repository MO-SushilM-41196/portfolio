import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export default function MapSection() {
  const lat = 19.204476061293974;
  const lng = 72.83492558316316;
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3767.88!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin`;

  return (
    <section id="location" className="section-padding bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-medium mb-4">My Location</h2>
          <p className="text-neutral-500 flex items-center justify-center gap-2">
            <MapPin size={18} className="text-emerald-600" />
            Based in Mumbai, Maharashtra, India
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl border border-white relative"
        >
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sushil Mishra's Location"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
          
          <div className="absolute bottom-8 left-8 glass p-6 rounded-2xl max-w-xs hidden md:block">
            <h4 className="font-bold mb-2">Work Hub</h4>
            <p className="text-sm text-neutral-600">
              I'm currently working remotely and available for meetings in the Mumbai area.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
