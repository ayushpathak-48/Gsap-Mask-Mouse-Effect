const content = document.querySelector(".content");

let xTo = gsap.quickTo(".hidden-content", "--x", {
  duration: 0.4,
  ease: "power4.out"
}),
  yTo = gsap.quickTo(".hidden-content", "--y", {
    duration: 0.4,
    ease: "power4.out"
  });

let tl = gsap.timeline({ paused: true });
tl.to(".hidden-content", {
  "--size": 250,
  duration: 0.75,
  ease: "back.out(1.7)"
});

let hoveringContent = gsap.utils.toArray("p", content);

hoveringContent.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    tl.restart();
  });
  el.addEventListener("mouseleave", () => {
    tl.reverse();
  });
});

/***************************************
              Btn Hovering
***************************************/
let btnTl = gsap.timeline({ paused: true });
btnTl.to(".hidden-content", {
  "--size": 20,
  duration: 0.75,
  ease: "back.out(1.7)"
});

/***************************************
    Add Mask on First Mouse Movement
***************************************/
window.addEventListener("mousemove", onFirstMove);

function onFirstMove(e) {
  window.removeEventListener("mousemove", onFirstMove);
  gsap.set(".hidden-content", { autoAlpha: 1, "--x": e.pageX, "--y": e.pageY });

  window.addEventListener("mousemove", (e) => {
    yTo(e.pageY);
    xTo(e.pageX);
  });
}

/***************************************
      Only for the preview image
***************************************/
gsap.set(".hidden-content", {
  autoAlpha: 1,
  "--x": window.innerWidth / 3,
  "--y": window.innerHeight / 2
});
tl.progress(0.2);