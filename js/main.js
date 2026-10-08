/**
 * Sandhiya R - Professional Portfolio Scripts
 * Vanilla JavaScript - Zero Dependencies, Fast & Maintainable
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Theme Toggle (Dark / Light Mode) ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  // Check persisted theme or system preference
  const savedTheme = localStorage.getItem('sandhiya_portfolio_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  setTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      localStorage.setItem('sandhiya_portfolio_theme', newTheme);
    });
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeIcon) {
      if (theme === 'dark') {
        // Moon icon or Sun icon to switch to light
        themeIcon.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>`;
        themeToggleBtn.setAttribute('title', 'Switch to light mode');
      } else {
        themeIcon.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>`;
        themeToggleBtn.setAttribute('title', 'Switch to dark mode');
      }
    }
  }

  // --- 2. Mobile Navigation Toggle ---
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- 3. Scrollspy & Active Navigation Link ---
  const sections = document.querySelectorAll('section[id]');
  
  function updateActiveNavLink() {
    const scrollY = window.pageYOffset + 120; // offset for sticky header

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (matchingLink) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          matchingLink.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  // --- 4. Project Filtering ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.35s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 5. Copy to Clipboard Utility with Toast ---
  const copyButtons = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('toast');

  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const textToCopy = button.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied to clipboard: ${textToCopy}`);
        }).catch(() => {
          // Fallback for older browsers
          const textarea = document.createElement('textarea');
          textarea.value = textToCopy;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          showToast(`Copied: ${textToCopy}`);
        });
      }
    });
  });

  let toastTimeout;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // --- 6. Back to Top Button ---
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- 7. Contact Form Handler (Direct & Mailto Support) ---
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('sender-name').value.trim();
      const email = document.getElementById('sender-email').value.trim();
      const subject = document.getElementById('sender-subject').value.trim();
      const message = document.getElementById('sender-message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      // Prepare mailto link
      const emailSubject = encodeURIComponent(`Portfolio Inquiry: ${subject || 'Opportunity for Sandhiya R'}`);
      const emailBody = encodeURIComponent(`Hello Sandhiya,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent from your portfolio website.`);
      
      const mailtoUrl = `mailto:rsandhiya524@gmail.com?subject=${emailSubject}&body=${emailBody}`;

      // Open email client
      window.location.href = mailtoUrl;

      // Show confirmation message
      if (formFeedback) {
        formFeedback.innerHTML = `<strong>Thank you, ${name}!</strong> Your email draft has been generated. If your email client did not open automatically, you can directly reach me at <a href="mailto:rsandhiya524@gmail.com">rsandhiya524@gmail.com</a>.`;
        formFeedback.classList.add('success');
      }

      contactForm.reset();
    });
  }
});
