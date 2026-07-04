import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="nav-logo">
          Faheem Sha <span></span>
        </a>

        {/* Desktop Menu */}
        <nav className="nav-menu">
          <a href="#work" className="nav-link">Featured Work</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#contact" className="nav-link nav-contact-btn">Let's Talk</a>
        </nav>

        {/* Mobile menu toggle button */}
        <button 
          className="nav-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          style={{ display: 'none', cursor: 'pointer', zIndex: 110 }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay Menu */}
      {mobileMenuOpen && (
        <div 
          className="mobile-drawer"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: '#ffffff',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem'
          }}
        >
          <a href="#work" className="nav-link" style={{ fontSize: '1.4rem' }} onClick={() => setMobileMenuOpen(false)}>Featured Work</a>
          <a href="#services" className="nav-link" style={{ fontSize: '1.4rem' }} onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#about" className="nav-link" style={{ fontSize: '1.4rem' }} onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#pricing" className="nav-link" style={{ fontSize: '1.4rem' }} onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <a href="#contact" className="nav-contact-btn" style={{ fontSize: '1.4rem', padding: '0.8rem 2rem' }} onClick={() => setMobileMenuOpen(false)}>Let's Talk</a>
        </div>
      )}
    </header>
  );
}
