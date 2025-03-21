
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type SkillCategory = {
  name: string;
  skills: string[];
};

const SkillTag = ({ skill, index }: { skill: string; index: number }) => (
  <div 
    className={cn(
      "skill-tag py-2 px-4 rounded-lg font-medium text-sm bg-white border border-slate-100 shadow-sm",
      "hover:border-primary/20 hover:bg-primary/5"
    )}
    style={{ 
      animationDelay: `${index * 50}ms`,
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
    <h3 className="text-xl font-medium mb-4">{category.name}</h3>
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
      skills: ['AWS EC2', 'AWS ECS', 'AWS S3', 'AWS VPC', 'AWS IAM', 'AWS CloudFront', 'AWS RDS', 'AWS ECR', 'AWS ALB', 'Terraform', 'CloudFormation', 'Azure']
    },
    {
      name: 'DevOps & Automation',
      skills: ['CI/CD', 'GitHub Actions', 'CodeBuild', 'CodePipeline', 'Docker', 'AWS Secrets Manager', 'Linux', 'Windows Server', 'Bash', 'Python', 'PowerShell']
    },
    {
      name: 'Security & Compliance',
      skills: ['HiTrust', 'HIPAA', 'ISO 27001', 'Penetration Testing', 'BurpSuite', 'Nessus', 'Snyk', 'IAM', 'Access Control', 'SIEM', 'Wazuh', 'NewRelic']
    },
    {
      name: 'Networking & Administration',
      skills: ['Firewalls', 'VPN', 'Load Balancing', 'Hyper-V', 'VMware ESXi', 'VLANs', 'DNS', 'DHCP', 'BCP', 'DRP', 'IT Strategy']
    }
  ];

  return (
    <section 
      id="skills" 
      ref={skillsRef} 
      className="py-20 section-fade-in bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Skills
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Technical Expertise
          </h2>
          <p className="text-lg text-slate-600">
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
