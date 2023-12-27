// //////////////// Scrolling Animation ////////////////

gsap.registerPlugin(ScrollTrigger);

gsap.to(".sec-1", {
  scrollTrigger: {
    trigger: ".sub-sec-1",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  backgroundColor: "#5900af",
  duration: 1,
});

gsap.to(".svg-path", {
  scrollTrigger: {
    trigger: ".sub-sec-1",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  backgroundColor: "#5900af",
  duration: 1,
});

gsap.to(".sec-1", {
  scrollTrigger: {
    trigger: ".sub-sec-2",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  backgroundColor: "#391cf4",
  duration: 1,
});

gsap.to(".svg-path", {
  scrollTrigger: {
    trigger: ".sub-sec-2",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  backgroundColor: "#391cf4",
  duration: 1,
});

gsap.to(".sec-1", {
  scrollTrigger: {
    trigger: ".sub-sec-3",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  backgroundColor: "#2b006c",
  duration: 1,
});

gsap.to(".svg-path", {
  scrollTrigger: {
    trigger: ".sub-sec-3",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  backgroundColor: "#2b006c",
  duration: 1,
});

gsap.to(".sec-1", {
  scrollTrigger: {
    trigger: ".sub-sec-4",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  backgroundColor: "#1c1a1f",
  duration: 1,
});

gsap.to(".svg-path", {
  scrollTrigger: {
    trigger: ".sub-sec-4",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  backgroundColor: "#1c1a1f",
  duration: 1,
});

gsap.to(".sec-1", {
  scrollTrigger: {
    trigger: ".sub-sec-5",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  backgroundColor: "#1c72c9",
  duration: 1,
});

gsap.to(".svg-path", {
  scrollTrigger: {
    trigger: ".sub-sec-5",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  backgroundColor: "#1c72c9",
  duration: 1,
});

gsap.to(".sec-1", {
  scrollTrigger: {
    trigger: ".sub-sec-6",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  backgroundColor: "#0028a3",
  duration: 1,
});

gsap.to(".svg-path", {
  scrollTrigger: {
    trigger: ".sub-sec-6",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  backgroundColor: "#0028a3",
  duration: 1,
});

gsap.to(".sec-1", {
  scrollTrigger: {
    trigger: ".sub-sec-7",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  backgroundColor: "#056b10",
  duration: 1,
});

gsap.to(".svg-path", {
  scrollTrigger: {
    trigger: ".sub-sec-7",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  backgroundColor: "#056b10",
  duration: 1,
});

// //////////////// Svg path animation ////////////////

gsap.to(".transrgwht", {
  strokeDasharray: "820, 1000",
  scrollTrigger: {
    trigger: ".sec-2",
    start: "top top",
    stop: "bottom bottom",
    scrub: 1,
  },
});

// //////////////// Images Animation ////////////////

gsap.from(".img-1", {
  scrollTrigger: {
    trigger: ".sub-sec-1",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  y: "10rem",
  opacity: 0,
  duration: 1,
});

gsap.from(".img-2", {
  scrollTrigger: {
    trigger: ".sub-sec-1",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  y: "-10rem",
  opacity: 0,
  duration: 1,
});

gsap.from(".img-3", {
  scrollTrigger: {
    trigger: ".sub-sec-2",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  y: "10rem",
  opacity: 0,
  duration: 1,
});

gsap.from(".img-4", {
  scrollTrigger: {
    trigger: ".sub-sec-2",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  y: "-10rem",
  opacity: 0,
  duration: 1,
});

gsap.from(".img-5", {
  scrollTrigger: {
    trigger: ".sub-sec-3",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  y: "10rem",
  opacity: 0,
  duration: 1,
});

gsap.from(".img-6", {
  scrollTrigger: {
    trigger: ".sub-sec-3",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  y: "-10rem",
  opacity: 0,
  duration: 1,
});

gsap.from(".img-7", {
  scrollTrigger: {
    trigger: ".sub-sec-4",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  y: "10rem",
  opacity: 0,
  duration: 1,
});

gsap.from(".img-8", {
  scrollTrigger: {
    trigger: ".sub-sec-4",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  x: "10rem",
  opacity: 0,
  duration: 1,
});

gsap.from(".img-9", {
  scrollTrigger: {
    trigger: ".sub-sec-4",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  y: "10rem",
  opacity: 0,
  duration: 1,
});

gsap.from(".img-10", {
  scrollTrigger: {
    trigger: ".sub-sec-4",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  y: "-10rem",
  opacity: 0,
  duration: 1,
});

gsap.from(".img-11", {
  scrollTrigger: {
    trigger: ".sub-sec-5",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  y: "-10rem",
  opacity: 0,
  duration: 1,
});

gsap.from(".img-12", {
  scrollTrigger: {
    trigger: ".sub-sec-5",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  y: "10rem",
  opacity: 0,
  duration: 1,
});

gsap.from(".img-13", {
  scrollTrigger: {
    trigger: ".sub-sec-5",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  y: "-10rem",
  opacity: 0,
  duration: 1,
});

gsap.from(".img-14", {
  scrollTrigger: {
    trigger: ".sub-sec-5",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  y: "10rem",
  opacity: 0,
  duration: 1,
});

gsap.from(".img-15", {
  scrollTrigger: {
    trigger: ".sub-sec-5",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  x: "10rem",
  opacity: 0,
  duration: 1,
});

gsap.from(".img-17", {
  scrollTrigger: {
    trigger: ".sub-sec-7",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  y: "10rem",
  opacity: 0,
  duration: 1,
});

gsap.from(".img-18", {
  scrollTrigger: {
    trigger: ".sub-sec-5",
    start: "top center",
    stop: "bottom center",
    toggleActions: "restart none restart none",
  },
  y: "10rem",
  opacity: 0,
  duration: 1,
});

// sample code

let currentIndex = 0;

function showSlide(index) {
  const container = document.querySelector(".carousel-container");
  const itemWidth = document.querySelector(".carousel-item").offsetWidth;
  const newPosition = -index * itemWidth;

  container.style.transform = `translateX(${newPosition}px)`;
  currentIndex = index;
}

function nextSlide() {
  const totalItems = document.querySelectorAll(".carousel-item").length;
  currentIndex = (currentIndex + 1) % totalItems;
  showSlide(currentIndex);
}

function prevSlide() {
  const totalItems = document.querySelectorAll(".carousel-item").length;
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  showSlide(currentIndex);
}
