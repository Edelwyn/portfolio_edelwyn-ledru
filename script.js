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
gsap.to('.bar.html', {
    width: "90%",
    ease: "power2.out",
    scrollTrigger: {
        trigger: '.sectionCompetences',
    }
});
gsap.to('.bar.javascript', {
    width: "70%",
    ease: "elastic.out(1,1)",
    scrollTrigger: {
        trigger: '.sectionCompetences',
    }
});
gsap.to('.bar.css', {
    width: "90%",
    ease: "elastic.out(1,1)",
    scrollTrigger: {
        trigger: '.sectionCompetences',
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
