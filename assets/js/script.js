const typedText = document.querySelector('.typed-text');
    const words = ['Sunita', 'a Developer', 'a Designer', 'a Creator'];
    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = '';
    let isDeleting = false;

    function type() {
      currentWord = words[wordIndex];
      
      if (isDeleting) {
        displayText = currentWord.substring(0, charIndex--);
      } else {
        displayText = currentWord.substring(0, charIndex++);
      }

      typedText.textContent = displayText;

      if (!isDeleting && charIndex > currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1500);
      } else if (isDeleting && charIndex < 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        charIndex = 0;
        setTimeout(type, 500);
      } else {
        setTimeout(type, isDeleting ? 60 : 120);
      }
    }

    document.addEventListener('DOMContentLoaded', type);

    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navlist = document.querySelector('.navlist');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navlist.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.navlist a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navlist.classList.remove('active');
      });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.navlist a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Add active class to current nav item
    document.querySelectorAll('.navlist a').forEach(link => {
      link.addEventListener('click', function() {
        document.querySelectorAll('.navlist a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      });
    });