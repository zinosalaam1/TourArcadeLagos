import { motion, useScroll, useTransform } from "motion/react";
import { Target, TrendingUp, Users, Zap, Rocket } from "lucide-react";
import { useRef } from "react";

const objectives = [
  {
    icon: Target,
    title: "Showcase Tour Arcade",
    description: "Position as a global-ready platform",
    stat: "Global Scale",
  },
  {
    icon: Users,
    title: "Connect Stakeholders",
    description: "Link founders, gamers, investors and brands",
    stat: "3,000+ People",
  },
  {
    icon: TrendingUp,
    title: "Create Revenue Pathways",
    description: "Drive esports & gaming tech opportunities",
    stat: "∞ Opportunities",
  },
  {
    icon: Zap,
    title: "Establish Lagos as a Hub",
    description: "West African gaming & innovation center",
    stat: "Regional Impact",
  },
];

export function EventOverview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={containerRef} className="relative py-32 px-4 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/40 to-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1648023200358-9dc050df521d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWdvcyUyMG5pZ2VyaWElMjBjaXR5fGVufDF8fHx8MTc2NjUxOTIyNHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Lagos Skyline"
          className="w-full h-full object-cover opacity-20"
        />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-xl border border-purple-500/30 rounded-full px-6 py-2">
              <span className="text-purple-400 uppercase tracking-wider text-sm">The Movement</span>
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Why This Matters
          </h2>
          <p className="text-xl md:text-3xl text-gray-200 max-w-5xl mx-auto leading-relaxed">
            Not just an event — a <span className="text-purple-400 font-semibold">movement</span> designed to bring together gamers, 
            creators, founders, investors, and brands into one <span className="text-cyan-400 font-semibold">high-energy ecosystem</span>.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          {objectives.map((obj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="group relative bg-gradient-to-br from-purple-900/40 to-cyan-900/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 overflow-hidden"
            >
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/20 group-hover:to-cyan-600/20 transition-all duration-500"
              />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-gradient-to-br from-purple-600/30 to-cyan-600/30 p-4 rounded-2xl backdrop-blur-xl border border-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                    <obj.icon className="w-10 h-10 text-purple-300" />
                  </div>
                  <div className="text-right">
                    <p className="text-3xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      {obj.stat}
                    </p>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl mb-3 text-white">{obj.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{obj.description}</p>
              </div>

              {/* Hover Effect Line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Gaming Is Section - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-cyan-900/20 backdrop-blur-xl rounded-3xl" />
          
          <div className="relative bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl mb-4 inline-block"
                >
                  💼
                </motion.div>
                <p className="text-2xl md:text-3xl text-purple-400 group-hover:text-purple-300 transition-colors">
                  A Serious Business
                </p>
                <p className="text-gray-400 mt-2">Revenue-generating industry</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl mb-4 inline-block"
                >
                  🎯
                </motion.div>
                <p className="text-2xl md:text-3xl text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  A Viable Career Path
                </p>
                <p className="text-gray-400 mt-2">Professional opportunities</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl mb-4 inline-block"
                >
                  🚀
                </motion.div>
                <p className="text-2xl md:text-3xl text-pink-400 group-hover:text-pink-300 transition-colors">
                  Investment Frontier
                </p>
                <p className="text-gray-400 mt-2">Next-gen opportunities</p>
              </motion.div>
            </div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-purple-500/30 grid grid-cols-3 gap-4 text-center"
            >
              <div>
                <p className="text-4xl text-purple-400 mb-2">$200B+</p>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Global Gaming Market</p>
              </div>
              <div>
                <p className="text-4xl text-cyan-400 mb-2">3.2B+</p>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Global Gamers</p>
              </div>
              <div>
                <p className="text-4xl text-pink-400 mb-2">500M+</p>
                <p className="text-sm text-gray-400 uppercase tracking-wider">African Gamers</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
