import { motion } from 'framer-motion';

interface Service {
  id: string;
  title: string;
  desc: string;
}

const SERVICES: Service[] = [
  { id: '01', title: 'Cinematic AI Videos', desc: 'Stunning high-concept cinematic sequences utilizing text-to-video diffusion pipelines.' },
  { id: '02', title: 'AI Clone Videos', desc: 'Hyper-realistic digital presenter avatars for scaled automated sales funnels.' },
  { id: '03', title: 'Product Videos', desc: 'Cinematic product closeups and action edits to elevate commercial visibility.' },
  { id: '04', title: 'AI Commercials', desc: 'Modern narrative ads using artificial voices, deep scripts, and visual effects.' },
  { id: '05', title: 'UGC Videos', desc: 'Organic social media style assets matching direct-to-consumer tiktok/instagram trends.' },
  { id: '06', title: 'Real Estate Marketing Videos', desc: 'Dynamic space rendering walkthroughs and luxury mock camera guides.' },
  { id: '07', title: 'Startup Videos', desc: 'Captivating founder intros and concept explanations to secure early interest.' },
  { id: '08', title: 'SaaS Demo Videos', desc: 'Crisp software interfaces walkthroughs showing value propositions clearly.' },
  { id: '09', title: 'Business Advertisements', desc: 'Promotional sequences matching modern business corporate guidelines.' },
  { id: '10', title: 'AI Podcast Videos', desc: 'Micro-snippets generation and transcription overlay pipelines for audio creators.' },
  { id: '11', title: 'Promotional Reels', desc: 'Engaging vertical visual formats optimized for maximum social click rates.' },
  { id: '12', title: 'Premium Posters', desc: 'Stunning marketing print graphic designs utilizing diffusion generator tools.' }
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '4rem' }}>
          <span className="section-tag">Services</span>
          <h2 className="section-title">Production Scope</h2>
          <p className="section-desc">
            A comprehensive suite of modern video production services combining filmmaking wisdom with bleeding-edge AI models.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              className="premium-card service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="service-number">{service.id}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
