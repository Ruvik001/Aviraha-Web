import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Volume2, VolumeX, Play, Pause, X } from 'lucide-react';

const BackgroundMusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlayer, setShowPlayer] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  // Array of meditation/ambient music URLs (you can replace with your own)
  const musicTracks = [
    {
      name: "Sacred Healing",
      url: "https://youtu.be/NSKxvLWqyOY?si=n0NsBoQkrvVgEPcr" // Replace with your actual music URL
    }
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log('Audio playback failed:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    if (newVolume > 0) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <AnimatePresence>
      {showPlayer && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 left-6 z-50 no-print"
        >
          <div className="bg-gradient-to-br from-neutral-900/95 to-primary-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-4 min-w-[280px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-gold-500 rounded-lg flex items-center justify-center">
                  <Music className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Ambient Music</div>
                  <div className="text-white/60 text-xs">Sacred Healing</div>
                </div>
              </div>
              <button
                onClick={() => setShowPlayer(false)}
                className="text-white/60 hover:text-white transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Audio Element */}
            <audio
              ref={audioRef}
              src={musicTracks[0].url}
              loop
              preload="metadata"
            />

            {/* Controls */}
            <div className="flex items-center gap-3">
              {/* Play/Pause Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                className="w-10 h-10 bg-gradient-to-r from-primary-500 to-gold-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-white fill-current" />
                ) : (
                  <Play className="w-5 h-5 text-white fill-current ml-0.5" />
                )}
              </motion.button>

              {/* Volume Control */}
              <div className="flex-1 flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="flex-1 h-1 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-primary-500 [&::-webkit-slider-thumb]:to-gold-500 [&::-webkit-slider-thumb]:cursor-pointer"
                />
              </div>
            </div>

            {/* Wave Animation */}
            {isPlaying && (
              <div className="flex items-center justify-center gap-1 mt-3 h-8">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-gradient-to-t from-primary-500 to-gold-500 rounded-full"
                    animate={{
                      height: ['8px', '24px', '8px'],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.05,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Minimized Button */}
      {!showPlayer && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowPlayer(true)}
          className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-r from-primary-500 to-gold-500 rounded-full shadow-2xl flex items-center justify-center no-print"
        >
          <Music className="w-6 h-6 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackgroundMusicPlayer;
