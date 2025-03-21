
import { useEffect, useRef } from 'react';
import { ChevronUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footerRef.current?.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className="pt-12 pb-8 bg-slate-50 border-t border-slate-100 section-fade-in">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center">
          <a
            href="#"
            className="inline-flex items-center justify-center p-3 rounded-full bg-white shadow-md hover:shadow-lg mb-8 transition-all"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6 text-primary" />
          </a>

          <p className="text-gradient font-medium text-xl mb-6">Susan Malla</p>

          <div className="flex space-x-4 mb-8">
            <a
              href="https://github.com/susanmalla"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              aria-label="Github"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/susan-malla"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:mallasusan19@gmail.com"
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 mb-6">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Susan Malla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
