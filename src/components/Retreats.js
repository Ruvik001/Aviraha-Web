import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Users, Clock } from 'lucide-react'; // Calendar and price badge removed

const Retreats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const retreats = [
    {
      title: "Himalayan Sound Sanctuary",
      location: "Rishikesh, India",
      duration: "5 Days",
      capacity: "25 People",
      image: "https://images.unsplash.com/photo-1691433317101-fe4daf64b522?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHJldHJlYXR8ZW58MHx8fHwxNzUzNjgxNDYwfDA&ixlib=rb-4.1.0&q=85",
      description: "Immerse yourself with ancient Vedic healing practices amidst the sacred mountains of the Himalayas.",
      highlights: ["Daily Sound Baths", "Meditation in Sacred Spaces", "Fire Yoga", "Fun Activities", "Spiritual Guidance"],
    },
    {
      title: "Coastal Consciousness Reset",
      location: "Goa, India",
      duration: "5 Days",
      capacity: "25 People",
      image: "https://images.unsplash.com/photo-1561579890-3ace74d8e378?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Reconnect with your inner wisdom through ocean meditation and transformative breathwork.",
      highlights: ["Beach Meditation", "Breathwork Ceremonies", "Forest Bathing", "Organic Farm-to-Table", "Mindful Activities"],
    },
    {
      title: "Desert Longevity Lab",
      location: "Jaisalmer, India",
      duration: "4 Days",
      capacity: "25 People",
      image: "https://images.unsplash.com/photo-1645148284392-e2b0fae3262d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Advanced biohacking protocols combined with desert wisdom for cellular regeneration and vitality.",
      highlights: ["Sand Healing Ritual", "Red Light Treatments", "Circadian Reset", "Vortex Meditation", "Nature Walk"],
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-neutral-900 via-primary-900 to-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gold-500/20 text-gold-400 rounded-full text-sm font-medium mb-4">
            Immersive Retreats
          </span>
          <h2 className="font-display text-4xl lg:text-6xl text-white mb-6 leading-tight">
            Sacred Journeys
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-gold-400"> Await</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Step away from the ordinary and into transformative experiences that will 
            reshape your understanding of wellness, consciousness, and human potential.
          </p>
        </motion.div>

        {/* Retreats Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {retreats.map((retreat, index) => (
            <motion.div
              key={retreat.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-gold-500/30 transition-all duration-500 hover:transform hover:scale-105">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={retreat.image}
                    alt={retreat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-display text-2xl text-white mb-2 group-hover:text-gold-400 transition-colors duration-300">
                    {retreat.title}
                  </h3>

                  {/* Meta Info */}
                  <div className="flex items-center gap-6 mb-4 text-sm text-white/60">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {retreat.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {retreat.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {retreat.capacity}
                    </div>
                  </div>

                  <p className="text-white/70 mb-6 leading-relaxed">
                    {retreat.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-8">
                    {retreat.highlights.map((highlight, idx) => (
                      <motion.div
                        key={highlight}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: (index * 0.2) + (idx * 0.1) }}
                        className="flex items-center text-sm text-white/70"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-gold-400 rounded-full mr-3"></div>
                        {highlight}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
                  >
                    Click For Enquiry
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h3 className="font-display text-3xl text-white mb-4">
              Custom Retreat Experiences
            </h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Looking for a bespoke wellness journey? We craft personalized retreats 
              for community and corporate groups seeking transformation.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105">
              Design My Retreat
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Retreats;
