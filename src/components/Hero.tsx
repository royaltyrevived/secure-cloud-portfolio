
import { useEffect, useRef } from 'react';
import { ChevronDownCircle } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import MatrixBackground from './MatrixBackground';
import TechLogos from './TechLogos';

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
      <MatrixBackground />
      
      <div className="container mx-auto px-6 md:px-12 py-12 flex flex-col items-center text-center z-10">
        <div className="flex flex-col items-center mb-8">
          <Avatar className="h-40 w-40 mb-6 border-4 border-primary shadow-lg">
            <AvatarImage src="/lovable-uploads/ba69bc09-ea55-4b5a-bc87-8fcc1ccd6be6.png" alt="Susan Malla" />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
        </div>
        
        <div 
          className="glass-panel rounded-2xl px-8 py-12 mb-8 w-full max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 tracking-tight matrix-code">
            Susan Malla
          </h1>
          <h2 className="text-xl md:text-2xl text-cyan-400 mb-6 max-w-2xl mx-auto">
            <span className="font-medium text-gradient">Chief Information Security Officer</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Results-driven IT Security and Cloud Engineer with 4+ years of experience in 
            cybersecurity, cloud architecture, DevOps, and IT infrastructure management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a 
              href="#about" 
              className="inline-flex items-center justify-center rounded-lg bg-primary text-black font-medium px-6 py-3 transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-md hover:shadow-lg"
            >
              Learn More
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center rounded-lg bg-black/50 backdrop-blur-sm border border-primary/20 text-primary font-medium px-6 py-3 transition-all hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm hover:shadow-md"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <TechLogos />
        
        <a 
          href="#about" 
          className="absolute bottom-10 animate-pulse-subtle"
          aria-label="Scroll down"
        >
          <ChevronDownCircle className="h-10 w-10 text-primary opacity-80" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
