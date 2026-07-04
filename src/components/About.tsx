import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Star } from 'lucide-react';

export default function About() {
  const [copied, setCopied] = useState(false);
  const discountCode = 'faheemsha10_80701';

  const handleCopy = () => {
    navigator.clipboard.writeText(discountCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section" id="about" style={{ backgroundColor: '#fafafa', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0' }}>
      <div className="container">
        <div className="about-grid">
          
          {/* Left Column: Visual/Promo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* HeyGen Ambassador Badge */}
            <div className="ambassador-badge">
              <Star size={16} fill="currentColor" /> Official HeyGen Ambassador
            </div>

            {/* Profile Intro */}
            <h2 className="section-title" style={{ marginTop: '1rem' }}>
              Hi, I'm <br /> Muhammed Faheem Sha.
            </h2>
            
            <p className="about-intro">
              I create premium AI-powered marketing videos for startups, businesses, and brands worldwide.
            </p>
            
            <p className="about-body">
              My focus is combining storytelling, AI technology, and cinematic visuals to help businesses stand out in a crowded digital landscape. By tailoring generative AI models to commercial requirements, I provide international-standard assets that build trust and drive conversions.
            </p>
          </motion.div>

          {/* Right Column: Discount Promo Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="premium-card discount-card">
              <div className="discount-info">
                <h4>Partner Offer</h4>
                <p>Get 10% off your HeyGen subscription with my official Ambassador code.</p>
              </div>

              <button 
                className="promo-code-box"
                onClick={handleCopy}
                title="Copy Promo Code"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  cursor: 'pointer',
                  position: 'relative'
                }}
              >
                <span>{discountCode}</span>
                {copied ? <Check size={16} style={{ color: '#10b981' }} /> : <Copy size={16} style={{ color: '#666666' }} />}
              </button>
            </div>
            
            {copied && (
              <p style={{
                fontSize: '0.8rem',
                color: '#10b981',
                fontWeight: 600,
                marginTop: '0.6rem',
                textAlign: 'right',
                marginRight: '2rem'
              }}>
                Code copied to clipboard!
              </p>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
