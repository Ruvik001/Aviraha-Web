import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const testimonials = [
    {
      name: "Rahul Aggarwal",
      role: "Director",
      image: "/images/Rahul.jpeg",
      content: "Even after just the first session, Aviraha’s mindfulness experience left a powerful impact on our team. The energy shift was noticeable—calmer, more focused employees, and a renewed sense of connection. We instantly saw the value and decided to take it forward as a regular engagement.",
      rating: 5,
      company: "Gravity Bath Fittings"
    },
    {
      name: "Ajay Modi",
      role: "Manager",
      image: "/images/Ajay.jpeg",
      content: "Aviraha's session was a refreshing break from our high-pressure routines. The sound healing and mindfulness techniques brought an unexpected sense of clarity and calm. It’s rare to find something so simple yet so effective in restoring inner peace and balance amidst corporate chaos.",
      rating: 5,
      company: "National Land Monetization Corporation"
    },
    {
      name: "Rohin Koppuravuri",
      role: "Deputy Director",
      image: "/images/Rohin.jpeg",
      content: "Aviraha’s mindfulness workshop was deeply grounding. In just one session, it created a space of stillness and mental clarity that we often miss in the fast-paced policy environment. It’s a much-needed initiative for enhancing well-being across organisations and government departments.",
      rating: 5,
      company: "Department of Public Enterprises, Ministry of Finance"
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-gold-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Client Stories
          </span>
          <h2 className="font-display text-4xl lg:text-6xl text-neutral-900 mb-6 leading-tight">
            Transformations
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-gold-600"> That Inspire</span>
          </h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Discover how leaders across industries have elevated their consciousness and 
            achieved extraordinary results through our programs.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl border border-neutral-100 hover:shadow-2xl hover:border-primary-200 transition-all duration-500 hover:transform hover:scale-105">
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: (index * 0.2) + 0.3 }}
                  className="absolute -top-4 left-8"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-gold-500 rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </motion.div>

                {/* Rating */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: (index * 0.2) + 0.4 }}
                  className="flex items-center mb-6 mt-4"
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-400 fill-current" />
                  ))}
                </motion.div>

                {/* Content */}
                <motion.blockquote
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: (index * 0.2) + 0.5 }}
                  className="text-neutral-700 mb-8 leading-relaxed text-lg italic"
                >
                  "{testimonial.content}"
                </motion.blockquote>

                {/* Author */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: (index * 0.2) + 0.6 }}
                  className="flex items-center"
                >
                  <div className="relative">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover shadow-lg ring-4 ring-white"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-primary-500 to-gold-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                    <div className="text-sm text-neutral-600">{testimonial.role}</div>
                    <div className="text-xs text-primary-600 font-medium">{testimonial.company}</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-neutral-600 mb-6">Ready to write your own transformation story?</p>
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-gold-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105">
            Start Your Journey
            <motion.svg 
              className="ml-2 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;