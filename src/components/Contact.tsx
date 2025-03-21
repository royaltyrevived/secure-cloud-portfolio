
import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

type ContactItemProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
};

const ContactItem = ({ icon, title, value, href }: ContactItemProps) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-xl border border-slate-100 shadow-sm transition-all hover:shadow">
    <div className="p-3 mb-4 bg-primary/10 text-primary rounded-lg">
      {icon}
    </div>
    <h3 className="font-medium mb-2">{title}</h3>
    {href ? (
      <a
        href={href}
        className="text-primary hover:text-primary/80 transition-colors"
      >
        {value}
      </a>
    ) : (
      <span className="text-slate-600">{value}</span>
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
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600">
            Feel free to reach out for opportunities, collaborations, or questions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};

export default Contact;
