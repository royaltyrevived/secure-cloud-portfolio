
import { useEffect, useRef } from 'react';
import { Shield, Cloud, Server, UserCheck } from 'lucide-react';

const AboutFeature = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string 
}) => (
  <div className="flex flex-col items-start p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-100 shadow-sm hover:shadow transition-all">
    <div className="p-3 rounded-lg bg-primary/10 text-primary mb-4">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutRef.current?.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Implemented security controls that reduced threats by 35%, ensuring HiTrust, HIPAA, and ISO 27001 compliance.'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Designed scalable AWS architectures, optimizing performance by 30% while cutting costs by 25%.'
    },
    {
      icon: Server,
      title: 'DevOps & Automation',
      description: 'Automated deployments using Terraform, AWS CloudFormation, and GitHub Actions, improving CI/CD efficiency by 40%.'
    },
    {
      icon: UserCheck,
      title: 'Leadership & Management',
      description: 'Led IT teams and managed network & system administrators, optimizing operations and enforcing robust security policies.'
    }
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 section-fade-in bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            IT Security Professional with Cloud Expertise
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            With over 4 years of specialized experience, I've enhanced security postures, 
            optimized cloud environments, and led IT teams to drive operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <AboutFeature 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-slate-700 leading-relaxed">
            As a Chief Information Security Officer (CISO) at Novelty Technology, I spearheaded
            HiTrust certification efforts, reduced security threats, and improved system resilience
            through risk assessments, penetration testing, and compliance enforcement. I also led
            cloud security initiatives, ensuring 100% audit readiness and implementing BCP & DRP
            strategies to minimize downtime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
