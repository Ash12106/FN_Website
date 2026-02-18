import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PortalCard } from './components/PortalCard';
import { Footer } from './components/Footer';
import { PortalConfig } from './types';
import Galaxy from './components/Galaxy';
import { JoinModal } from './components/JoinModal';
import { Team } from './components/Team';
import { Focus } from './components/Focus';
import Support from './components/Support';

const studentConfig: PortalConfig = {
  role: 'student',
  title: 'The Innovator',
  subtitle: 'Student Gateway',
  description: 'Forge your legacy. Upload research, collaborate on breakthroughs, and track your patent journey.',
  icon: 'school',
  colorClass: 'primary'
};

const facultyConfig: PortalConfig = {
  role: 'faculty',
  title: 'The Architect',
  subtitle: 'Faculty Gateway',
  description: 'Review the future. Evaluate submissions, mentor innovators, and oversee the intellectual landscape.',
  icon: 'account_balance',
  colorClass: 'secondary'
};

const App: React.FC = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = React.useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax offsets for different sections to create depth
  const yAbout = useTransform(smoothProgress, [0, 0.5], [0, -50]);
  const yTeam = useTransform(smoothProgress, [0, 0.7], [0, -100]);
  const yFocus = useTransform(smoothProgress, [0.1, 0.8], [0, -120]);
  const ySupport = useTransform(smoothProgress, [0.1, 1], [0, -140]);
  const yHero = useTransform(smoothProgress, [0.1, 1], [0, -150]);
  const yPortals = useTransform(smoothProgress, [0.3, 1], [0, -200]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background-dark text-white selection:bg-primary/30 relative overflow-x-hidden">
      {/* Background Decor Layer - Technical Grid and Data Streams */}
      <div className="fixed inset-0 z-1 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#D4AF370a,transparent)]"></div>
      </div>

      {/* Galaxy Background Layer */}
      <motion.div 
        style={{ 
          scale: useTransform(smoothProgress, [0, 1], [1, 1.1]),
          opacity: useTransform(smoothProgress, [0, 0.5, 1], [1, 0.8, 1])
        }}
        className="fixed inset-0 z-0 pointer-events-auto"
      >
        <div className="w-full h-full relative">
          <Galaxy
            starSpeed={0.5}
            density={1}
            hueShift={140}
            speed={1}
            glowIntensity={0.3}
            saturation={0}
            mouseRepulsion
            repulsionStrength={2}
            twinkleIntensity={0.3}
            rotationSpeed={0.1}
            transparent
          />
        </div>
      </motion.div>

      {/* Main Content Layer - pointer-events-none allows mouse to pass through to background events */}
      <div className="relative z-10 pointer-events-none min-h-screen">
        <div className="pointer-events-auto">
          <Header onJoinClick={() => setIsJoinModalOpen(true)} />
        </div>
        
        <main className="relative pt-32 md:pt-40 pb-20 px-4 flex flex-col items-center">
          {/* About Section at Top */}
          <motion.section 
            id="about" 
            style={{ y: yAbout }}
            className="pointer-events-auto w-full flex justify-center mb-16 px-4 scroll-mt-24"
          >
            <About />
          </motion.section>

          <motion.section 
            id="team" 
            style={{ y: yTeam }}
            className="pointer-events-auto w-full flex justify-center mb-32 px-4 scroll-mt-24"
          >
            <Team />
          </motion.section>

          <motion.section 
            id="focus" 
            style={{ y: yFocus }}
            className="pointer-events-auto w-full flex justify-center mb-32 px-4 scroll-mt-24"
          >
            <Focus />
          </motion.section>

          <motion.section 
            id="support" 
            style={{ y: ySupport }}
            className="pointer-events-auto w-full flex justify-center mb-32 px-4 scroll-mt-24"
          >
            <Support />
          </motion.section>

          <motion.div 
            style={{ y: yHero }}
            className="pointer-events-auto mb-16"
          >
            <Hero />
          </motion.div>
          
          {/* Dual Portals Grid */}
          <motion.section 
            id="portals" 
            style={{ y: yPortals }}
            className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch pointer-events-auto scroll-mt-24"
          >
            <PortalCard config={studentConfig} delay={0} />
            <PortalCard config={facultyConfig} delay={200} />
          </motion.section>
        </main>
        
        <div className="pointer-events-auto">
          <Footer />
        </div>
      </div>

      <JoinModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
    </div>
  );
};

export default App;




