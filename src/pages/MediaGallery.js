import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, Play, Image as ImageIcon, Video, Download, Share2, ZoomIn } from 'lucide-react';

const MediaGallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [activeTab, setActiveTab] = useState('all'); // all, images, videos

  const mediaItems = [
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400',
      title: 'Mindfulness Session at Tech Corp',
      category: 'Corporate Programs',
      date: '2024-10-15'
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
      thumbnail: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=400',
      title: 'Aura Resonance Retreat - Rishikesh',
      category: 'Retreats',
      date: '2024-09-20'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400',
      title: 'Sound Healing Circle',
      category: 'Workshops',
      date: '2024-08-10'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=400',
      title: 'Team Building Activities',
      category: 'Corporate Programs',
      date: '2024-11-05'
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=400',
      title: 'Shakti Workshop Highlights',
      category: 'Women Empowerment',
      date: '2024-07-18'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1512438932483-901e50655e0d?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1512438932483-901e50655e0d?w=400',
      title: 'Desert Meditation - Jaisalmer',
      category: 'Retreats',
      date: '2024-06-22'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1599447292681-66c6d6ad6e27?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1599447292681-66c6d6ad6e27?w=400',
      title: 'Breathwork Session',
      category: 'Workshops',
      date: '2024-10-30'
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400',
      title: 'Client Testimonial - Gravity Fittings',
      category: 'Testimonials',
      date: '2024-09-15'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400',
      title: 'Coastal Retreat - Goa',
      category: 'Retreats',
      date: '2024-08-25'
    },
  ];

  const filteredMedia = activeTab === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.type === activeTab.replace('s', ''));

  const categories = [...new Set(mediaItems.map(item => item.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-primary-900 to-neutral-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gold-500/20 text-gold-400 rounded-full text-sm font-medium mb-4">
            Media Gallery
          </span>
          <h1 className="font-display text-4xl lg:text-6xl text-white mb-6 leading-tight">
            Moments of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-gold-400"> Transformation</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Explore our journey through images and videos capturing the essence of 
            mindfulness, healing, and conscious living.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['all', 'images', 'videos'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-primary-500 to-gold-500 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {tab === 'all' && '🎯 All Media'}
              {tab === 'images' && '📷 Photos'}
              {tab === 'videos' && '🎬 Videos'}
            </button>
          ))}
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 bg-white/5 border border-white/10 text-white/60 text-sm rounded-full"
            >
              {category}
            </span>
          ))}
        </motion.div>

        {/* Media Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                onClick={() => setSelectedMedia(item)}
                className="relative h-80 rounded-3xl overflow-hidden cursor-pointer"
              >
                {/* Thumbnail */}
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="mb-2">
                      <span className="px-3 py-1 bg-gold-500/80 text-white text-xs rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.date}</p>
                  </div>
                </div>

                {/* Play Icon for Videos */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl"
                    >
                      <Play className="w-8 h-8 text-primary-600 ml-1" />
                    </motion.div>
                  </div>
                )}

                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full flex items-center gap-1">
                    {item.type === 'image' ? (
                      <ImageIcon className="w-3 h-3 text-white" />
                    ) : (
                      <Video className="w-3 h-3 text-white" />
                    )}
                    <span className="text-white text-xs font-medium capitalize">
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Zoom Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 left-4"
                >
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full bg-neutral-900 rounded-3xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Action Buttons */}
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Download className="w-4 h-4 text-white" />
                </button>
                <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Share2 className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Media Content */}
              <div className="relative">
                {selectedMedia.type === 'image' ? (
                  <img
                    src={selectedMedia.url}
                    alt={selectedMedia.title}
                    className="w-full max-h-[80vh] object-contain"
                  />
                ) : (
                  <div className="aspect-video">
                    <iframe
                      src={selectedMedia.url}
                      className="w-full h-full"
                      allowFullScreen
                      title={selectedMedia.title}
                    />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6 bg-neutral-800">
                <div className="mb-2">
                  <span className="px-3 py-1 bg-gold-500/20 text-gold-400 text-xs rounded-full">
                    {selectedMedia.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {selectedMedia.title}
                </h3>
                <p className="text-white/60 text-sm">{selectedMedia.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-gold-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105">
            Load More Media
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default MediaGallery;
