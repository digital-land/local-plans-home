document.onscroll = () => {
  const contentsTitle = document.querySelector(".gem-c-contents-list__title");
  const sticky = document.querySelector(".sticky-element--enabled");
  const published = document.querySelector(".published-dates-button-group");

  contentsTitle.getBoundingClientRect().top < 0
    ? sticky.classList.remove("sticky-element--hidden")
    : sticky.classList.add("sticky-element--hidden");
  published.getBoundingClientRect().bottom < window.innerHeight
    ? sticky.classList.remove("sticky-element--stuck-to-window")
    : sticky.classList.add("sticky-element--stuck-to-window");
};
