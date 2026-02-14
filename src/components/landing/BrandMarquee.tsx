import { motion } from 'framer-motion';

const brands = [
  'VOGUE', 'ADIDAS', 'NIKE', 'LVMH', 'SAMSUNG', 'APPLE', 'GOOGLE', 'SONY', 'ZARA', 'H&M', 'NETFLIX', 'PIXAR'
];

export function BrandMarquee() {
  return (
    <section className="py-24 border-y border-border/50 overflow-hidden bg-white/20 dark:bg-card/10 backdrop-blur-sm">
      <div className="container mx-auto px-6 mb-12 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-6">
          <p className="text-[9px] font-black text-primary uppercase tracking-[0.4em]">Official Partners & Brand Alliances</p>
        </div>
      </div>
      
      <div className="flex relative items-center group">
        <motion.div 
          className="flex flex-nowrap gap-24 min-w-full px-12"
          animate={{ x: [0, -1500] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <span 
              key={i} 
              className="text-4xl md:text-6xl font-display font-black text-foreground/5 hover:text-primary transition-all duration-700 cursor-default whitespace-nowrap tracking-tighter"
            >
              {brand}
            </span>
          ))}
        </motion.div>
        
        {/* Gradient Mask for Fade */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
}
