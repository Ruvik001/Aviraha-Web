import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:pr-12"
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                About Aviraha
              </span>
              <h2 className="font-display text-4xl lg:text-5xl text-neutral-900 mb-6 leading-tight">
                Ancient Wisdom Meets
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-gold-600"> Modern Science</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-gold-500 rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-neutral-700 leading-relaxed">
              <p>
                At Aviraha, we unite ancient wisdom with modern science to awaken true well-being and elevate conscious performance. 
                Our holistic approach to well-being encompasses mind, body, and spirit, creating transformative experiences 
                that resonate long after your journey with us ends.
              </p>
              
              <p>
                Founded by <strong>Bharat Chandak (Aka Rithvik Maheshwari)</strong>, a visionary in meditation, sound healing, and longevity science—Aviraha is a sanctuary 
		for those seeking more than temporary relief. From high-performance corporate wellness to profound spiritual 
		awakening, our programs are grounded in research and designed for measurable impact.
              </p>

              <p>
                Our team consist of seasoned experts in each field. We’re not just facilitating transformation—we’re building a global movement of conscious leaders 
		who understand that real success is a balance of external achievement and inner fulfillment. 
		As our founder beautifully puts it:                                                                    
		<em><strong>"In the stillness between sounds, healing frequencies whisper."</strong></em>
              </p>
              
              <div className="bg-gradient-to-r from-primary-50 to-gold-50 rounded-2xl p-6 border-l-4 border-primary-500">
                <p className="text-primary-800 font-medium">
                  <strong>Vinyasa Dynamics Private Limited</strong> - Transforming consciousness through scientifically-backed wellness methodologies.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <button className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105">
                Learn Our Story
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9ufGVufDB8fHx8MTc1MzY4MTQ1Nnww&ixlib=rb-4.1.0&q=85"
                alt="Woman in meditation pose"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">1000+</div>
                <div className="text-sm text-neutral-600">Lives Transformed</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-600">1+</div>
                <div className="text-sm text-neutral-600">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;