import { motion } from "motion/react";
import { Gamepad2, Lightbulb, Mic, Sparkles, Store, Heart, ChevronRight } from "lucide-react";
import { useState } from "react";

const pillars = [
  {
    icon: Gamepad2,
    emoji: "🎮",
    title: "Gaming & Esports Arena",
    description: "High-energy competitive zone featuring live gaming tournaments",
    highlights: [
      "CODM, FIFA/FC, PUBG, Free Fire, Tekken",
      "Cash prizes & sponsored rewards",
      "On-stage finals with audience engagement",
      "Influencer and pro-player showmatches",
    ],
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-900/40 to-pink-900/40",
    image: "https://images.unsplash.com/photo-1627223159500-311b2b23f3d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb21wZXRpdGlvbiUyMGNyb3dkfGVufDF8fHx8MTc2NjUxOTIyMnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Lightbulb,
    emoji: "💡",
    title: "Investment & Pitch Arena",
    description: "Founders pitch gaming startups, tech ideas, and creative platforms",
    highlights: [
      "Angel investors & VC representatives",
      "Gaming startup pitches",
      "Funding & mentorship opportunities",
      "Partnership pathways",
    ],
    color: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-900/40 to-orange-900/40",
    image: "https://images.unsplash.com/photo-1599592187465-6dc742367282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwcGl0Y2glMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzY2NDUzMDM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Mic,
    emoji: "🧠",
    title: "Knowledge & Insight Stage",
    description: "Panels, talks, and fireside chats on gaming careers and innovation",
    highlights: [
      "Building a gaming startup",
      "Monetizing gaming skills",
      "Web3, AI & the future of play",
      "Community-driven growth",
    ],
    color: "from-cyan-500 to-blue-500",
    bgColor: "from-cyan-900/40 to-blue-900/40",
    image: "https://images.unsplash.com/photo-1592758080692-b6a5dbe9c725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHN0YWdlfGVufDF8fHx8MTc2NjQ3NDc1MHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Sparkles,
    emoji: "🧩",
    title: "Interactive Experiences Zone",
    description: "Hands-on engagement areas with immersive activities",
    highlights: [
      "Live escape rooms & cyber-heist challenges",
      "Mystery box activations",
      "AR/VR gaming demos",
      "On-site mini challenges with rewards",
    ],
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-900/40 to-emerald-900/40",
    image: "https://images.unsplash.com/photo-1640823127518-65e1ad563576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGdhbWluZ3xlbnwxfHx8fDE3NjY0NTk0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Store,
    emoji: "🤝",
    title: "Brands & Exhibition Hub",
    description: "Showcase space for gaming brands and industry partners",
    highlights: [
      "Gaming brands, telecoms, hardware",
      "Fintechs & lifestyle brands",
      "Product demos & giveaways",
      "Brand-to-community interaction",
    ],
    color: "from-red-500 to-rose-500",
    bgColor: "from-red-900/40 to-rose-900/40",
    image: "https://images.unsplash.com/photo-1675716921224-e087a0cca69a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ldHdvcmtpbmclMjBldmVudHxlbnwxfHx8fDE3NjY1MTE2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Heart,
    emoji: "🌍",
    title: "Community & Culture",
    description: "Celebrating the people behind the movement",
    highlights: [
      "Ambassador recognition",
      "Creator showcases",
      "Community awards",
      "Fashion, music & lifestyle integrations",
    ],
    color: "from-violet-500 to-purple-500",
    bgColor: "from-violet-900/40 to-purple-900/40",
    image: "https://images.unsplash.com/photo-1758270705317-3ef6142d306f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVjaCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjY1MTkyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function PillarsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-4 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.1),transparent_50%)]" />
      </div>

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
              <span className="text-purple-400 uppercase tracking-wider text-sm">6 Immersive Experiences</span>
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Event Pillars
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Six carefully crafted experiences designed to create the ultimate gaming and innovation hub
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.bgColor} mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </motion.div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="text-5xl"
                    >
                      {pillar.emoji}
                    </motion.div>
                    <h3 className="text-3xl text-white flex-1">{pillar.title}</h3>
                  </div>
                  
                  <p className="text-gray-200 text-lg mb-6 leading-relaxed">{pillar.description}</p>
                  
                  {/* Highlights - Shown on hover */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      height: hoveredIndex === index ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2 mb-6">
                      {pillar.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{
                            opacity: hoveredIndex === index ? 1 : 0,
                            x: hoveredIndex === index ? 0 : -10,
                          }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-400" />
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Gradient Line */}
                  <motion.div
                    className={`h-1 bg-gradient-to-r ${pillar.color} rounded-full`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                  />
                </motion.div>
              </div>

              {/* Hover Border Effect */}
              <motion.div
                className={`absolute inset-0 border-2 border-transparent group-hover:border-opacity-100 rounded-3xl pointer-events-none`}
                style={{
                  borderImage: `linear-gradient(135deg, ${pillar.color.split(' ').join(', ')}) 1`,
                }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-purple-900/40 to-cyan-900/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8">
            <p className="text-2xl text-gray-200 mb-4">
              Each pillar is designed to <span className="text-purple-400">engage</span>, 
              <span className="text-cyan-400"> inspire</span>, and 
              <span className="text-pink-400"> empower</span>
            </p>
            <p className="text-lg text-gray-400">
              Creating an unforgettable experience for every attendee
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
