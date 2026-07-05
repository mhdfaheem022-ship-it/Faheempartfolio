import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="footer" style={{ borderTop: '1px solid #eeeeee', backgroundColor: '#f8f9fa', padding: '6rem 0 3rem 0', perspective: '1000px' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '3rem' }}>
        
        {/* Giant Interactive Let's Talk */}
        <motion.a 
          href="https://www.instagram.com/amigo_media_10/"
          target="_blank" 
          rel="noopener noreferrer"
          className="footer-massive-link"
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '10vw',
            lineHeight: '0.85',
            color: 'var(--text-primary)',
            textTransform: 'uppercase',
            display: 'inline-block',
            cursor: 'pointer',
            transformStyle: 'preserve-3d'
          }}
          whileHover={{ 
            scale: 1.02, 
            rotateX: 10,
            color: 'var(--accent)'
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          LET'S TALK
        </motion.a>

        {/* Footer Details row */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            width: '100%', 
            borderTop: '1px solid rgba(0,0,0,0.06)',
            paddingTop: '3rem',
            marginTop: '2rem',
            flexWrap: 'wrap',
            gap: '2rem',
            textAlign: 'left'
          }}
        >
          <div>
            <div className="footer-logo" style={{ fontFamily: 'var(--font-title)', fontSize: '1.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Faheem Sha<span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: 'var(--accent)', borderRadius: '50%', marginLeft: '2px' }}></span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              Creating premium AI-powered marketing videos for brands globally.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <h4 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Follow Me</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.9rem' }}>
                <a href="https://www.instagram.com/amigo_media_10/" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>Instagram</a>
                <a href="https://www.linkedin.com/in/amigo-media-4654962b8/" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>LinkedIn</a>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Location</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>Kerala, India</p>
            </div>
          </div>
        </div>

        <div style={{ width: '100%', borderTop: '1px solid rgba(0,0,0,0.03)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          <p>&copy; {new Date().getFullYear()} Muhammed Faheem Sha. All rights reserved.</p>
          <p>Cinematic AI Video Producer</p>
        </div>

      </div>
    </footer>
  );
}
