import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Calendar, MessageCircle, Download } from 'lucide-react';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const actions = [
    {
      icon: Calendar,
      title: 'Book a Demo Session',
      description: 'Experience our transformative programs firsthand',
      buttonText: 'Schedule Demo',
      gradient: 'from-blue-600 to-purple-600',
      href: '#contact'
    },
    {
      icon: MessageCircle,
      title: 'Free Consultation',
      description: 'Discuss your wellness goals with our experts',
      buttonText: 'Talk to Expert',
      gradient: 'from-purple-600 to-pink-600',
      href: '#contact'
    },
    {
      icon: Download,
      title: 'Download Brochure',
      description: 'Learn more about our programs and services',
      buttonText: 'Get Brochure',
      gradient: 'from-gold-600 to-amber-600',
      href: '#contact'
    }
  ];

  return (
    <section ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-primary-900 to-neutral-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-primary-600 to-gold-600 rounded-3xl p-12 lg:p-16 mb-12 relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6"
            >
              ✨ Limited Time Offer
            </motion.div>

            <h2 className="font-display text-4xl lg:text-6xl text-white mb-6 leading-tight">
              Ready to Transform Your
              <span className="block text-gold-200">Workplace Wellness?</span>
            </h2>

            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Join 50+ leading organizations that have elevated their team's well-being, 
              productivity, and consciousness through our evidence-based programs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-bold rounded-full hover:bg-neutral-100 transition-all duration-300 shadow-2xl"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Watch Demo Video
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>10,000+ Lives Transformed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>24h Response Time</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>100% Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + (index * 0.2) }}
              className="group"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-4 bg-gradient-to-br ${action.gradient} rounded-2xl mb-6 shadow-lg`}
                >
                  <action.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-display text-white mb-3 group-hover:text-gold-300 transition-colors">
                  {action.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {action.description}
                </p>

                {/* Button */}
                <a
                  href={action.href}
                  className={`inline-flex items-center justify-center w-full py-3 bg-gradient-to-r ${action.gradient} text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  {action.buttonText}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <p className="text-2xl lg:text-3xl font-display text-white italic mb-4">
              "The best time to plant a tree was 20 years ago. The second best time is now."
            </p>
            <p className="text-gold-300 font-medium">
              Begin your transformation journey today
            </p>
          </div>
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

export default CTA;