gsap.registerPlugin(ScrollTrigger);

gsap.to('.htb-line-fill', {
    height: '100%',
    scrollTrigger: {
      trigger: '#htb-container',
      start: 'top center',
      end: 'bottom top',
      scrub: true,
    }
});


document.querySelectorAll('.htb').forEach((htb, index) => {
    const arrow = htb.querySelector(`#htb-arrow-${index + 1}`);
    
    if (arrow) {
      const arrowTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: htb,
          start: 'top center',
          end: 'center center', 
          scrub: true,
        }
      });
  
      arrowTimeline.to(arrow, {
        backgroundColor: '#000000',
        color: '#fbdb2c',       
        duration: 0.1,
        ease: 'none'
      });
    }
});