export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            Muhammed Faheem Sha<span></span>
          </div>
          <p className="footer-tagline" style={{ marginTop: '0.5rem' }}>
            Creating premium AI-powered videos for businesses worldwide.
          </p>
        </div>
        <div className="footer-right">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Muhammed Faheem Sha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
