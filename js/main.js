$("#slide-testimonal").owlCarousel({
  margin: 0,
  center: true,
  loop: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
      margin: 15,
    },
    1000: {
      items: 4,
    },
  },
});

const sendEmailBtn = document.getElementById("send-email");
const emailAddress = "aytacrustmli93@gmail.com";

sendEmailBtn.addEventListener("click", () => {
  const messageInput = document.getElementById("message-input");
  const messageBody = messageInput.value;
  const mailtoLink = `mailto:${emailAddress}?body=${encodeURIComponent(messageBody)}`;
  window.location.href = mailtoLink;
});


function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.7128, lng: -74.0060 },
    zoom: 8,
  });
}

google.maps.event.addDomListener(window, 'load', initMap);


function changeLanguage(language) {
  const aboutEl = document.querySelector("#about");
  aboutEl.lang = language;
  const aboutTextEl = aboutEl.querySelector("h4");
  aboutTextEl.textContent = translations[language].about;
  const readMoreEl = aboutEl.querySelector("button");
  readMoreEl.textContent = translations[language].readMore;
  
  const specialEl = document.querySelector("#specialfurniture");
  specialEl.lang = language;
  const specialTextEl = specialEl.querySelector("h2");
  specialTextEl.textContent = translations[language].special;
  const specialMoreEl = specialEl.querySelector("button");
  specialMoreEl.textContent = translations[language].catalog;

  const textEl = document.querySelector("#header .text");
  textEl.lang = language;
  const createTextEl = textEl.querySelector("h4");
  createTextEl.textContent = translations[language].create;
  const textMoreEl = textEl.querySelector("button");
  textMoreEl.textContent = translations[language].catalog;

  const bestEl = document.querySelector("#best-sellers");
  bestEl.lang = language;
  const bestTextEl = bestEl.querySelector("h4");
  bestTextEl.textContent = translations[language].top;
  
  const statisticEl = document.querySelector("#statistics");
  statisticEl.lang = language;
  const statisticTextEl = statisticEl.querySelector("h4");
  statisticTextEl.textContent = translations[language].we;

  const collectionEl = document.querySelector("#collection");
  collectionEl.lang = language;
  const collectionTextEl = collectionEl.querySelector("h4");
  collectionTextEl.textContent = translations[language].collection;
  const stolTextEl = collectionEl.querySelectorAll("h5");
  for (let i = 0; i < stolTextEl.length; i++) {
    stolTextEl[i].textContent = translations[language].table;
  }
  const collectionMoreEl = collectionEl.querySelectorAll("button");
  for (let i = 0; i < collectionMoreEl.length; i++) {
    collectionMoreEl[i].textContent = translations[language].detail;
  }

  const reviewEl = document.querySelector("#reviews");
  reviewEl.lang = language;
  const reviewTextEl = reviewEl.querySelector("h4");
  reviewTextEl.textContent = translations[language].review;
  const bahruzTextEl = reviewEl.querySelectorAll("h5");
  for (let i = 0; i < bahruzTextEl.length; i++) {
    bahruzTextEl[i].textContent = translations[language].bahruz;
  }

  const helpEl = document.querySelector("#help");
  helpEl.lang = language;
  const helpTextEl = helpEl.querySelector("h1");
  helpTextEl.textContent = translations[language].help;
  const helpMoreEl = helpEl.querySelector("button");
  helpMoreEl.textContent = translations[language].send;

  const abouttEl = document.querySelector("#footer h4:first-of-type");
  abouttEl.textContent = translations[language].about;
  const aboutListEls = document.querySelectorAll("#footer ul:first-of-type li");
  aboutListEls[0].textContent = translations[language].terms;
  aboutListEls[1].textContent = translations[language].privacy;
  aboutListEls[2].textContent = translations[language].cookies;

  const supportEl = document.querySelectorAll("#footer h4")[1];
  supportEl.textContent = translations[language].support;
  const supportListEls = document.querySelectorAll("#footer ul")[1].querySelectorAll("li");
  supportListEls[0].textContent = translations[language].support;
  supportListEls[1].textContent = translations[language].faq;
  supportListEls[2].textContent = translations[language].rules;

  const contactEl = document.querySelectorAll("#footer h4")[2];
  contactEl.textContent = translations[language].contact;
  const contactListEls = document.querySelectorAll("#footer ul")[2].querySelectorAll("li");
  contactListEls[0].textContent = translations[language].email;
  contactListEls[1].textContent = translations[language].phone;
  contactListEls[2].textContent = translations[language].address;

  const rightsEl = document.querySelector("#footer h6");
  rightsEl.textContent = `© ${translations[language].privacyTermsMap}`;
} 

const languageLinks = document.querySelectorAll("#language-selector a");
languageLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const language = event.target.textContent.toLowerCase();
    changeLanguage(language);
  });
});
