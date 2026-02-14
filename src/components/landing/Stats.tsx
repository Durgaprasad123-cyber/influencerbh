import { motion } from 'framer-motion';
import { Target, ShieldCheck, Zap, Globe, BarChart3, TrendingUp } from 'lucide-react';

const coreStats = [
  { 
    icon: Target, 
    value: '98%', 
    label: 'Match Precision', 
    desc: 'Proprietary AI matching that finds your perfect creator persona.',
    color: 'text-primary'
  },
  { 
    icon: Zap, 
    value: '4.5x', 
    label: 'ROI Boost', 
    desc: 'Average increase in campaign performance across our network.',
    color: 'text-secondary'
  },
  { 
    icon: Globe, 
    value: 'Pan-India', 
    label: 'Local Reach', 
    desc: 'Deep penetration in 22 regional languages and 600+ cities.',
    color: 'text-accent'
  },
];

export function Stats() {
  return (
    <section id="features" className="py-32 relative overflow-hidden bg-gray-50/30 dark:bg-muted/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Platform Intelligence</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight leading-[1.1]">
              Engineered for <span className="gradient-text">Absolute Performance</span>.
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed font-medium max-w-xl">
              Don't leave your brand growth to chance. We combine human creativity with neural network precision to build campaigns that convert.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-lg">Verified Data</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">Every influencer is vetted for audience authenticity and historical ROI.</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-lg">Live Analytics</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">Track every click, comment, and conversion in real-time with our SDK.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-4 relative overflow-hidden rounded-[3rem] border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
                alt="Dashboard Mockup"
                className="rounded-[2.5rem] w-full h-auto shadow-2xl border border-white/20"
              />
              <div className="absolute top-12 left-12 glass-card p-6 rounded-2xl border-white/40 shadow-xl hidden md:block">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Campaign Growth</p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-display font-black text-foreground">+248%</span>
                  <BarChart3 className="w-6 h-6 text-primary mb-1" />
                </div>
              </div>
            </div>
            {/* Background Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[100px] rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {coreStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative p-12 glass-card border-transparent hover:border-primary/20 group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <stat.icon className="w-24 h-24" />
              </div>
              <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4">{stat.label}</p>
              <h3 className="text-6xl font-display font-black mb-6 tracking-tighter">{stat.value}</h3>
              <p className="text-muted-foreground leading-relaxed font-medium">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
