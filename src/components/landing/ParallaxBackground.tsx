import { motion, useScroll, useTransform } from 'framer-motion';

const bgImages = [
  { url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=400&auto=format&fit=crop', x: '10%', y: '15%', size: '200px', delay: 0 },
  { url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop', x: '85%', y: '25%', size: '180px', delay: 0.2 },
  { url: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=400&auto=format&fit=crop', x: '5%', y: '60%', size: '220px', delay: 0.4 },
  { url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400&auto=format&fit=crop', x: '80%', y: '75%', size: '190px', delay: 0.1 },
  { url: 'https://images.unsplash.com/photo-1496024840928-4c417bf2217f?q=80&w=400&auto=format&fit=crop', x: '45%', y: '85%', size: '160px', delay: 0.3 },
];

export function ParallaxBackground() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {bgImages.map((img, i) => {
        // Create individual scroll transforms for each image
        const yMove = useTransform(
          scrollYProgress, 
          [0, 1], 
          [0, (i % 2 === 0 ? -300 : -500)] // Different speeds for different images
        );
        
        const opacity = useTransform(
          scrollYProgress,
          [0, 0.2, 0.8, 1],
          [0.15, 0.2, 0.2, 0] // Fade in and then fade out at the very end
        );

        return (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              left: img.x,
              top: img.y,
              width: img.size,
              height: img.size,
              y: yMove,
              opacity: opacity,
            }}
            initial={{ scale: 0.8, rotate: i * 10 }}
            animate={{ 
              scale: 1, 
              rotate: i * 10 + 5,
              transition: { duration: 1, delay: img.delay } 
            }}
          >
            <div className="w-full h-full rounded-[2rem] overflow-hidden border border-white/20 dark:border-white/5 shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
              <img 
                src={img.url} 
                alt="" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
            </div>
          </motion.div>
        );
      })}
      
      {/* Dynamic atmospheric blurs that also move */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
        className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -400]) }}
        className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-secondary/10 blur-[150px] rounded-full"
      />
    </div>
  );
}
