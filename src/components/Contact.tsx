import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    projectType: 'Cinematic AI Video',
    budget: '$150 - $300',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // TODO: Paste your free Web3Forms Access Key here!
    const accessKey = 'YOUR_WEB3FORMS_ACCESS_KEY_HERE';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Portfolio Inquiry from ${formData.name}`,
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          company: '',
          email: '',
          country: '',
          projectType: 'Cinematic AI Video',
          budget: '$150 - $300',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setStatus('error');
    }

    // Clear notification after 5s
    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  return (
    <section className="section" id="contact" style={{ backgroundColor: '#fafafa', borderTop: '1px solid #f0f0f0' }}>
      <div className="container">
        
        <div className="contact-grid">
          
          {/* Left Side Info */}
          <div className="contact-info">
            <span className="section-tag">Contact</span>
            <h2 className="section-title" style={{ maxWidth: '400px' }}>Let's Create Something Amazing.</h2>
            <p className="section-desc" style={{ marginBottom: '2.5rem', maxWidth: '420px' }}>
              For project inquiries, direct collaborations, or consultations, contact me through social channels or send your requirements using this inquiry form.
            </p>

            <div className="social-links">
              <a 
                href="https://www.instagram.com/amigo_media_10/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link-item"
              >
                <div className="social-icon-wrapper">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', display: 'block', color: 'var(--text-secondary)', fontWeight: 400 }}>Follow Me</span>
                  Instagram
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/amigo-media-4654962b8/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link-item"
              >
                <div className="social-icon-wrapper">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', display: 'block', color: 'var(--text-secondary)', fontWeight: 400 }}>Connect</span>
                  LinkedIn
                </div>
              </a>
            </div>

            {/* Custom note to collaborate */}
            <div className="premium-card" style={{ marginTop: '2.5rem', padding: '1.8rem', backgroundColor: '#ffffff' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>Have a Unique Idea?</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                If you have a custom idea that isn't listed, I'd love to collaborate. Let's turn your vision into a premium AI-powered production.
              </p>
            </div>
          </div>

          {/* Right Side Form */}
          <motion.div 
            className="premium-card"
            style={{ padding: '3rem', backgroundColor: '#ffffff' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    placeholder="United States"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="projectType">Project Type</label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  >
                    <option>Cinematic AI Video</option>
                    <option>AI Clone Video</option>
                    <option>Product Video</option>
                    <option>UGC Video</option>
                    <option>Real Estate Marketing</option>
                    <option>SaaS / Startup Demo</option>
                    <option>Commercial Advertisement</option>
                    <option>AI Podcast Generation</option>
                    <option>Other / Custom Project</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Estimated Budget</label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option>Less than $150</option>
                    <option>$150 - $300</option>
                    <option>$300 - $500</option>
                    <option>$500 - $1,000</option>
                    <option>$1,000 - $2,500</option>
                    <option>$2,500+</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message Details</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Describe your video production requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%', gap: '0.6rem' }}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Start Your Project'} 
                <Send size={16} />
              </button>

              {status === 'success' && (
                <div className="form-feedback success">
                  Thank you! Your project details have been sent successfully.
                </div>
              )}
              {status === 'error' && (
                <div className="form-feedback error">
                  Something went wrong. Please try again or reach out on LinkedIn.
                </div>
              )}
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
