
import { useEffect, useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

type ExperienceItemProps = {
  position: string;
  company: string;
  location: string;
  period: string;
  description: React.ReactNode;
};

const ExperienceItem = ({ 
  position, 
  company, 
  location, 
  period, 
  description 
}: ExperienceItemProps) => (
  <div className="experience-card mb-10 rounded-xl bg-white border border-slate-100 shadow-sm p-6 md:p-8">
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
      <div>
        <h3 className="text-xl font-medium mb-1">{position}</h3>
        <div className="text-lg text-primary font-medium mb-2">{company}</div>
      </div>
      <div className="flex flex-col md:items-end mt-2 md:mt-0">
        <div className="flex items-center text-slate-500 mb-1">
          <Calendar className="h-4 w-4 mr-1.5" />
          <span className="text-sm">{period}</span>
        </div>
        <div className="flex items-center text-slate-500">
          <MapPin className="h-4 w-4 mr-1.5" />
          <span className="text-sm">{location}</span>
        </div>
      </div>
    </div>
    <div className="text-slate-600 leading-relaxed">
      {description}
    </div>
  </div>
);

const Experience = () => {
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          experienceRef.current?.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" ref={experienceRef} className="py-20 section-fade-in">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Professional Journey
          </h2>
          <p className="text-lg text-slate-600">
            My career path in IT Security, Cloud Engineering, and Infrastructure Management.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ExperienceItem
            position="Chief Information Security Officer"
            company="Novelty Technology"
            location="Charlotte, NC"
            period="01/2024 - Present"
            description={
              <>
                <h4 className="text-md font-medium mb-2 mt-4">Security & Compliance</h4>
                <ul className="list-disc pl-5 mb-4 space-y-1.5">
                  <li>Reduced security threats by 35% through comprehensive risk and vulnerability assessments on AWS-hosted applications.</li>
                  <li>Enhanced AWS security posture by implementing IAM best practices, VPC security, and AWS Shield for DDoS protection.</li>
                  <li>Implemented AWS GuardDuty and AWS Security Hub, improving threat detection and response by 50%.</li>
                  <li>Spearheaded HIPAA and ISO 27001:2022 compliance efforts ensuring 100% audit approval.</li>
                </ul>
                
                <h4 className="text-md font-medium mb-2">Platform Engineering & DevOps on AWS</h4>
                <ul className="list-disc pl-5 mb-4 space-y-1.5">
                  <li>Designed scalable AWS architectures, optimizing performance by 30% while cutting costs by 25% using EC2, ECS.</li>
                  <li>Automated AWS deployments using Terraform, AWS CloudFormation, and GitHub Actions, improving CI/CD efficiency by 40%.</li>
                  <li>Configured AWS Systems Manager (SSM) for secure, agentless remote access to AWS EC2 instances.</li>
                </ul>
              </>
            }
          />

          <ExperienceItem
            position="System and Security Administrator"
            company="Novelty Technology"
            location="Charlotte, NC"
            period="11/2022 - 01/2024"
            description={
              <>
                <h4 className="text-md font-medium mb-2 mt-4">Cloud Security & Compliance (AWS)</h4>
                <ul className="list-disc pl-5 mb-4 space-y-1.5">
                  <li>Developed and enforced security policies and procedures, ensuring HiTrust, HIPAA, and ISO 27001:2022 compliance.</li>
                  <li>Conducted grey-box security testing on AWS-hosted applications using tools like BurpSuite, Nessus, Snyk, and others.</li>
                  <li>Implemented AWS Security Hub, AWS GuardDuty, and AWS IAM policies, reducing security risks by 30%.</li>
                </ul>
                
                <h4 className="text-md font-medium mb-2">DevOps & Cloud Infrastructure (AWS)</h4>
                <ul className="list-disc pl-5 mb-4 space-y-1.5">
                  <li>Designed and managed AWS environments, leveraging EC2, ECR, S3, IAM, and VPC to build secure and scalable cloud infrastructure.</li>
                  <li>Automated deployments using GitHub Actions, AWS CodeBuild, and AWS CodePipeline, improving CI/CD efficiency by 40%.</li>
                </ul>
              </>
            }
          />

          <ExperienceItem
            position="IT Manager/Systems Administrator"
            company="Information Technology Concerns Pvt. Ltd"
            location="Kathmandu, Nepal"
            period="07/2020 - 10/2022"
            description={
              <>
                <h4 className="text-md font-medium mb-2 mt-4">IT Infrastructure & System Administration</h4>
                <ul className="list-disc pl-5 mb-4 space-y-1.5">
                  <li>Managed on-premises and cloud-based IT infrastructure, improving system uptime to 99.9% through proactive monitoring and maintenance.</li>
                  <li>Led network administration projects, implementing MikroTik, Cisco, and Sophos firewalls, improving network security and performance.</li>
                  <li>Designed and deployed Hyper-V virtualization solutions, optimizing resource utilization and reducing hardware costs by 30%.</li>
                </ul>
                
                <h4 className="text-md font-medium mb-2">IT Operations & Leadership</h4>
                <ul className="list-disc pl-5 mb-4 space-y-1.5">
                  <li>Supervised Network and System Administrators, providing technical mentorship and problem-solving strategies.</li>
                  <li>Spearheaded IT policy development and SOP implementation, ensuring compliance with industry best practices.</li>
                  <li>Managed IT procurement and vendor negotiations, optimizing IT budget and reducing costs by 20%.</li>
                </ul>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
