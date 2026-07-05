import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const foldUp = {
  hidden: { opacity: 0, rotateX: -15, y: 80, z: -50 },
  visible: { 
    opacity: 1, 
    rotateX: 0, 
    y: 0, 
    z: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } 
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85, z: -150 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    z: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 }
  }
};

export default function Hero() {
  return (
    <section className="hero" id="hero" style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
      <div className="container hero-container">
        {/* Left Side Content */}
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={foldUp}
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

        {/* Right Side Image Showreel */}
        <motion.div 
          className="hero-visual"
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <img 
            src="https://opzeaqtganycghocinhz.supabase.co/storage/v1/object/sign/Image/Man_typing_on_luxury_laptop_202607051414.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjZjZGJjZi02MjE0LTQxNGUtYTRjOC1mYmZjYTkwYmI1NDciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZS9NYW5fdHlwaW5nX29uX2x1eHVyeV9sYXB0b3BfMjAyNjA3MDUxNDE0LmpwZWciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgzMjQxMjU5LCJleHAiOjI3MjkzMjEyNTl9.lT_o6nd5r3wNDkNdfV7pGHA2_-hnp2m42hgsC4vKxgI" 
            alt="Cinematic Showreel" 
            className="showreel-player"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
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
            <Play size={12} fill="#ffffff" /> PORTFOLIO 2026
          </div>
        </motion.div>
      </div>
    </section>
  );
}
