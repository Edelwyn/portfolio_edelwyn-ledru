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