import { useEffect } from 'react';

const RevealAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-section, .reveal-element').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.reveal-section, .reveal-element').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
};

export default RevealAnimation;