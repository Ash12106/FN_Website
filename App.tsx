import React, { useRef, Suspense } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PortalCard } from './components/PortalCard';
import { Footer } from './components/Footer';
import { PortalConfig } from './types';
import Galaxy from './components/Galaxy';
import { JoinModal } from './components/JoinModal';
import { Preloader } from './components/Preloader';
import { initializeSecurity } from './components/Security';
import { 
  getDeviceType, 
  getGalaxyOptimizations, 
  isMobileDevice,
  prefersReducedMotion,
  setupLazyLoading
} from './utils/mobile';

// Code-split heavy components for better initial load
const Team = React.lazy(() => import('./components/Team').then(m => ({ default: m.Team })));
const Focus = React.lazy(() => import('./components/Focus').then(m => ({ default: m.Focus })));
const Gallery = React.lazy(() => import('./components/Gallery').then(m => ({ default: m.Gallery })));
const Support = React.lazy(() => import('./components/Support'));

// Loading skeleton component
const ComponentSkeleton: React.FC = () => (
  <div className="w-full h-64 bg-gradient-to-r from-primary/10 to-transparent rounded-lg animate-pulse" />
);

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
  const [loading, setLoading] = React.useState(true);
  const [isJoinModalOpen, setIsJoinModalOpen] = React.useState(false);
  const [deviceType, setDeviceType] = React.useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const isMobile = deviceType === 'mobile';
  const reducedMotion = prefersReducedMotion();

  React.useEffect(() => {
    // Initialize security measures
    initializeSecurity();

    // Detect device type
    setDeviceType(getDeviceType());

    // Setup lazy loading for images
    setupLazyLoading();

    // Force scroll to top on load/refresh
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    // Artificial 3.5s delay for systems check (reduced to 2.5s on mobile)
    const delay = isMobile ? 2500 : 3500;
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    // Handle resize for responsive adjustments
    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [portalFilter, setPortalFilter] = React.useState<'none' | 'student' | 'faculty'>('none');
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Reduce spring damping on mobile for smoother performance
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: isMobile ? 50 : 100,
    damping: isMobile ? 20 : 30,
    restDelta: 0.001
  });

  // Adjust parallax values for mobile
  const parallaxMultiplier = isMobile ? 0.5 : 1;
  const yAbout = useTransform(smoothProgress, [0, 0.5], [0, -50 * parallaxMultiplier]);
  const yTeam = useTransform(smoothProgress, [0, 0.7], [0, -100 * parallaxMultiplier]);
  const yGallery = useTransform(smoothProgress, [0.1, 0.75], [0, -110 * parallaxMultiplier]);
  const yFocus = useTransform(smoothProgress, [0.1, 0.8], [0, -120 * parallaxMultiplier]);
  const ySupport = useTransform(smoothProgress, [0.1, 1], [0, -140 * parallaxMultiplier]);
  const yHero = useTransform(smoothProgress, [0.1, 1], [0, -150 * parallaxMultiplier]);
  const yPortals = useTransform(smoothProgress, [0.3, 1], [0, -200 * parallaxMultiplier]);

  // Get optimized galaxy settings
  const galaxySettings = getGalaxyOptimizations();

  return (
    <div ref={containerRef} className="min-h-screen bg-background-dark text-white selection:bg-primary/30 relative overflow-x-hidden">
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      {/* Background Decor Layer - Technical Grid and Data Streams */}
      <div className="fixed inset-0 z-1 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#D4AF370a,transparent)]"></div>
      </div>

      {/* Galaxy Background Layer */}
      {!reducedMotion && (
        <motion.div 
          style={{ 
            scale: useTransform(smoothProgress, [0, 1], [1, 1.1]),
            opacity: useTransform(smoothProgress, [0, 0.5, 1], [1, 0.8, 1])
          }}
          className="fixed inset-0 z-0 pointer-events-auto hidden md:block"
        >
          <div className="w-full h-full relative">
            <Galaxy
              starSpeed={galaxySettings.renderQuality * 0.5}
              density={galaxySettings.density}
              hueShift={140}
              speed={galaxySettings.renderQuality}
              glowIntensity={galaxySettings.glowIntensity}
              saturation={0}
              mouseRepulsion={!isMobile}
              repulsionStrength={galaxySettings.renderQuality * 2}
              twinkleIntensity={galaxySettings.glowIntensity}
              rotationSpeed={galaxySettings.renderQuality * 0.1}
              transparent
            />
          </div>
        </motion.div>
      )}

      {/* Mobile-optimized background (simpler, lower performance cost) */}
      {isMobile && (
        <div className="fixed inset-0 z-0 pointer-events-none md:hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background-dark to-background-dark" />
        </div>
      )}

      {/* Main Content Layer - pointer-events-none allows mouse to pass through to background events */}
      <div className="relative z-10 pointer-events-none min-h-screen">
        <div className="pointer-events-auto">
          <Header onJoinClick={() => setIsJoinModalOpen(true)} />
        </div>
        
        <main className="relative pt-20 md:pt-24 pb-20 px-4 flex flex-col items-center">
          <motion.div 
            style={{ y: !reducedMotion ? yHero : 0 }}
            className="pointer-events-auto mb-16"
          >
            <Hero onJoinClick={() => setIsJoinModalOpen(true)} />
          </motion.div>
          
          {/* About Section */}
          <motion.section 
            id="about" 
            style={{ y: !reducedMotion ? yAbout : 0 }}
            className="pointer-events-auto w-full flex justify-center mb-32 px-4 scroll-mt-24"
          >
            <About />
          </motion.section>

          <motion.section 
            id="focus" 
            style={{ y: !reducedMotion ? yFocus : 0 }}
            className="pointer-events-auto w-full flex justify-center mb-32 px-4 scroll-mt-24"
          >
            <Suspense fallback={<ComponentSkeleton />}>
              <Focus onJoinClick={() => setIsJoinModalOpen(true)} />
            </Suspense>
          </motion.section>

          <motion.section 
            id="team" 
            style={{ y: !reducedMotion ? yTeam : 0 }}
            className="pointer-events-auto w-full flex justify-center mb-32 px-4 scroll-mt-24"
          >
            <Suspense fallback={<ComponentSkeleton />}>
              <Team />
            </Suspense>
          </motion.section>

          <motion.section 
            id="gallery" 
            style={{ y: !reducedMotion ? yGallery : 0 }}
            className="pointer-events-auto w-full flex justify-center mb-32 px-4 scroll-mt-24"
          >
            <Suspense fallback={<ComponentSkeleton />}>
              <Gallery />
            </Suspense>
          </motion.section>

          <motion.section 
            id="support" 
            style={{ y: !reducedMotion ? ySupport : 0 }}
            className="pointer-events-auto w-full flex justify-center mb-32 px-4 scroll-mt-24"
          >
            <Suspense fallback={<ComponentSkeleton />}>
              <Support />
            </Suspense>
          </motion.section>

          {/* Dual Portals Grid - Hidden by default */}
          {portalFilter !== 'none' && (
            <motion.section 
              id="portals" 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ y: !reducedMotion ? yPortals : 0 }}
              className="max-w-2xl w-full grid grid-cols-1 gap-8 lg:gap-12 items-stretch pointer-events-auto mb-32 scroll-mt-24 mx-auto"
            >
              {portalFilter === 'student' && (
                <PortalCard config={studentConfig} delay={0} />
              )}
              {portalFilter === 'faculty' && (
                <PortalCard config={facultyConfig} delay={0} />
              )}
            </motion.section>
          )}
        </main>
        
        <div className="pointer-events-auto">
          <Footer />
        </div>
      </div>

      <JoinModal 
        isOpen={isJoinModalOpen} 
        onClose={() => setIsJoinModalOpen(false)} 
        onSelectRole={(role) => {
          setPortalFilter(role);
          setTimeout(() => {
            document.getElementById('portals')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
      />
    </div>
  );
};

export default App;




