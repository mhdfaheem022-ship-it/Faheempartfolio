/**
 * Faheem Sha Portfolio - Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // MOBILE NAVIGATION DRAWER
  // ==========================================================================
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // ==========================================================================
  // NAVBAR ON SCROLL EFFECT
  // ==========================================================================
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ==========================================================================
  // CUSTOM CURSOR GLOW TRACKING
  // ==========================================================================
  const cursorGlow = document.getElementById('cursor-glow');
  
  if (cursorGlow) {
    document.addEventListener('mousemove', (e) => {
      // Direct positioning for mouse light sphere
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    });
  }

  // ==========================================================================
  // 3D GLASS CARD TILT EFFECT (HERO CARD)
  // ==========================================================================
  const cardWrapper = document.querySelector('.interactive-card-wrapper');
  const visualCard = document.querySelector('.visual-card');

  if (cardWrapper && visualCard) {
    cardWrapper.addEventListener('mousemove', (e) => {
      const rect = cardWrapper.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within element
      const y = e.clientY - rect.top;  // y position within element
      
      const width = rect.width;
      const height = rect.height;
      
      // Calculate tilt (-15 to 15 degrees)
      const rotateX = -1 * ((y / height) - 0.5) * 30;
      const rotateY = ((x / width) - 0.5) * 30;
      
      visualCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    cardWrapper.addEventListener('mouseleave', () => {
      // Reset position on mouse leave
      visualCard.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
      visualCard.style.transition = 'transform 0.5s ease';
    });

    cardWrapper.addEventListener('mouseenter', () => {
      visualCard.style.transition = 'none';
    });
  }

  // ==========================================================================
  // SCROLL REVEAL (INTERSECTION OBSERVER)
  // ==========================================================================
  const revealElements = document.querySelectorAll('.about, .skills-grid, .projects-grid, .contact-container');
  
  // Wrap elements or add reveal classes to make elements fade-in on scroll
  revealElements.forEach(el => {
    el.classList.add('reveal');
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Once shown, we don't need to observe it anymore
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15, // trigger when 15% is visible
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // ==========================================================================
  // CONTACT FORM SIMULATOR
  // ==========================================================================
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      
      // Visual feedback loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = `Sending... <span class="badge-dot" style="margin-left: 5px;"></span>`;
      formFeedback.className = 'form-feedback';
      formFeedback.textContent = '';

      // Simulate network request delay (1.5 seconds)
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        // Success state
        formFeedback.className = 'form-feedback success';
        formFeedback.textContent = 'Thank you! Your message was sent successfully.';
        
        // Reset form inputs
        contactForm.reset();

        // Clear status text after 5s
        setTimeout(() => {
          formFeedback.textContent = '';
        }, 5000);
      }, 1500);
    });
  }
});
