
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type SkillCategory = {
  name: string;
  skills: string[];
};

const SkillTag = ({ skill, index }: { skill: string; index: number }) => (
  <div 
    className={cn(
      "skill-tag py-2 px-4 rounded-lg font-medium text-sm bg-black/50 border border-primary/20 shadow-sm",
      "hover:border-primary/40 hover:bg-black/70"
    )}
    style={{ 
      opacity: 0,
      animation: 'fade-in 0.5s ease-out forwards',
      animationDelay: `${100 + index * 30}ms`
    }}
  >
    {skill}
  </div>
);

const SkillCategory = ({ category, index }: { category: SkillCategory; index: number }) => (
  <div 
    className="mb-10"
    style={{ 
      opacity: 0,
      animation: 'fade-up 0.5s ease-out forwards',
      animationDelay: `${index * 100}ms`
    }}
  >
    <h3 className="text-xl font-medium mb-4 text-gradient">{category.name}</h3>
    <div className="flex flex-wrap gap-3">
      {category.skills.map((skill, idx) => (
        <SkillTag key={skill} skill={skill} index={idx} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skillsRef.current?.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      name: 'Cloud & Infrastructure',
      skills: [
        'AWS', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 
        'Infrastructure Solution Architecture', 'SSL Management'
      ]
    },
    {
      name: 'DevOps & Automation',
      skills: [
        'GitHub CI/CD', 'Linux', 'Bash', 'Windows Server', 
        'New Relic', 'Monitoring and Alert Notification'
      ]
    },
    {
      name: 'Security & Compliance',
      skills: [
        'ISO 27001:2022', 'HiTrust Readiness', 'Wazuh', 'BurpSuite', 
        'Manual Security Testing', 'Endpoint Security Engineer'
      ]
    },
    {
      name: 'Networking & Administration',
      skills: [
        'Cisco', 'Firewalls', 'VPN', 'Load Balancing', 'VLAN', 
        'DNS', 'DHCP'
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={skillsRef} 
      className="py-20 section-fade-in bg-gradient-to-b from-background to-black"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Skills
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 matrix-code">
            Technical Expertise
          </h2>
          <p className="text-lg text-cyan-400">
            Specialized skills in IT Security, Cloud Engineering, and Infrastructure Management.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
            {skillCategories.map((category, index) => (
              <SkillCategory key={category.name} category={category} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
