import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-container">
        {/* Left Side Content */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero-tag">AI Video Production Studio</span>
          <h1 className="hero-title">
            Premium AI Videos <br />
            That Grow Modern <br />
            Businesses.
          </h1>
          <p className="hero-subtitle">
            I help startups, founders, brands, and companies create cinematic AI videos that capture attention and increase conversions.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Talk
            </a>
          </div>
        </motion.div>

        {/* Right Side Video Showreel */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <video 
            className="showreel-player"
            autoPlay 
            loop 
            muted 
            playsInline
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-loop-41777-large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div 
            className="showreel-badge"
            style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '1.5rem',
              backgroundColor: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(8px)',
              color: '#ffffff',
              padding: '0.4rem 0.8rem',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Play size={12} fill="#ffffff" /> SHOWREEL 2026
          </div>
        </motion.div>
      </div>
    </section>
  );
}
