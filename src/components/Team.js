import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, Linkedin, Award, BookOpen, Briefcase } from 'lucide-react';

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const founders = [
    {
      name: 'Bharat Chandak',
      aka: 'Rithvik Maheshwari',
      role: 'Founder & Project Director',
      image: '/images/bharat.jpg',
      credentials: 'CA, BI Analyst & Certified Mindfulness Researcher',
      experience: '10+ Years',
      specialty: 'Stress Management & Corporate Wellness',
      phone: '+91-9643301024',
      email: 'bharat@aviraha.in',
      bio: 'A Chartered Accountant and former corporate leader who discovered the transformative power of mindfulness and sound healing. Bharat bridges the gap between corporate efficiency and conscious living.',
      achievements: [
        'Led wellness programs for 50+ corporations',
        'Researched corporate stress for 10+ years',
        'Expert in AI-driven wellness analytics'
      ],
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      name: 'Dr. Shiv Shankar Nautiyal',
      role: 'Co-Founder & Team Lead',
      image: '/images/shiv.jpg',
      credentials: 'PhD & M.A. in Yoga Science',
      experience: '5+ Years',
      specialty: 'Breathwork & Sound Healing',
      phone: '+91-7834893914',
      email: 'shiv@aviraha.in',
      bio: 'A Ph.D. in Yoga Science dedicated to understanding the deeper mechanics of consciousness. His work blends ancient yogic wisdom with scientific precision.',
      achievements: [
        'Advanced meditative techniques expert',
        'Trained 500+ wellness practitioners',
        'Pioneer in sound healing therapy'
      ],
      gradient: 'from-gold-600 to-amber-600'
    }
  ];

  return (
    <section id="team" ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Meet The Visionaries
          </span>
          <h2 className="font-display text-4xl lg:text-6xl text-neutral-900 mb-6 leading-tight">
            Where Corporate Intelligence
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-gold-600"> Met Yogic Science</span>
          </h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Two visionaries from distinct worlds united by a shared purpose: to bring stillness, 
            awareness, and vitality back into the modern workplace.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-xl border border-neutral-100 hover:shadow-2xl transition-all duration-500">
                {/* Gradient Overlay */}
                <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-br ${founder.gradient} opacity-90`}></div>

                <div className="relative p-8">
                  {/* Profile Image */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    className="relative w-32 h-32 mx-auto mb-6"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-gold-500 rounded-full animate-pulse"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-primary-600 to-gold-600 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">
                        {founder.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-primary-500 to-gold-500 rounded-full flex items-center justify-center shadow-lg">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>

                  {/* Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-1">{founder.name}</h3>
                    {founder.aka && (
                      <p className="text-sm text-neutral-500 italic mb-2">({founder.aka})</p>
                    )}
                    <p className="text-primary-600 font-semibold mb-1">{founder.role}</p>
                    <p className="text-sm text-neutral-600">{founder.credentials}</p>
                  </div>

                  {/* Bio */}
                  <p className="text-neutral-700 mb-6 leading-relaxed text-center">
                    {founder.bio}
                  </p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-primary-50 to-gold-50 rounded-2xl p-4 text-center">
                      <Briefcase className="w-5 h-5 text-primary-600 mx-auto mb-2" />
                      <div className="text-sm text-neutral-600">Experience</div>
                      <div className="font-bold text-neutral-900">{founder.experience}</div>
                    </div>
                    <div className="bg-gradient-to-br from-gold-50 to-primary-50 rounded-2xl p-4 text-center">
                      <BookOpen className="w-5 h-5 text-gold-600 mx-auto mb-2" />
                      <div className="text-sm text-neutral-600">Specialty</div>
                      <div className="font-bold text-neutral-900 text-sm">{founder.specialty}</div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-900 mb-3 flex items-center justify-center">
                      <Award className="w-4 h-4 mr-2 text-gold-600" />
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {founder.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.6, delay: (index * 0.2) + (idx * 0.1) + 0.4 }}
                          className="flex items-start text-sm text-neutral-700"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {achievement}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={`tel:${founder.phone}`}
                      className={`flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${founder.gradient} text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                      <Phone size={16} />
                      Call
                    </a>
                    <a
                      href={`mailto:${founder.email}`}
                      className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-neutral-300 text-neutral-700 font-medium rounded-full hover:bg-neutral-100 transition-all duration-300"
                    >
                      <Mail size={16} />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-primary-900 to-gold-900 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <p className="text-3xl lg:text-4xl font-display text-white italic mb-4">
                "What we hold in awareness, we become. Abundance flows where the soul rests in gratitude"
              </p>
              <p className="text-gold-300 font-medium">- Founding Philosophy</p>
            </div>
          </div>
        </motion.div>

        {/* Team Size */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
            <h3 className="text-2xl font-display text-neutral-900 mb-2">Our Extended Team</h3>
            <p className="text-neutral-700 mb-4">
              More than 20 specialized wellness practitioners across multiple modalities
            </p>
            <div className="flex justify-center gap-4 text-sm text-neutral-600">
              <span className="px-4 py-2 bg-primary-50 rounded-full">Yoga Masters</span>
              <span className="px-4 py-2 bg-gold-50 rounded-full">Sound Healers</span>
              <span className="px-4 py-2 bg-primary-50 rounded-full">Self-Defense Experts</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;