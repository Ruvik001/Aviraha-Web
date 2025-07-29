import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Music, Zap } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const services = [
    {
      icon: Building2,
      title: "Vin-Pravaha: Corporate Mindfulness",
      description: "Transform your workplace culture with evidence-based mindfulness programs designed for modern professionals.",
      image: "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Leadership Presence and Focus Reset", "Team Cohesion & Alignment Circles", "Sound Healing For Stress Relief", "Productivity Through Breath And Stillness"],
      color: "from-primary-500 to-primary-700"
    },
    {
      icon: Music,
      title: "Aviraha Aura Resonance Retreats",
      description: "Experience deep resonance through curated soundscapes, mindful rituals,   and cellular rejuvenation.",
      image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxzb3VuZCUyMGhlYWxpbmd8ZW58MHx8fHwxNzUzNjgxNDY4fDA&ixlib=rb-4.1.0&q=85",
      features: ["Sound Healing Ceremonies & Breathwork", "Biohacking & Circadian Reset Protocols", "Elemental Mindfulness & Nature Immersion", "Ikigai Alignment & Life Design Rituals"],
      color: "from-gold-500 to-gold-700"
    },
    {
      icon: Zap,
      title: "Shakti: Women’s Self-Defense & Empowerment",
      description: "Empowering women with real-world self-defense skills, situational awareness, and inner confidence.",
      image: "https://images.unsplash.com/photo-1529566193698-bc394165d541?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Situational Intelligence", "Mind-Body Awareness", "Quick-Response Techniques", "Inner Confidence Building"],
      color: "from-primary-600 to-gold-600"
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-neutral-900 to-primary-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gold-500/20 text-gold-400 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-display text-4xl lg:text-6xl text-white mb-6 leading-tight">
            Transformative
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-gold-400"> Experiences</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Discover our signature programs designed to elevate your consciousness, 
            optimize your health, and unlock your highest potential.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative h-full bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`absolute top-6 left-6 p-3 bg-gradient-to-r ${service.color} rounded-2xl shadow-lg`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-display text-2xl text-white mb-4 group-hover:text-gold-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: (index * 0.2) + (idx * 0.1) }}
                        className="flex items-center text-sm text-white/60"
                      >
                        <div className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-3"></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 bg-gradient-to-r ${service.color} text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25`}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;