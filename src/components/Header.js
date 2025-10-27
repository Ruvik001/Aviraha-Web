import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { 
      name: 'Services', 
      href: '#services',
      dropdown: [
        { name: 'Corporate Mindfulness', href: '#services' },
        { name: 'Aura Retreats', href: '#retreats' },
        { name: 'Women Empowerment', href: '#services' },
      ],
    },
    { name: 'Retreats', href: '#retreats' },
    { name: 'Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <>
      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-neutral-900/95 backdrop-blur-lg shadow-2xl border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/og-image.png`}
                alt="Aviraha Logo"
                className="h-12 w-auto"
              />
              <div className="hidden lg:block">
                <div className="text-xl font-display font-bold text-white">
                  AVIRAHA
                </div>
                <div className="text-xs text-gold-400">
                  Where Stillness Becomes Strength
                </div>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 text-white/80 hover:text-white font-medium transition-colors relative group"
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown size={16} />}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-gold-400 group-hover:w-full transition-all duration-300"></span>
                  </a>

                  {/* Dropdown */}
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-neutral-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
                    >
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-6 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200 border-b border-white/5 last:border-0"
                        >
                          {item.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-300"
            >
              Book Consultation
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-neutral-900/98 backdrop-blur-lg border-t border-white/10"
            >
              <div className="px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-white/80 hover:text-white font-medium py-2 hover:pl-2 transition-all duration-200"
                    >
                      {link.name}
                    </a>
                    {link.dropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-white/60 hover:text-white text-sm py-1 hover:pl-2 transition-all duration-200"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-full text-center mt-6"
                >
                  Book Consultation
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Header;
