import { Calendar, MapPin, ArrowDown, Sparkles } from "lucide-react";
import logo from "figma:asset/4e1528f80651c7d8bbd373c5c95eacf62ba4fdd7.png";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 z-10" />
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1759701547467-a54a5e86a4f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwdG91cm5hbWVudCUyMGFyZW5hfGVufDF8fHx8MTc2NjUxOTIyMnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Esports Arena"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      </motion.div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20 z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
            initial={{ 
              x: Math.random() * windowSize.width, 
              y: Math.random() * windowSize.height 
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="relative z-20 text-center px-4 max-w-6xl mx-auto"
      >
        {/* Logo with Glow Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 blur-3xl bg-purple-600/30 scale-150" />
          <img 
            src={logo} 
            alt="Tour Arcade Logo" 
            className="w-72 md:w-[500px] mx-auto mb-12 relative z-10 drop-shadow-2xl"
          />
        </motion.div>

        {/* Main Title with 3D Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl mb-6 relative">
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg"
              style={{
                textShadow: '0 0 80px rgba(168, 85, 247, 0.4)'
              }}
            >
              LAGOS 2026
            </span>
          </h1>
        </motion.div>

        {/* Tagline with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-12"
        >
          <p className="text-3xl md:text-5xl mb-8 text-gray-200 tracking-wide">
            {["Play.", "Compete.", "Earn.", "Build."].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="inline-block mx-2"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </motion.div>

        {/* Event Details with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12"
        >
          <div className="flex items-center gap-3 bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-full px-6 py-4">
            <Calendar className="w-6 h-6 text-purple-400" />
            <div className="text-left">
              <p className="text-xs text-purple-300 uppercase tracking-wider">Date</p>
              <p className="text-lg">May 6, 2026</p>
              <p className="text-xs text-gray-500">(Subject to Change)</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-full px-6 py-4">
            <MapPin className="w-6 h-6 text-cyan-400" />
            <div className="text-left">
              <p className="text-xs text-cyan-300 uppercase tracking-wider">Location</p>
              <p className="text-lg">Lagos, Nigeria</p>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          A first-of-its-kind <span className="text-purple-400">fusion</span> of gaming, investment, 
          innovation, and culture. Not just an event — a <span className="text-cyan-400">movement</span>.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-12 py-5 rounded-full text-xl overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Register Your Interest
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600"
            initial={{ x: "100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-sm uppercase tracking-wider">Scroll to explore</span>
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}