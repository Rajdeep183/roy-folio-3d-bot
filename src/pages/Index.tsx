import { Suspense, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { SimpleScene3D } from '../components/3d/SimpleScene3D';
import { Navigation } from '../components/Navigation';
import { AboutSection } from '../components/sections/AboutSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { GripVertical, SlidersHorizontal } from 'lucide-react';

type SectionKey = 'about' | 'projects' | 'contact';

const Index = () => {
  const [sectionOrder, setSectionOrder] = useState<SectionKey[]>(['about', 'projects', 'contact']);
  const [visibleSections, setVisibleSections] = useState<Record<SectionKey, boolean>>({
    about: true,
    projects: true,
    contact: true,
  });
  const [draggingSection, setDraggingSection] = useState<SectionKey | null>(null);
  const [showEditor, setShowEditor] = useState(false);

  const sectionComponents = useMemo(
    () => ({
      about: <AboutSection key="about" />,
      projects: <ProjectsSection key="projects" />,
      contact: <ContactSection key="contact" />,
    }),
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsMainContentVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Helmet>
        <title>Rajdeep Roy - Software Developer | Machine Learning Engineer | Data Science Portfolio</title>
        <meta name="description" content="Official portfolio of Rajdeep Roy - Software Developer, ML Engineer, and Data Science enthusiast from VIT Vellore." />
      </Helmet>
      <AnimatePresence mode="wait">
        {!isMainContentVisible ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="min-h-screen bg-background relative overflow-hidden"
          >
            <Navigation />
            <section id="home" className="relative min-h-screen border-b border-border/60">
              <div className="absolute inset-0 z-0 opacity-30 dark:opacity-40">
                <Canvas
                  camera={{ position: [0, 0, 10], fov: 75 }}
                  gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
                  dpr={[1, 2]}
                >
                  <Suspense fallback={null}>
                    <SimpleScene3D />
                  </Suspense>
                </Canvas>
              </div>

              <div className="relative z-20 flex items-center justify-center min-h-screen px-6">
                <div className="text-center text-foreground max-w-3xl">
                  <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">Portfolio</p>
                  <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">Rajdeep Roy</h1>
                  <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                    Machine learning engineer and software developer focused on practical, reliable products.
                  </p>
                  <div className="flex gap-3 justify-center flex-wrap">
                    <a href="https://www.linkedin.com/in/rajdeep-roy-4086a2274/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90">
                      LinkedIn
                    </a>
                    <a href="https://github.com/Rajdeep183" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-border bg-card text-card-foreground rounded-full text-sm font-medium hover:bg-accent">
                      GitHub
                    </a>
                    <a href="https://docs.google.com/document/d/1XUs4nQxRFyKGnd96vhWwu5U9xHkN3WhGlM8BjMkGsMQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-border bg-card text-card-foreground rounded-full text-sm font-medium hover:bg-accent">
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
            <ChatBot />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Index;
