
import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ContactItemProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
};

const ContactItem = ({ icon, title, value, href }: ContactItemProps) => (
  <div className="flex flex-col items-center p-6 glass-panel rounded-xl transition-all hover:shadow">
    <div className="p-3 mb-4 bg-primary/10 text-primary rounded-lg">
      {icon}
    </div>
    <h3 className="font-medium mb-2 text-white">{title}</h3>
    {href ? (
      <a
        href={href}
        className="text-primary hover:text-primary/80 transition-colors"
        target={href.startsWith('http') ? "_blank" : undefined}
        rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
      >
        {value}
      </a>
    ) : (
      <span className="text-cyan-300">{value}</span>
    )}
  </div>
);

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contactRef.current?.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" ref={contactRef} className="py-20 section-fade-in">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contact
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-cyan-400">
            Feel free to reach out for opportunities, collaborations, or questions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <ContactItem
            icon={<Mail className="h-6 w-6" />}
            title="Email"
            value="mallasusan19@gmail.com"
            href="mailto:mallasusan19@gmail.com"
          />
          <ContactItem
            icon={<Phone className="h-6 w-6" />}
            title="Phone"
            value="+977 9851315356"
            href="tel:+9779851315356"
          />
          <ContactItem
            icon={<MapPin className="h-6 w-6" />}
            title="Location"
            value="Kathmandu, Nepal"
          />
        </div>

        <div className="max-w-md mx-auto text-center mb-16">
          <h3 className="text-xl font-medium mb-4 text-white">Connect with me</h3>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 text-primary border-primary hover:text-primary/80 hover:bg-black/40"
              asChild
            >
              <a href="mailto:mallasusan19@gmail.com">
                <Mail className="h-5 w-5" />
                Send Email
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 text-primary border-primary hover:text-primary/80 hover:bg-black/40"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/susan-malla-b72122201/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-medium mb-8 text-white text-center">Certifications</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="glass-panel p-6 rounded-xl transition-all hover:shadow">
              <img 
                src="/lovable-uploads/4b75a4cb-d759-41aa-8cf5-de34bf0738dd.png"
                alt="HIPAA Compliant"
                className="w-40 h-auto object-contain"
              />
            </div>
            
            <a 
              href="https://www.credly.com/badges/0014f03c-d0b2-414c-a1c1-e65f931803a1/linked_in_profile" 
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-xl transition-all hover:shadow flex items-center justify-center"
            >
              <img 
                src="/lovable-uploads/934c2894-e4c5-4d5a-8a48-aca98fd66233.png" 
                alt="ISO 27001:2022 Lead Auditor" 
                className="w-40 h-40 object-contain" 
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
