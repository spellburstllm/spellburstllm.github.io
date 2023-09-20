window.HELP_IMPROVE_VIDEOJS = false;

const updates = [
  {
    title: "Demo coming soon!",
    body: `We've received a lot of interest in trying out our system. We're working towards releasing a public demo later this year. Stay tuned and thanks for reaching out.`,
    date: "09-19-2023",
  },
  {
    title: "Stanford HAI published an article",
    body: `Read the article here:`,
    link: "https://hai.stanford.edu/news/spellburst-large-language-model-powered-interactive-canvas-generative-artists",
    date: "09-13-2023",
  },
];

$(document).ready(function () {
  // Access to bulmaCarousel instance of an element
  var element = document.querySelector("#cardsContainer");
  updates.forEach((item) => {
    card = document.createElement("div");
    card.classList.add("card");
    h2 = document.createElement("h2");
    h2.classList.add("title", "is-5");
    lightDate = document.createElement("span");
    lightDate.classList.add("has-text-grey-light");
    lightDate.innerHTML = " " + item.date;
    h2.innerHTML = item.title;
    h2.append(lightDate);
    p = document.createElement("p");
    p.innerHTML = item.body;
    if (item.link) {
      a = document.createElement("a");
      a.href = item.link;
      a.target = "_blank";
      a.style = "color: #3273dc";
      a.innerHTML = " " + item.link;
      p.appendChild(a);
    }
    card.appendChild(h2);
    card.appendChild(p);
    element.appendChild(card);
  });
});
