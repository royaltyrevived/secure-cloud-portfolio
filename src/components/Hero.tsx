
import { useEffect, useRef } from 'react';
import { ChevronDownCircle } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heroRef.current?.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center hero-bg pt-16 overflow-hidden section-fade-in"
    >
      <div className="container mx-auto px-6 md:px-12 py-12 flex flex-col items-center text-center z-10">
        <div 
          className="glass-panel rounded-2xl px-8 py-12 mb-8 w-full max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 tracking-tight">
            Susan Malla
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-600 mb-6 max-w-2xl mx-auto">
            <span className="font-medium text-gradient">Chief Information Security Officer</span>
          </h2>
          <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Results-driven IT Security and Cloud Engineer with 4+ years of experience in 
            cybersecurity, cloud architecture, DevOps, and IT infrastructure management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a 
              href="#about" 
              className="inline-flex items-center justify-center rounded-lg bg-primary text-white font-medium px-6 py-3 transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-md hover:shadow-lg"
            >
              Learn More
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-800 font-medium px-6 py-3 transition-all hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200 shadow-sm hover:shadow-md"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <a 
          href="#about" 
          className="absolute bottom-10 animate-pulse-subtle"
          aria-label="Scroll down"
        >
          <ChevronDownCircle className="h-10 w-10 text-slate-400 opacity-80" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
