import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wind, Activity, Apple, Moon, Brain, Compass, Heart, Leaf, Sparkles } from 'lucide-react';

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const pillars = [
    {
      icon: Wind,
      title: 'Conscious Breath',
      description: 'Mastering the life force through intentional breathing',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Activity,
      title: 'Movement & Vitality',
      description: 'Dynamic practices for physical and energetic wellness',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Apple,
      title: 'Nutrition & Cellular Fuel',
      description: 'Nourishing the body from the inside out',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Moon,
      title: 'Circadian Rhythm',
      description: 'Aligning with natural cycles for optimal health',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Brain,
      title: 'Mindfulness',
      description: 'Cultivating present-moment awareness',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Compass,
      title: 'Purpose & Dharma',
      description: 'Discovering and living your true calling',
      color: 'from-gold-500 to-amber-500'
    },
    {
      icon: Heart,
      title: 'Emotions & Empathy',
      description: 'Developing emotional intelligence and compassion',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Leaf,
      title: 'Alignment with Nature',
      description: 'Reconnecting with the natural world',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Sparkles,
      title: 'Spiritual Evolution',
      description: 'Transcending limitations and awakening consciousness',
      color: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-neutral-900 via-primary-900 to-neutral-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gold-500/20 text-gold-400 rounded-full text-sm font-medium mb-4">
            The Aviraha Approach
          </span>
          <h2 className="font-display text-4xl lg:text-6xl text-white mb-6 leading-tight">
            The Nine Pillars of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-gold-400"> Longevity</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Our holistic framework integrating Science + Spirituality + AI for conscious performance and lasting wellness
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden">
                {/* Gradient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 bg-gradient-to-br ${pillar.color} rounded-2xl mb-6 shadow-lg`}
                  >
                    <pillar.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-display text-white mb-3 group-hover:text-gold-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/50 text-sm font-bold">
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Methodology Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-primary-600 to-blue-600 rounded-3xl p-8 text-white"
          >
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold mb-3">Science</h3>
            <p className="text-white/90 leading-relaxed">
              Evidence-based practices grounded in neuroscience, psychology, and modern wellness research
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-gold-600 to-amber-600 rounded-3xl p-8 text-white"
          >
            <div className="text-4xl mb-4">🕉️</div>
            <h3 className="text-2xl font-bold mb-3">Spirituality</h3>
            <p className="text-white/90 leading-relaxed">
              Ancient Vedic wisdom integrated with breath, sound, and stillness for deep transformation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white"
          >
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-3">AI Intelligence</h3>
            <p className="text-white/90 leading-relaxed">
              Personalized wellness mapping and longevity insights powered by artificial intelligence
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;