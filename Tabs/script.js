"use strict";

const tabsContainer = document.querySelector(".tabs-container");
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab__content");

tabsContainer.addEventListener("click", (e) => {
  const clicked = e.target;

  if (clicked.classList.contains("tab")) {
    const dataTab = +clicked.dataset.tab;
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].classList.add("hidden");
      tabs[i].classList.remove("-translate-y-1/4");
    }
    clicked.classList.add("-translate-y-1/4");
    tabContents[dataTab].classList.remove("hidden");
  }
});
