
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type SkillCategory = {
  name: string;
  skills: string[];
};

const SkillTag = ({ skill, index }: { skill: string; index: number }) => (
  <div 
    className={cn(
      "skill-tag py-1 px-3 rounded-lg font-medium text-sm bg-black/50 border border-primary/20 shadow-sm",
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
    className="mb-6"
    style={{ 
      opacity: 0,
      animation: 'fade-up 0.5s ease-out forwards',
      animationDelay: `${index * 100}ms`
    }}
  >
    <h3 className="text-xl font-medium mb-3 text-gradient">{category.name}</h3>
    <div className="flex flex-wrap gap-2">
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
        'AWS (EC2, ECS, S3, ECR, VPC, IAM, CloudFront, ALB, RDS)',
        'AWS Secrets Manager',
        'AWS Well-Architected Framework',
        'Azure',
        'Terraform & CloudFormation',
        'Docker'
      ]
    },
    {
      name: 'DevOps & Automation',
      skills: [
        'CI/CD (GitHub Actions, CodeBuild, CodePipeline)',
        'Linux (Ubuntu, CentOS)',
        'Windows Server',
        'Bash',
        'PowerShell',
        'Python',
        'Infrastructure Monitoring',
        'Process Automation',
        'New Relic'
      ]
    },
    {
      name: 'Security & Compliance',
      skills: [
        'ISO 27001:2022',
        'HiTrust Readiness',
        'HIPAA',
        'Wazuh',
        'IAM & Access Control (AWS IAM, Jumpcloud)',
        'Penetration Testing (BurpSuite, Nessus, Snyk)',
        'SIEM & Threat Detection',
        'Manual Security Testing',
        'Incident Response & Forensics',
        'SSL Management',
        'Endpoint Security Engineer'
      ]
    },
    {
      name: 'Networking & Administration',
      skills: [
        'Cisco',
        'Firewalls',
        'VPN',
        'Load Balancing',
        'VLANs',
        'DNS',
        'DHCP',
        'Network Security'
      ]
    },
    {
      name: 'Leadership & Management',
      skills: [
        'Team Leadership & Training',
        'IT Strategy & Budgeting',
        'Monitoring and Alert Notification',
        'IT Policy Development'
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={skillsRef} 
      className="py-12 section-fade-in bg-gradient-to-b from-background to-black"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Skills
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 matrix-code">
            Technical Expertise
          </h2>
          <p className="text-lg text-cyan-400">
            Specialized skills in IT Security, Cloud Engineering, and Infrastructure Management.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
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
