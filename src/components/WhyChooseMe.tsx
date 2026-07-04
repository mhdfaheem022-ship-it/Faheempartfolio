import { motion } from 'framer-motion';
import { Award, Zap, BookOpen, Globe } from 'lucide-react';

interface Reason {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const REASONS: Reason[] = [
  {
    title: 'Premium Quality',
    desc: 'Uncompromising attention to visual fidelity, resolution, audio clarity, and grading to ensure your brand stands out.',
    icon: <Award size={20} />
  },
  {
    title: 'Fast Turnaround',
    desc: 'AI-accelerated pipelines allow concept-to-delivery workflows in days rather than weeks, keeping you ahead of market trends.',
    icon: <Zap size={20} />
  },
  {
    title: 'Creative Storytelling',
    desc: 'Videos that do not just look good, but sell. Emotive hooks, narrative flow, and brand message alignment built in from day one.',
    icon: <BookOpen size={20} />
  },
  {
    title: 'International Standards',
    desc: 'Serving startups and enterprise teams globally with professional assets formatted for YouTube, TikTok, LinkedIn, and TV ads.',
    icon: <Globe size={20} />
  }
];

export default function WhyChooseMe() {
  return (
    <section className="section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #eeeeee' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '4rem' }}>
          <span className="section-tag">Value Proposition</span>
          <h2 className="section-title">Why Work With Me</h2>
          <p className="section-desc">
            Revisiting video creation frameworks to provide lightning-fast executions without compromising on creative standards.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid-4">
          {REASONS.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="premium-card why-card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="why-icon">
                {reason.icon}
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
