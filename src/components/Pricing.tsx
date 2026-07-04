import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        
        {/* Pricing Card Wrapper */}
        <motion.div 
          className="premium-card pricing-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-tag">Pricing</span>
          <h2 className="section-title">Custom Pricing</h2>
          <p className="section-desc" style={{ margin: '0 auto 2.5rem' }}>
            Every project is unique. We don't believe in generic tier sheets—we offer bespoke rates tailored to your exact business specifications.
          </p>

          <p style={{ fontWeight: 600, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#888888', marginBottom: '1.5rem' }}>
            Project rates depend on:
          </p>

          {/* Pricing Factors Grid */}
          <div className="pricing-factors">
            <div className="factor-item">
              <span className="factor-dot"></span> Video Style
            </div>
            <div className="factor-item">
              <span className="factor-dot"></span> Duration
            </div>
            <div className="factor-item">
              <span className="factor-dot"></span> Complexity
            </div>
            <div className="factor-item">
              <span className="factor-dot"></span> Deliverables
            </div>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
            Please contact me with your project details, and I'll provide a personalized quotation based on your specific requirements.
          </p>

          <a href="#contact" className="btn btn-primary">
            Request a Quote
          </a>
        </motion.div>

      </div>
    </section>
  );
}
