import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Aviraha and what services do you offer?',
      answer: 'Aviraha is a corporate wellness initiative that combines ancient Vedic wisdom with modern science. We offer corporate mindfulness programs (Vin-Pravāha), immersive wellness retreats (Aura Resonance), women empowerment workshops (Shakti), and customized wellness experiences for organizations.'
    },
    {
      question: 'How long is a typical corporate wellness session?',
      answer: 'Our signature Vin-Pravāha sessions are 60 minutes long, combining breathwork, sound healing, and guided meditation. We also offer half-day workshops and customized programs ranging from 2-4 hours depending on your organizational needs.'
    },
    {
      question: 'What makes Aviraha different from other wellness programs?',
      answer: 'Aviraha uniquely integrates three dimensions: ancient Vedic practices, evidence-based neuroscience, and AI-driven personalization. Our programs are designed by experts with 10+ years of experience and deliver measurable results including 40% improvement in employee retention.'
    },
    {
      question: 'Where are your retreats located?',
      answer: 'We conduct immersive retreats at premium locations across India including Rishikesh (Himalayan Sound Sanctuary), Goa (Coastal Consciousness Reset), and Jaisalmer (Desert Longevity Lab). Each location is chosen for its natural healing properties and serene environment.'
    },
    {
      question: 'How many participants can join a program?',
      answer: 'Our programs accommodate various group sizes. Corporate sessions handle 10-100 participants, retreats are designed for 20-50 people for an intimate experience, and women empowerment workshops work best with 15-30 participants.'
    },
    {
      question: 'What is the investment for corporate wellness programs?',
      answer: 'Investment varies based on program type, duration, and group size. We offer flexible packages starting with demo sessions to full annual wellness contracts. Contact us for a customized quote tailored to your organization\'s needs and budget.'
    },
    {
      question: 'Do you provide virtual/online sessions?',
      answer: 'Yes! We offer both in-office and online wellness sessions. Our Monthly Wellness Flow program is particularly popular for remote teams, allowing continuous mindfulness practice regardless of location.'
    },
    {
      question: 'What credentials do your practitioners have?',
      answer: 'Our team includes PhD holders in Yoga Science, certified mindfulness researchers, chartered accountants specialized in corporate wellness, and martial arts experts. Our 20+ practitioners are highly qualified across multiple wellness modalities.'
    },
    {
      question: 'How do you measure the impact of your programs?',
      answer: 'We track multiple metrics including employee satisfaction scores, stress level reductions, productivity improvements, retention rates, and healthcare cost savings. Most clients see measurable improvements within 3 months of consistent engagement.'
    },
    {
      question: 'Can you customize programs for specific industries?',
      answer: 'Absolutely! We design bespoke wellness experiences tailored to your industry challenges, company culture, and employee demographics. Whether you\'re in tech, finance, manufacturing, or government, we create programs that resonate with your team.'
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-neutral-900 mb-6 leading-tight">
            Common
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-gold-600"> Questions</span>
          </h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our programs and how we can serve your wellness journey
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-neutral-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors duration-300"
              >
                <span className="font-semibold text-lg text-neutral-900 pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-primary-600" />
                  ) : (
                    <Plus className="w-6 h-6 text-primary-600" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-neutral-700 leading-relaxed border-t border-neutral-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-primary-600 to-gold-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-display mb-4">Still Have Questions?</h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Our team is here to help you design the perfect wellness experience for your organization. 
              Let's start a conversation about your unique needs.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:bg-neutral-100 transition-all duration-300 hover:scale-105"
            >
              Schedule a Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;