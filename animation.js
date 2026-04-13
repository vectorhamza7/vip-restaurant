gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
let smoother = ScrollSmoother.create({
  wrapper: '#smooth-wrapper',
  content: '#smooth-content',

  smooth: 2,
  effects: true,
  smoothTouch: 0.3,


});
gsap.from(".nav-pill", { duration: 2, y: -100, opacity: 0, delay: 1, ease: "power2.out" });
gsap.from(".title", { duration: 1, y: 50, opacity: 0, delay: 0.5, ease: "power2.out" });
gsap.from("#plat", { duration: 4, x: 500, rotation: 180, opacity: 0, delay: 0.7, ease: "power2.out" });
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

let lt=gsap.timeline({
  scrollTrigger:{
    trigger:".hero",
    start:"1% top",
    end:"+=100%",
    scrub:1.5,
    markers:true,
    pin:true,
  }
})
lt.to(".hero-era", { duration: 1, y: 50, opacity: 0, ease: "power2.out" });
lt.to("#plat", { duration: 2,opacity:0});

lt.to(".title", { duration: 1, opacity: 0, ease: "power2.out" });
lt.to(".hero-tagline", { duration: 2, y: -50, opacity: 0});
lt.to(".hero-btn-primary", { duration: 2, opacity: 0 });
lt.to(".hero-btn-secondary", { duration: 2, opacity: 0});
lt.to(".chef-section", { duration: 2, y: -500,});



