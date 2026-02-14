import { motion } from 'framer-motion';
import { UserPlus, Search, Users, MessageSquare, Star, ArrowRight } from 'lucide-react';

const steps = [
  { 
    icon: UserPlus, 
    title: 'Precision Onboarding', 
    desc: 'Our AI analyzes your brand profile and historical data to build your ideal creator persona.',
    color: 'bg-primary'
  },
  { 
    icon: Search, 
    title: 'Selection Blueprint', 
    desc: 'Define your KPIs and demographics. We handle the heavy filtering and background checks.',
    color: 'bg-secondary'
  },
  { 
    icon: Users, 
    title: 'Neural Matching', 
    desc: 'Our neural engine suggests influencers with 98% audience alignment accuracy.',
    color: 'bg-accent'
  },
  { 
    icon: MessageSquare, 
    title: 'Active Workflow', 
    desc: 'Manage briefs, contracts, and content approvals in one unified, encrypted workspace.',
    color: 'bg-primary'
  },
];

export function ProcessSection() {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-primary rounded-full" />
            <span className="text-xs font-black text-primary uppercase tracking-[0.4em]">The Architecture</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-8">
            Engineered for <br /> <span className="gradient-text italic">Global Scale</span>.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-medium">
            We've distilled complex influencer marketing into a streamlined 4-step process designed for absolute efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
          {/* Background Path */}
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="flex flex-col items-center lg:items-start">
                <div className={`w-16 h-16 rounded-[2.5rem] ${step.color} flex items-center justify-center mb-10 shadow-2xl shadow-primary/20 group-hover:rotate-12 transition-all duration-500 relative z-10`}>
                  <step.icon className="w-7 h-7 text-white" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white dark:bg-card border border-border flex items-center justify-center text-[10px] font-black italic shadow-md">
                    0{i + 1}
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                  {step.desc}
                </p>

                {i < steps.length - 1 && (
                  <div className="lg:hidden mt-8 text-border">
                    <ArrowRight className="w-6 h-6 rotate-90" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-32 p-[2px] rounded-[3rem] bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="bg-white dark:bg-card rounded-[2.9rem] p-16 text-center border border-white/20">
            <h3 className="text-4xl md:text-5xl font-display font-black mb-10 tracking-tighter">Ready to lead the <span className="gradient-text italic">creator revolution?</span></h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="gradient-bg text-white font-black uppercase tracking-widest text-xs px-10 py-6 rounded-2xl shadow-xl shadow-primary/20 hover:shadow-2xl hover:scale-105 transition-all duration-300">Start Onboarding</button>
              <button className="bg-gray-50 dark:bg-muted text-foreground font-black uppercase tracking-widest text-xs px-10 py-6 rounded-2xl border border-border/50 hover:bg-gray-100 transition-all">Request Private Demo</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
