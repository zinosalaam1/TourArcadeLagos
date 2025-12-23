import { motion } from "motion/react";
import logo from "/src/assets/trlogo.png";
import { Mail, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export function Footer() {
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-32 px-4 bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-950/30 to-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1759701547467-a54a5e86a4f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwdG91cm5hbWVudCUyMGFyZW5hfGVufDF8fHx8MTc2NjUxOTIyMnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Esports"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Main Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-cyan-900/30 rounded-3xl blur-3xl" />
            
            <div className="relative bg-gradient-to-br from-purple-900/60 via-black/80 to-cyan-900/60 backdrop-blur-2xl border-2 border-purple-500/30 rounded-3xl p-12 md:p-20 text-center">
              <h2 className="text-3xl md:text-5xl lg:text-6xl mb-12">
                <span className="text-white">This is where:</span>
              </h2>
              
              <div className="space-y-6 text-2xl md:text-4xl lg:text-5xl mb-12">
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-purple-400"
                >
                  Games become businesses
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-pink-400"
                >
                  Ideas meet capital
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-cyan-400"
                >
                  Communities turn into empires
                </motion.p>
              </div>
              
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-12" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-2xl md:text-4xl text-white mb-4">
                  This is not just an event.
                </p>
                <p className="text-3xl md:text-5xl lg:text-6xl bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  This is the future of play in Africa.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Logo and Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 blur-3xl bg-purple-600/30" />
            <img 
              src={logo} 
              alt="Tour Arcade" 
              className="relative w-64 md:w-80 mx-auto opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-4xl md:text-6xl lg:text-7xl mb-4 tracking-wider">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Play. Compete. Earn. Build.
              </span>
            </p>
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-12">
            {[
              { Icon: Twitter, label: "Twitter" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Mail, label: "Email" },
            ].map((social, i) => (
              <motion.button
                key={social.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-xl border border-purple-500/30 p-4 rounded-full hover:border-purple-500/60 transition-all"
                aria-label={social.label}
              >
                <social.Icon className="w-6 h-6 text-purple-300" />
              </motion.button>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl mx-auto mb-16"
          >
            <p className="text-xl text-gray-300 mb-6">Stay updated on Tour Arcade Lagos 2026</p>
            <div className="flex gap-4">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-black/60 backdrop-blur-xl border border-purple-500/30 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full whitespace-nowrap"
              >
                Notify Me
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-purple-500/20 pt-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-gray-500 text-sm text-center md:text-left">
              <p>Tour Arcade Lagos 2026 • May 6, 2026 (Date Subject to Change)</p>
              <p className="mt-1">© {new Date().getFullYear()} Tour Arcade. All rights reserved.</p>
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-xl border border-purple-500/30 p-4 rounded-full hover:border-purple-500/60 transition-all group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-6 h-6 text-purple-300 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
            initial={{ 
              x: Math.random() * windowSize.width, 
              y: windowSize.height 
            }}
            animate={{
              y: [null, -100 - Math.random() * 200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </footer>
  );
}