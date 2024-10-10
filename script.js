function breakText() {
  var text = document.querySelector("h1").textContent;

  var h1 = document.querySelector("h1");

  var textSplit = text.split("");

  var clutter = "";

  var halfValue = Math.floor(textSplit.length / 2);

  textSplit.forEach((items, idx) => {
    if (idx > halfValue) {
      clutter += `<span class="b">${items}</span>`;
    } else {
      clutter += `<span class="a">${items}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakText();

gsap.from(".a", {
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "bounce",
  stagger: 0.1,
});

gsap.from(".b", {
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "bounce",
  stagger: -0.1,
});
