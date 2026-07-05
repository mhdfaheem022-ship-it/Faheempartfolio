import { motion } from 'framer-motion';

const slideRight = {
  hidden: { opacity: 0, rotateY: -10, x: -80, z: -50 },
  visible: { 
    opacity: 1, 
    rotateY: 0, 
    x: 0, 
    z: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } 
  }
};

const slideLeft = {
  hidden: { opacity: 0, rotateY: 10, x: 80, z: -50 },
  visible: { 
    opacity: 1, 
    rotateY: 0, 
    x: 0, 
    z: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 } 
  }
};

export default function About() {
  return (
    <section className="section" id="about" style={{ backgroundColor: '#fafafa', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0', overflow: 'hidden', perspective: '1200px' }}>
      <div className="container">
        <div className="about-grid" style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Left Column: Biography */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideRight}
          >
            <span className="section-tag">About Me</span>
            <h2 className="section-title" style={{ marginTop: '1rem' }}>
              Muhammed <br /> Faheem Sha.
            </h2>
            
            <p className="about-intro">
              I create premium AI-powered marketing videos for startups, businesses, and brands worldwide.
            </p>
            
            <p className="about-body">
              My focus is combining storytelling, AI technology, and cinematic visuals to help businesses stand out in a crowded digital landscape. By tailoring generative AI models to commercial requirements, I provide international-standard assets that build trust and drive conversions.
            </p>
          </motion.div>

          {/* Right Column: Premium Animated Image Frame with Grayscale to Color transition */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideLeft}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <div 
              style={{
                position: 'relative',
                width: '320px',
                height: '420px',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                backgroundColor: '#111111',
                border: '1px solid rgba(244, 197, 66, 0.2)'
              }}
            >
              {/* Grayscale on normal state, color on hover */}
              <motion.div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url("/about_art.png")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'grayscale(100%) brightness(0.9)',
                  transition: 'filter 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                whileHover={{ 
                  filter: 'grayscale(0%) brightness(1)',
                  scale: 1.05 
                }}
              />
              {/* Gold border decorative frame overlay */}
              <div 
                style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  right: '15px',
                  bottom: '15px',
                  border: '1px solid rgba(244, 197, 66, 0.4)',
                  borderRadius: '12px',
                  pointerEvents: 'none',
                  zIndex: 2
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
