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
  { id: 7, src: '/gallery/gallery_7.jpg', alt: 'Nexus' },
  { id: 8, src: '/gallery/gallery_8.jpg', alt: 'Development' },
  { id: 9, src: '/gallery/gallery_9.jpg', alt: 'Research' },
  { id: 10, src: '/gallery/gallery_10.jpg', alt: 'Breakthrough' },
  { id: 11, src: '/gallery/gallery_11.jpg', alt: 'Breakthrough' },
  { id: 12, src: '/gallery/gallery_12.jpg', alt: 'Breakthrough' },
  { id: 13, src: '/gallery/gallery_13.jpg', alt: 'Breakthrough' },
  { id: 14, src: '/gallery/gallery_14.jpg', alt: 'Breakthrough' },
  { id: 15, src: '/gallery/gallery_15.jpg', alt: 'Breakthrough' },
];

export const Gallery: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.98, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} id="gallery" className="max-w-7xl w-full py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Technical Grid */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="flex flex-col gap-16 relative z-10">
        {/* Section Header - Cinematic Style */}
        <div className="text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.4em] shadow-[0_0_30px_rgba(var(--primary-rgb),0.05)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Event gallary
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black font-display uppercase italic tracking-tighter text-white leading-none"
          >
            Digital <span className="text-gradient">Archives</span>
          </motion.h2>

          <div className="flex items-center justify-center gap-6 max-w-lg mx-auto">
            <div className="h-px flex-1 bg-linear-to-r from-transparent to-primary/40"></div>
            <p className="text-white/40 text-[10px] font-mono uppercase tracking-[0.5em] font-medium italic">
              Record_ID: FN_GAL_2026
            </p>
            <div className="h-px flex-1 bg-linear-to-l from-transparent to-primary/40"></div>
          </div>
        </div>

        {/* Cinematic Gallery Viewport */}
        <motion.div 
          style={{ scale, opacity }}
          className="relative group p-1 rounded-[4rem] border border-white/5 bg-black/20 backdrop-blur-2xl overflow-hidden"
        >
          {/* Corner Brackets */}
          <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-primary/30 z-20" />
          <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-primary/30 z-20" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-primary/30 z-20" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-primary/30 z-20" />

          {/* Technical Info Bar - Top */}
          <div className="absolute top-0 inset-x-0 h-14 border-b border-white/5 bg-black/40 backdrop-blur-xl z-20 px-12 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <div className="text-[10px] font-mono text-primary/60 uppercase tracking-[0.3em]">System::Active</div>
            </div>
            <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] font-black italic">
              ARCHIVE_SECTOR_07 // INFRARED_SCAN
            </div>
          </div>

          {/* Dome Gallery Core */}
          <div className="w-full h-[700px] overflow-hidden relative pointer-events-auto">
            <DomeGallery 
              images={galleryImages}
              fit={1.0}
              minRadius={800}
              maxVerticalRotationDeg={25}
              segments={14}
              dragDampening={1.5}
              grayscale={false}
              imageBorderRadius="1rem"
              openedImageWidth="500px"
              openedImageHeight="650px"
            />
            
            {/* Interaction Instruction Overlay */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-40 pointer-events-none">
              <div className="px-8 py-3 rounded-full border border-primary/20 bg-black/80 backdrop-blur-xl text-primary text-[10px] uppercase font-black tracking-[0.5em] shadow-[0_0_40px_rgba(var(--primary-rgb),0.2)]">
                ORBITAL_SEARCH
              </div>
              <p className="text-white/20 text-[8px] font-mono uppercase tracking-[0.4em]">MOVE_MOUSE_TO_VIGIL</p>
            </div>
          </div>

          {/* Lens Flare Decorative */}
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-1/2 right-0 w-64 h-64 bg-primary/10 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};