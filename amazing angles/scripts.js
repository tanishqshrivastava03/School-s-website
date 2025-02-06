document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#main", {
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from("nav", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.utils.toArray("h1, h2, p").forEach((el) => {
        gsap.from(el, {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3,
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
        });
    });

    gsap.utils.toArray("img").forEach((img) => {
        gsap.from(img, {
            opacity: 0,
            scale: 0.8,
            duration: 1.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: img,
                start: "top 90%",
                toggleActions: "play none none reverse",
            },
        });
    });

    gsap.from(".video-container", {
        opacity: 0,
        scale: 0.9,
        duration: 1.5,
        ease: "power2.out"
    });

    document.querySelectorAll(".navbar-links a").forEach((link) => {
        link.addEventListener("mouseenter", () => {
            gsap.to(link, { scale: 1.1, duration: 0.3 });
        });
        link.addEventListener("mouseleave", () => {
            gsap.to(link, { scale: 1, duration: 0.3 });
        });
    });

    gsap.utils.toArray(".value-card").forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: i * 0.2,
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse",
            },
        });
    });

    gsap.from(".form-container", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".form-container",
            start: "top 85%",
        },
    });

    gsap.from("footer", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "footer",
            start: "top 90%",
        },
    });
});

function Marquee(selector, speed) {
    const parentSelector = document.querySelector(selector);
    const clone = parentSelector.innerHTML;
    const firstElement = parentSelector.children[0];
    let i = 0;
    console.log(firstElement);
    parentSelector.insertAdjacentHTML('beforeend', clone);
    parentSelector.insertAdjacentHTML('beforeend', clone);
  
    setInterval(function () {
      firstElement.style.marginLeft = `-${i}px`;
      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i = i + speed;
    }, 0);
  }
  window.addEventListener('load', Marquee('.marquee', 0.2))
  
 