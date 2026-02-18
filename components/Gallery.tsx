import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import DomeGallery from './DomeGallery';

const galleryImages = [
  { id: 1, src: '/gallery/gallery_1.jpg', alt: 'Innovation' },
  { id: 2, src: '/gallery/gallery_2.jpg', alt: 'Engineering' },
  { id: 3, src: '/gallery/gallery_3.jpg', alt: 'Computing' },
  { id: 4, src: '/gallery/gallery_4.jpg', alt: 'Community' },
  { id: 5, src: '/gallery/gallery_5.jpg', alt: 'Aeronautics' },
  { id: 6, src: '/gallery/gallery_6.jpg', alt: 'Design' },
];

export const Gallery: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} id="gallery" className="max-w-7xl w-full py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="flex flex-col gap-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]"
          >
            Visual Showcase 
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-black font-display uppercase italic tracking-tighter text-white leading-none"
          >
            Innovation <span className="text-gradient">Gallery</span>
          </motion.h2>
          <p className="text-white/40 text-sm md:text-lg italic tracking-[0.25em] font-light max-w-2xl mx-auto pt-4 uppercase">
            EXPLORE OUR INTERACTIVE PANORAMIC DISPLAY OF TECHNICAL BREAKTHROUGHS.
          </p>
        </div>

        {/* Panoramic Gallery Container */}
        <motion.div 
          style={{ scale, opacity }}
          className="w-full h-[600px] rounded-[3rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-3xl relative pointer-events-auto"
        >
          <DomeGallery 
            images={galleryImages}
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale={false}
            openedImageWidth="300px"
            openedImageHeight="400px"
          />
          
          {/* Interaction Instruction */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full border border-primary/20 bg-black/60 backdrop-blur-md text-primary text-[10px] uppercase font-black tracking-[0.4em] pointer-events-none z-40 opacity-50 group-hover:opacity-100 transition-opacity">
            Drag to Rotate • Click to Inspect
          </div>
        </motion.div>
      </div>

      {/* Decorative Line */}
      <div className="mt-32 w-full h-[1px] bg-linear-to-r from-transparent via-white/10 to-transparent relative">
        <div className="absolute left-1/2 -top-2 -translate-x-1/2 w-4 h-4 border border-white/10 rotate-45 bg-black/80"></div>
      </div>
    </section>
  );
};