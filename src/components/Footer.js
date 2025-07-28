import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-primary-900 to-neutral-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <img 
                src={`${process.env.PUBLIC_URL}/og-image.png`}
                alt="Aviraha Logo"
                className="w-24 mb-3"
              />
              <p className="text-white/70 leading-relaxed max-w-md">
                Transforming consciousness through ancient wisdom and modern science. 
                Join us in creating a world where wellness, mindfulness, and human potential flourish.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <p className="text-gold-300 italic text-lg mb-2">
                "In the stillness between sounds, healing frequencies whisper"
              </p>
              <p className="text-white/60 text-sm">- Rithvik Maheshwari, Founder , <strong> Aviraha Flow </strong> </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-white/50 text-sm">
                <strong> A Unit Of Vinyasa Dynamics Private Limited</strong><br/>
                Pioneering consciousness transformation
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-display text-xl text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Our Services', 'Testimonials', 'Retreats', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} 
                     className="text-white/70 hover:text-gold-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="font-display text-xl text-white mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-gold-400 mr-3 mt-1" />
                <div>
                  <p className="text-white/70">connect@aviraha.in</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-gold-400 mr-3 mt-1" />
                <div>
                  <p className="text-white/70">+91-9828007008</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gold-400 mr-3 mt-1" />
                <div>
                  <p className="text-white/70">New Delhi, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-12 border-t border-white/10"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-display text-2xl text-white mb-4">Stay Connected</h3>
            <p className="text-white/70 mb-8">
              Join our community and receive insights on wellness, consciousness, and transformation.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-l-full text-white placeholder-white/50 focus:outline-none focus:border-gold-400"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-r-full hover:from-gold-600 hover:to-gold-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/60 text-sm mb-4 md:mb-0"
            >
              © 2025 Aviraha - Vinyasa Dynamics Private Limited. All rights reserved.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center text-white/60 text-sm"
            >
              <span>Made with</span>
              <Heart className="w-4 h-4 text-gold-400 mx-1 fill-current" />
              <span>for conscious transformation</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;