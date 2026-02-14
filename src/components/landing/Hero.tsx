import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Target, MessageSquare, BarChart3, Users } from 'lucide-react';

export function Hero() {
  const { setShowAuthModal, setAuthMode } = useAuth();

  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600&auto=format&fit=crop',
      label: 'Fashion',
      delay: 0.4
    },
    {
      url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop',
      label: 'Tech',
      delay: 0.5
    },
    {
      url: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=600&auto=format&fit=crop',
      label: 'Travel',
      delay: 0.6
    },
    {
      url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop',
      label: 'Lifestyle',
      delay: 0.7
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-32 pb-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-50" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-10 shadow-[0_0_20px_rgba(33,212,253,0.1)]">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">India's Premier Creator Network</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-display font-bold mb-8 leading-[1] tracking-tighter"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Scale Your Influence <br />
          <span className="gradient-text drop-shadow-sm italic">Faster Than Ever</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Connect with elite brands through <span className="text-foreground font-bold">AI-driven matching</span>. 
          Manage campaigns, approvals, and payments in one seamless workspace.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button
            size="lg"
            className="gradient-bg border-0 text-lg px-10 py-7 font-bold rounded-2xl shadow-[0_10px_30px_rgba(0,184,212,0.3)] hover:shadow-[0_15px_40px_rgba(0,184,212,0.45)] hover:scale-105 transition-all duration-300"
            onClick={() => { setAuthMode('signup'); setShowAuthModal(true); }}
          >
            Get Started Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="text-lg px-10 py-7 font-bold rounded-2xl hover:bg-white dark:hover:bg-muted transition-all duration-300"
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Marketplace
          </Button>
        </motion.div>

        {/* Dynamic Image Grid - The "Images under text" feature */}
        <div className="w-full max-w-[1400px] mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 overflow-hidden rounded-[3rem] p-4 bg-gray-50/50 dark:bg-muted/10 border border-border/50 backdrop-blur-sm">
            {heroImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 1.2, 
                  delay: img.delay,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={`relative aspect-[3/4] overflow-hidden rounded-[2.5rem] group ${i % 2 !== 0 ? 'mt-8' : ''}`}
              >
                <img 
                  src={img.url} 
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-white font-display font-bold text-xl">{img.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-12 text-muted-foreground/60"
          >
            {[
              { icon: Target, label: 'Hyper-Targeted' },
              { icon: MessageSquare, label: 'Direct Access' },
              { icon: BarChart3, label: 'Live Insights' },
              { icon: Users, label: 'Vetted Talent' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300">
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
