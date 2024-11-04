import { useEffect } from 'react';

const RevealAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active'); // Add 'active' class when element is in view
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    // Observe all elements with the specified classes
    document.querySelectorAll('.reveal-section, .reveal-element').forEach(el => {
      observer.observe(el);
    });

    return () => {
      // Cleanup observer on component unmount
      document.querySelectorAll('.reveal-section, .reveal-element').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []); // Empty dependency array to run effect only on mount

};

export default RevealAnimation;