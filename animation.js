window.onload = () => {
   
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
let smoother = ScrollSmoother.create({
  wrapper: '#smooth-wrapper',
  content: '#smooth-content',

  smooth: 1,
  effects: true,
  smoothTouch: 1,


});

const mobileMenu = document.getElementById("mobileMenu");
const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const mobileLinks = document.querySelectorAll('.mobile-link');

menuToggle.addEventListener("click", () => {
  let lt = gsap.timeline();
  lt.to(mobileMenu, { duration: 1, x: 0, ease: "power2.out" });
  lt.from("#mobile-lin1", { duration: 0.5, x: 50, opacity: 0, ease: "power2.out" });
  lt.from("#mobile-lin2", { duration: 0.5, x: 50, opacity: 0, ease: "power2.out" });
  lt.from("#mobile-lin3", { duration: 0.5, x: 50, opacity: 0, ease: "power2.out" });
  lt.from("#mobile-lin4", { duration: 0.5, x: 50, opacity: 0, ease: "power2.out" });
  lt.from("#mobile-cta", { duration: 0.5, x: 50, opacity: 0, ease: "power2.out" });
});

menuClose.addEventListener("click", () => {
  let lt = gsap.timeline();
  lt.to(mobileMenu, { duration: 1, x: 500, ease: "power2.out" });
});
mobileLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    gsap.to(mobileMenu, { duration: 1, x: 500, ease: "power2.out" });
  });
});
gsap.from(".nav-pill", { duration: 1, y: -100, opacity: 0, delay: 1, ease: "power2.out" });
gsap.from(".title", { duration: 1, y: 50, opacity: 0, delay: 0.5, ease: "power2.out" });
gsap.from("#plat", { duration: 1, opacity: 0, delay: 0.7, ease: "power2.out" });
gsap.fromTo(".Nword", {
  x: -100,
  opacity: 0,
}, {
  x: -100,
  opacity: 1,
  duration: 1,
  delay: 0.5,
  ease: "power2.out"
});
gsap.from(".hero-tagline", { duration: 1, y: 50, opacity: 0, delay: 1, ease: "power2.out" });
gsap.from(".hero-btn-primary", { duration: 1, y: 50, opacity: 0, delay: 1.2, ease: "power2.out" });
gsap.fromTo(".hero-btn-secondary", { duration: 0.5, y: 50, opacity: 0, delay: 1.4, ease: "power2.out" }, {
  y: 0,
  opacity: 1,
  duration: 1,
  delay: 1.4,
});

gsap.from(".hero-era", { duration: 1, y: 50, opacity: 0, delay: 0.5, ease: "power2.out" })
gsap.from(".hero-bottom-quote", { duration: 1, y: 50, opacity: 0, delay: 1.5, ease: "power2.out" })

let lt = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "1% top",
    end: "+=200%",
    scrub: 5,
    pin: true,
  }
})
lt.to(".hero-bg-overlay", { duration: 1, opacity: 0, ease: "power2.out" });
lt.to(".hero-brand", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });

lt.to(".hero-tagline", { duration: 2, y: -50, opacity: 0 });
lt.to(".hero-buttons", { duration: 2, opacity: 0 });
lt.to(".hero", { duration: 1,y:-400 , opacity: 0 , delay:3});
let lt1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".chef-section",
    start: "-50% top",
    end: "+=200%",
    scrub: 1,
    pin: true,
  }
});
lt1.fromTo("#chef", {y:0}, { duration: 1, y: -600 });
lt1.fromTo(".chef-ellipse", { duration: 1, y: -150, x: -50, opacity: 0, ease: "power2.out" }, {
  scale: 1,
  opacity: 1,
  duration: 1,
  y: -150,
  x: 0,
  ease: "power2.out",
});
lt1.from(".chef-left-label", { duration: 1, y: 50, opacity: 0, ease: "power2.out" });
lt1.from(".chef-heading", { duration: 1, y: 50, opacity: 0, ease: "power2.out" });
lt1.from(".chef-divider", { duration: 1, y: 50, opacity: 0, ease: "power2.out" });
let split = new SplitText(".chef-blockquote ", { type: "words" });
lt1.from(split.words, { duration: 1, y: 50, opacity: 0, ease: "power2.out", stagger: 0.1, delay:-2 });
gsap.to("#menu", {
  duration: 0.1, y: -550, scrollTrigger: {
    trigger: ".body",
    start: "top top",
    end: "+=200%",
    scrub: 1,
    pin: true,
  }
});
let lt2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".menu-section",
    start: "-30% top",
    end: "+=200%",
    scrub: 1,

  }
});
lt2.from(".section-title", { duration: 1, x: -50, opacity: 0 });

lt2.from(".label-tag", { duration: 1, x: -50, opacity: 0, delay: -1 });
lt2.from(".menu-date", { duration: 1, x: -50, opacity: 0, delay: 0.2 });
// Animate each card precisely when the user scrolls down to its physical location
document.querySelectorAll(".menu-card").forEach((card) => {
  lt2.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 150%", // Start animating when card's top hits 90% of screen height
      end: "top 90%",   // Finish animating when card's top hits 60% of screen height
      scrub: 0.01,
    },
    x: 250,
    opacity: 0,
  });
});

// animat gallery 
let lt3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".gallery-section",
    start: "-1000 top",
    end: "+=200%",
    scrub: 1.5,

  }
});
lt3.to(".gallery-section", { duration: 1, y: -700 });

lt3.from(".gallery-frame", { duration: 1, y: 50, opacity: 0 ,delay: -1});
lt3.from(".gallery-label", { duration: 2, x: -350, opacity: 1 });

let lt4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact-section",
    start: "-100% top",
    end: "+=200%",
    scrub: 1,
  }
});
lt4.to(".contact-section", { duration: 1, y: -900 });
lt4.from(".contact-frame", { duration: 1, y: 150, opacity: 0 });
lt4.from(".contact-label", { duration: 2, x: -350, opacity: 1 });

let lt5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact-section",
    start: "-200% top",
    end: "+=300%",
    scrub: 1,
  }
});
lt5.to(".footer", { duration: 1, y: -900 });
lt5.from(".footer-frame", { duration: 1, y: 150, opacity: 0 });
lt5.from(".footer-label", { duration: 2, x: -350, opacity: 1 });


// Flip Animation Logic , toggle
document.querySelectorAll('.card-container').forEach(container => {
    let isFlipped = false;
    container.addEventListener('click', () => {
        isFlipped = !isFlipped;
        gsap.to(container, {
            duration: 0.8,
            rotationY: isFlipped ? 180 : 0, // Flips the container
            ease: "power2.out" 
        });
    });
});

};
