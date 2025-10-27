import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { TrendingUp, Users, Award, Heart, Sparkles, Target } from 'lucide-react';

const Counter = ({ value, duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration });
      return controls.stop;
    }
  }, [isInView, count, value, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const stats = [
    {
      icon: Users,
      value: 10000,
      suffix: '+',
      label: 'Lives Transformed',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Across corporate and individual programs'
    },
    {
      icon: TrendingUp,
      value: 500,
      suffix: '+',
      label: 'Sessions Conducted',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Mindfulness and wellness experiences'
    },
    {
      icon: Award,
      value: 50,
      suffix: '+',
      label: 'Corporate Clients',
      gradient: 'from-gold-500 to-amber-500',
      description: 'Fortune 500 and leading organizations'
    },
    {
      icon: Heart,
      value: 40,
      suffix: '%',
      label: 'Retention Boost',
      gradient: 'from-red-500 to-orange-500',
      description: 'Improved employee satisfaction'
    },
    {
      icon: Sparkles,
      value: 20,
      suffix: '+',
      label: 'Expert Team',
      gradient: 'from-green-500 to-emerald-500',
      description: 'Certified wellness practitioners'
    },
    {
      icon: Target,
      value: 100,
      suffix: '%',
      label: 'Client Satisfaction',
      gradient: 'from-indigo-500 to-purple-500',
      description: 'Trusted by industry leaders'
    }
  ];

  return (
    <section ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-primary-900 to-neutral-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
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
            Our Impact
          </span>
          <h2 className="font-display text-4xl lg:text-6xl text-white mb-6 leading-tight">
            Transforming Lives
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-gold-400"> Across India</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Real results, measurable impact, and countless transformed lives through our evidence-based wellness programs
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden">
                {/* Gradient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 bg-gradient-to-br ${stat.gradient} rounded-2xl mb-6 shadow-lg`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Number */}
                  <div className="mb-4">
                    <div className={`text-5xl lg:text-6xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                      <Counter value={stat.value} />
                      {stat.suffix}
                    </div>
                    <h3 className="text-2xl font-display text-white mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {stat.description}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                    className={`h-1 bg-gradient-to-r ${stat.gradient} rounded-full`}
                  ></motion.div>
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
          <p className="text-white/70 mb-6 text-lg">Want to be part of our success story?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25 hover:scale-105"
          >
            Start Your Transformation
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Stats;