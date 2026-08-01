document.querySelectorAll(".fill").forEach((el) => {
  el.style.width = el.getAttribute("data-width");
});
