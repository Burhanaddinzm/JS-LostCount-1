"use strict";

const animationItems = document.querySelectorAll(".animationItem");

const scrollAnimtion = () => {
  animationItems.forEach((item) => {
    const triggerPoint = window.innerHeight * 0.7;
    const distanceFromTop = item.getBoundingClientRect().top;

    if (distanceFromTop < triggerPoint) {
      item.classList.remove("opacity-0");
      item.classList.remove("translate-y-[80px]");
    } else {
      item.classList.add("opacity-0");
      item.classList.add("translate-y-[80px]");
    }
  });
};

scrollAnimtion();
window.addEventListener("scroll", scrollAnimtion);
