import { motion, useInView } from "motion/react";
import { Users, TrendingUp, Building2, Palette, GraduationCap, Briefcase } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const audiences = [
  {
    icon: Users,
    label: "Gamers & Esports Enthusiasts",
    count: 1000,
    suffix: "+",
    color: "purple",
  },
  {
    icon: TrendingUp,
    label: "Startup Founders & Innovators",
    count: 200,
    suffix: "+",
    color: "pink",
  },
  {
    icon: Building2,
    label: "Investors & Venture Firms",
    count: 50,
    suffix: "+",
    color: "cyan",
  },
  {
    icon: Briefcase,
    label: "Tech & Gaming Companies",
    count: 100,
    suffix: "+",
    color: "blue",
  },
  {
    icon: Palette,
    label: "Creators & Developers",
    count: 300,
    suffix: "+",
    color: "green",
  },
  {
    icon: GraduationCap,
    label: "Students & Young Professionals",
    count: 500,
    suffix: "+",
    color: "orange",
  },
];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Audience() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background with Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/20 to-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1cnN8ZW58MXx8fHwxNzY2NTE5MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Young Entrepreneurs"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

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
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-xl border border-cyan-500/30 rounded-full px-6 py-2">
              <span className="text-cyan-400 uppercase tracking-wider text-sm">Expected Attendance</span>
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Who's Coming?
          </h2>
          
          {/* Animated Total Count */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative inline-block mb-8"
          >
            <div className="absolute inset-0 blur-3xl bg-cyan-600/30" />
            <div className="relative bg-gradient-to-r from-cyan-900/60 to-purple-900/60 backdrop-blur-xl border-2 border-cyan-500/50 rounded-3xl px-12 py-8">
              <p className="text-6xl md:text-8xl bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-2">
                1,000 – 3,000+
              </p>
              <p className="text-xl text-cyan-300 uppercase tracking-wider">Total Attendees</p>
            </div>
          </motion.div>
          
          <p className="text-xl md:text-2xl text-gray-300">
            A diverse ecosystem of gaming's brightest minds and biggest dreamers
          </p>
        </motion.div>

        {/* Bento Grid for Audience Segments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${audience.color}-600/20 to-${audience.color}-900/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`} />
              
              <div className={`relative bg-gradient-to-br from-${audience.color}-900/30 to-black/80 backdrop-blur-xl border border-${audience.color}-500/30 rounded-2xl p-8 h-full group-hover:border-${audience.color}-500/60 transition-all duration-300`}>
                {/* Icon with Glow */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`bg-gradient-to-br from-${audience.color}-600/20 to-${audience.color}-900/20 p-4 rounded-2xl inline-block mb-4 group-hover:shadow-lg group-hover:shadow-${audience.color}-500/50 transition-all`}
                >
                  <audience.icon className={`w-10 h-10 text-${audience.color}-400`} />
                </motion.div>
                
                {/* Count with Animation */}
                <p className={`text-5xl md:text-6xl mb-3 bg-gradient-to-r from-${audience.color}-300 to-${audience.color}-500 bg-clip-text text-transparent`}>
                  <AnimatedCounter target={audience.count} suffix={audience.suffix} />
                </p>
                
                {/* Label */}
                <p className="text-lg text-gray-200 leading-tight">{audience.label}</p>

                {/* Hover Effect Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${audience.color}-500 to-transparent rounded-b-2xl`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-cyan-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <motion.p 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl md:text-6xl text-cyan-400 mb-3"
                >
                  100%
                </motion.p>
                <p className="text-gray-300 text-lg">Engagement Rate</p>
                <p className="text-sm text-gray-500 mt-1">Every attendee participates</p>
              </div>
              <div>
                <motion.p 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl md:text-6xl text-purple-400 mb-3"
                >
                  6+
                </motion.p>
                <p className="text-gray-300 text-lg">Experiences per Person</p>
                <p className="text-sm text-gray-500 mt-1">Multiple touchpoints</p>
              </div>
              <div>
                <motion.p 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-5xl md:text-6xl text-pink-400 mb-3"
                >
                  24+
                </motion.p>
                <p className="text-gray-300 text-lg">Countries Represented</p>
                <p className="text-sm text-gray-500 mt-1">Pan-African & Global</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
