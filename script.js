function breakText() {
  var text = document.querySelector("h1").textContent;

  var h1 = document.querySelector("h1");

  var textSplit = text.split("");

  var clutter = "";

  textSplit.forEach((items) => {
    clutter += `<span>${items}</span>`;
  });

  h1.innerHTML = clutter;
}

breakText();

gsap.from("h1 span", {
  opacity: 0,
  stagger: 0.1,
  y: 30,
  duration: 1,
});
