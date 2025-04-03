
import { useEffect, useRef } from 'react';

const TechLogos = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          containerRef.current?.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const logos = [
    { name: 'AWS', src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Azure', src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg' },
    { name: 'Terraform', src: 'https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg' },
    { name: 'Docker', src: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg' },
    { name: 'Linux', src: 'https://www.vectorlogo.zone/logos/linux/linux-icon.svg' },
    { name: 'GitHub', src: 'https://www.vectorlogo.zone/logos/github/github-icon.svg' },
    { name: 'Python', src: 'https://www.vectorlogo.zone/logos/python/python-icon.svg' },
    { name: 'Cisco', src: 'https://www.vectorlogo.zone/logos/cisco/cisco-ar21.svg' },
    { name: 'Windows', src: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg' },
    { name: 'Bash', src: 'https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg' },
    { name: 'PowerShell', src: 'https://learn.microsoft.com/en-us/windows/images/powershell.png' },
    { name: 'Kubernetes', src: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg' }
  ];

  return (
    <div ref={containerRef} className="section-fade-in py-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center justify-center">
          {logos.map((logo) => (
            <div 
              key={logo.name} 
              className="flex flex-col items-center bg-black/50 backdrop-blur-sm rounded-lg p-4 transition-transform hover:scale-110 border border-primary/20"
            >
              <img 
                src={logo.src} 
                alt={`${logo.name} logo`} 
                className="h-12 w-12 object-contain mb-2" 
              />
              <span className="text-xs font-medium text-cyan-400">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechLogos;
