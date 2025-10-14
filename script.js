console.log("aa");
gsap.to(".etoile-1", {
    duration: 2,
    y: "+=10",
    x: "+=15",
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
});
gsap.to(".etoile-2", {
    duration: 2,
    y: "+=5",
    x: "-=10",
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
});
gsap.to(".etoile-3", {
    duration: 1.5,
    y: "+=5",
    x: "+=20",
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
});
gsap.to(".etoile-4", {
    duration: 1.5,
    y: "+=10",
    x: "+=5",
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
});
gsap.from('.bar.html', {
    width: "0%",
    ease: "power2.out",
    scrollTrigger: {
        trigger: '.containerbar',
        scrub: 1.5,
        markers: false,
        start: "top 50%",
        end: "bottom 100%"
    }
});
gsap.from('.bar.javascript', {
    width: "0%",
    ease: "power2.out",
    scrollTrigger: {
        trigger: '.containerbar',
        scrub: 1,
        markers: false,
        start: "top 50%",
        end: "bottom 100%"
    }
});
gsap.from('.bar.css', {
    width: "0%",
    ease: "power2.out",
    scrollTrigger: {
        trigger: '.containerbar',
        scrub: 1.3,
        markers: false,
        start: "top 50%",
        end: "bottom 100%"
    }
});

gsap.from('.icon', {
    y: "+=50",
    opacity: 0,
    ease: "elastic.out(1,0.8)",
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.divLogos',
        markers: false,
        start: "top 50%",
        end: "bottom 70%",
        scrub: 1
    }
});
//composante vue
let carousel = Vue.createApp({

});
carousel.mount("#carousel");