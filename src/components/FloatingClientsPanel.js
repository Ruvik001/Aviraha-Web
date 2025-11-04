import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react';

const FloatingClientsPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const clients = [
    {
      name: "Gravity Bath Fittings",
      logo: "/images/clients/gravity.png", // Replace with actual logo paths
      industry: "Manufacturing",
      testimonial: "Transformed our workplace culture"
    },
    {
      name: "Novus Automation",
      logo: "/images/clients/novus.png",
      industry: "IT Infrastructure",
      testimonial: "Sustainable stress management tools"
    },
    {
      name: "Radius Infotech",
      logo: "/images/clients/radius.png",
      industry: "Technology",
      testimonial: "Cut through mental clutter effectively"
    },
    {
      name: "Pentamind Solutions",
      logo: "/images/clients/pentamind.png",
      industry: "Information Technologies",
      testimonial: "Restored inner peace and balance"
    },
    {
      name: "Pranab Mukherjee Foundation",
      logo: "/images/clients/pmf.png",
      industry: "Non-Profit",
      testimonial: "CSR partner for community wellness"
    }
  ];

  const nextClient = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  const prevClient = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsOpen(true)}
            className="fixed top-1/2 right-0 -translate-y-1/2 z-50 no-print"
          >
            <div className="bg-gradient-to-l from-primary-600 to-primary-700 text-white px-4 py-8 rounded-l-2xl shadow-2xl border-l-4 border-gold-400">
              <div className="writing-mode-vertical text-sm font-semibold tracking-wider">
                OUR CLIENTS
              </div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Sliding Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full sm:w-96 bg-gradient-to-br from-neutral-900 to-primary-900 shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-display text-white mb-1">
                      Our Clients
                    </h3>
                    <p className="text-white/60 text-sm">
                      Trusted by leading organizations
                    </p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/60 hover:text-white transition-colors p-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Client Carousel */}
                <div className="relative mb-8">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10"
                  >
                    {/* Logo Placeholder */}
                    <div className="w-full h-32 bg-white/10 rounded-2xl mb-4 flex items-center justify-center">
                      <div className="text-4xl font-bold text-white/30">
                        {clients[currentIndex].name.split(' ').map(w => w[0]).join('')}
                      </div>
                    </div>

                    {/* Client Info */}
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {clients[currentIndex].name}
                    </h4>
                    <div className="inline-block px-3 py-1 bg-gold-500/20 text-gold-400 rounded-full text-xs font-medium mb-3">
                      {clients[currentIndex].industry}
                    </div>
                    <p className="text-white/70 text-sm italic mb-4">
                      "{clients[currentIndex].testimonial}"
                    </p>

                    {/* Navigation */}
                    <div className="flex items-center justify-between">
                      <button
                        onClick={prevClient}
                        className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5 text-white" />
                      </button>
                      <div className="text-white/60 text-sm">
                        {currentIndex + 1} / {clients.length}
                      </div>
                      <button
                        onClick={nextClient}
                        className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                      >
                        <ChevronRight className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </motion.div>
                </div>

                {/* All Clients Grid */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    All Clients
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {clients.map((client, index) => (
                      <motion.button
                        key={client.name}
                        onClick={() => setCurrentIndex(index)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-4 rounded-2xl border transition-all duration-300 ${
                          index === currentIndex
                            ? 'bg-white/10 border-gold-400'
                            : 'bg-white/5 border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="aspect-square bg-white/10 rounded-xl mb-2 flex items-center justify-center">
                          <div className="text-lg font-bold text-white/50">
                            {client.name.split(' ').map(w => w[0]).join('')}
                          </div>
                        </div>
                        <div className="text-xs text-white/80 font-medium text-center">
                          {client.name.length > 20 
                            ? client.name.substring(0, 20) + '...' 
                            : client.name
                          }
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10">
                    <div className="text-2xl font-bold text-gold-400 mb-1">
                      {clients.length}+
                    </div>
                    <div className="text-xs text-white/60">Clients</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10">
                    <div className="text-2xl font-bold text-primary-400 mb-1">
                      100%
                    </div>
                    <div className="text-xs text-white/60">Satisfaction</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      50+
                    </div>
                    <div className="text-xs text-white/60">Sessions</div>
                  </div>
                </div>

                {/* CTA */}
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
                >
                  Become Our Client
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </>
  );
};

export default FloatingClientsPanel;
