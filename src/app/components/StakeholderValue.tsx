import { motion } from "motion/react";
import { Trophy, DollarSign, Target, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";

const stakeholderGroups = [
  {
    icon: Trophy,
    title: "For Attendees",
    subtitle: "Experience Everything",
    color: "purple",
    bgGradient: "from-purple-900/40 to-purple-950/40",
    benefits: [
      { text: "Compete in high-stakes tournaments", icon: "🎮" },
      { text: "Learn from industry experts", icon: "🎓" },
      { text: "Pitch ideas to real investors", icon: "💡" },
      { text: "Network with like-minded innovators", icon: "🤝" },
      { text: "Win rewards and recognition", icon: "🏆" },
    ],
    image: "https://images.unsplash.com/photo-1617507171089-6cb9aa5add36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMG5lb258ZW58MXx8fHwxNzY2NDcwMDcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: DollarSign,
    title: "For Investors",
    subtitle: "Discover Opportunities",
    color: "yellow",
    bgGradient: "from-yellow-900/40 to-orange-950/40",
    benefits: [
      { text: "Early access to raw talent", icon: "⭐" },
      { text: "Quality deal flow & discovery", icon: "💼" },
      { text: "Youth market insights", icon: "📊" },
      { text: "Connect with emerging founders", icon: "🚀" },
      { text: "Identify next-gen opportunities", icon: "🎯" },
    ],
    image: "https://images.unsplash.com/photo-1672581437674-3186b17b405a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjY0MjY0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Target,
    title: "For Brands",
    subtitle: "Engage Your Audience",
    color: "cyan",
    bgGradient: "from-cyan-900/40 to-blue-950/40",
    benefits: [
      { text: "Direct access to Gen-Z & millennials", icon: "👥" },
      { text: "High engagement activations", icon: "⚡" },
      { text: "Long-term community partnerships", icon: "🤝" },
      { text: "Brand visibility at scale", icon: "📢" },
      { text: "Authentic youth connections", icon: "💖" },
    ],
    image: "https://images.unsplash.com/photo-1628089700970-0012c5718efc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBrZXlib2FyZCUyMGxpZ2h0c3xlbnwxfHx8fDE3NjY1MTkyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function StakeholderValue() {
  return (
    <section className="py-32 px-4 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(34,211,238,0.15),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
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
              <span className="text-purple-400 uppercase tracking-wider text-sm">Stakeholder Benefits</span>
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Value for Everyone
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Whether you're a gamer, investor, or brand — there's <span className="text-purple-400">something powerful</span> waiting for you
          </p>
        </motion.div>

        {/* Large Cards with Images */}
        <div className="space-y-8 mb-20">
          {stakeholderGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={group.image}
                    alt={group.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${group.bgGradient} mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
                </div>

                {/* Content */}
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-10 md:p-16">
                  {/* Left Side - Title & Icon */}
                  <div className="flex flex-col justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`bg-gradient-to-br from-${group.color}-600/30 to-${group.color}-900/30 backdrop-blur-xl p-6 rounded-3xl inline-block mb-6 w-fit border border-${group.color}-500/30`}
                    >
                      <group.icon className={`w-16 h-16 text-${group.color}-400`} />
                    </motion.div>

                    <h3 className="text-4xl md:text-5xl mb-3 text-white">{group.title}</h3>
                    <p className={`text-2xl text-${group.color}-400 mb-6`}>{group.subtitle}</p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group/btn bg-gradient-to-r from-${group.color}-600 to-${group.color}-500 text-white px-8 py-4 rounded-full text-lg w-fit flex items-center gap-2`}
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                  {/* Right Side - Benefits */}
                  <div className="flex flex-col justify-center">
                    <ul className="space-y-4">
                      {group.benefits.map((benefit, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          className="flex items-start gap-4 group/item"
                        >
                          <div className="flex-shrink-0">
                            <div className={`bg-gradient-to-br from-${group.color}-600/20 to-${group.color}-900/20 backdrop-blur-xl p-3 rounded-xl border border-${group.color}-500/20 group-hover/item:scale-110 transition-transform`}>
                              <span className="text-2xl">{benefit.icon}</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-2">
                            <p className="text-xl text-gray-100 leading-relaxed group-hover/item:text-white transition-colors">
                              {benefit.text}
                            </p>
                          </div>
                          <CheckCircle2 className={`w-6 h-6 text-${group.color}-400 flex-shrink-0 mt-2 opacity-0 group-hover/item:opacity-100 transition-opacity`} />
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-${group.color}-500 via-${group.color}-400 to-${group.color}-500`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tour Arcade Positioning - Hero Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-cyan-900/20 rounded-3xl blur-3xl" />
          
          <div className="relative bg-gradient-to-br from-purple-900/60 via-black/80 to-cyan-900/60 backdrop-blur-2xl border-2 border-purple-500/30 rounded-3xl p-10 md:p-20 text-center overflow-hidden">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
              }}
            />

            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-8"
            >
              <div className="bg-gradient-to-br from-purple-600/30 to-cyan-600/30 backdrop-blur-xl p-8 rounded-3xl border border-purple-500/30">
                <Rocket className="w-20 h-20 text-purple-400" />
              </div>
            </motion.div>

            <h3 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Tour Arcade Positioning
            </h3>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
              This event is not just a gathering — it's the <span className="text-purple-400">soft launch</span> of Tour Arcade's 
              long-term ecosystem and a <span className="text-cyan-400">proof-of-concept</span> for future regional & global events.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
                <p className="text-3xl mb-2">🏗️</p>
                <p className="text-lg text-gray-300">Building Infrastructure</p>
              </div>
              <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20">
                <p className="text-3xl mb-2">🎮</p>
                <p className="text-lg text-gray-300">For Play & Competition</p>
              </div>
              <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-pink-500/20">
                <p className="text-3xl mb-2">💰</p>
                <p className="text-lg text-gray-300">And Earning</p>
              </div>
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white px-10 py-5 rounded-full text-xl shadow-lg shadow-purple-500/50">
                The Future Starts Here
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
