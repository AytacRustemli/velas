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
  // indexlang
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

function changeeLanguage(language) {
  // aboutlang
  const whoEl = document.querySelector("#who_we_are");
  whoEl.lang = language;
  const whoTextEl = whoEl.querySelector("h4");
  whoTextEl.textContent = translatio[language].who;

  const ilEl = document.querySelector("#ten_years_with_you h6:first-of-type");
  ilEl.textContent = translatio[language].il;

  const daimEl = document.querySelectorAll("#ten_years_with_you h6")[1];
  daimEl.textContent = translatio[language].daim;

  const mebelEl = document.querySelectorAll("#ten_years_with_you h6")[2];
  mebelEl.textContent = translatio[language].mebel;

  const payEl = document.querySelector("#we_pay_attention_to_details");
  payEl.lang = language;
  const payTextEl = payEl.querySelector("h4");
  payTextEl.textContent = translatio[language].onem;

  const treeEl = document.querySelector("#tree");
  treeEl.lang = language;
  const treeTextEl = treeEl.querySelector("h4");
  treeTextEl.textContent = translatio[language].use;

  const simpEl = document.querySelector("#simplicity");
  simpEl.lang = language;
  const simpTextEl = simpEl.querySelector("h4");
  simpTextEl.textContent = translatio[language].simp;

  const productEl = document.querySelector("#products");
  productEl.lang = language;
  const productTextEl = productEl.querySelector("h4");
  productTextEl.textContent = translatio[language].mehsul;
  const divaTextEl = productEl.querySelectorAll("p");
  for (let i = 0; i < divaTextEl.length; i++) {
    divaTextEl[i].textContent = translatio[language].diva;
  }

  const newEl = document.querySelector("#news");
  newEl.lang = language;
  const newTextEl = newEl.querySelector("h4");
  newTextEl.textContent = translatio[language].new;

  const salEl = document.querySelector("#news h6:first-of-type");
  salEl.textContent = translatio[language].sale;

  const yeniEl = document.querySelectorAll("#news h6")[1];
  yeniEl.textContent = translatio[language].yeni;

  const saleEl = document.querySelectorAll("#news h6")[2];
  saleEl.textContent = translatio[language].sale;

  const needEl = document.querySelector("#need");
  needEl.lang = language;
  const needTextEl = needEl.querySelector("h4");
  needTextEl.textContent = translatio[language].need;
  const butonTextEl = needEl.querySelector("button");
  butonTextEl.textContent = translatio[language].gonder;
  
  const abouttEl = document.querySelector("#footer h4:first-of-type");
  abouttEl.textContent = translatio[language].about;
  const aboutListEls = document.querySelectorAll("#footer ul:first-of-type li");
  aboutListEls[0].textContent = translatio[language].terms;
  aboutListEls[1].textContent = translatio[language].privacy;
  aboutListEls[2].textContent = translatio[language].cookies;

  const supportEl = document.querySelectorAll("#footer h4")[1];
  supportEl.textContent = translatio[language].support;
  const supportListEls = document.querySelectorAll("#footer ul")[1].querySelectorAll("li");
  supportListEls[0].textContent = translatio[language].support;
  supportListEls[1].textContent = translatio[language].faq;
  supportListEls[2].textContent = translatio[language].rules;

  const contactEl = document.querySelectorAll("#footer h4")[2];
  contactEl.textContent = translatio[language].contact;
  const contactListEls = document.querySelectorAll("#footer ul")[2].querySelectorAll("li");
  contactListEls[0].textContent = translatio[language].email;
  contactListEls[1].textContent = translatio[language].phone;
  contactListEls[2].textContent = translatio[language].address;

  const rightsEl = document.querySelector("#footer h6");
  rightsEl.textContent = `© ${translatio[language].privacyTermsMap}`;
}

const languageeLinks = document.querySelectorAll("#language-selector a");
languageeLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const language = event.target.textContent.toLowerCase();
    changeeLanguage(language);
  });
});

function changgeLanguage(language) {
  // contactlang
  const contacEl = document.querySelector("#contactus");
  contacEl.lang = language;
  const contacTextEl = contacEl.querySelector("h4");
  contacTextEl.textContent = tercume[language].who;
  const buttonTextEl = contacEl.querySelector("button");
  buttonTextEl.textContent = tercume[language].gonder;
  const izleTextEl = contacEl.querySelector("h5");
  izleTextEl.textContent = tercume[language].izle;

  const abouttEl = document.querySelector("#footer h4:first-of-type");
  abouttEl.textContent = tercume[language].about;
  const aboutListEls = document.querySelectorAll("#footer ul:first-of-type li");
  aboutListEls[0].textContent = tercume[language].terms;
  aboutListEls[1].textContent = tercume[language].privacy;
  aboutListEls[2].textContent = tercume[language].cookies;

  const supportEl = document.querySelectorAll("#footer h4")[1];
  supportEl.textContent = tercume[language].support;
  const supportListEls = document.querySelectorAll("#footer ul")[1].querySelectorAll("li");
  supportListEls[0].textContent = tercume[language].support;
  supportListEls[1].textContent = tercume[language].faq;
  supportListEls[2].textContent = tercume[language].rules;

  const contactEl = document.querySelectorAll("#footer h4")[2];
  contactEl.textContent = tercume[language].contact;
  const contactListEls = document.querySelectorAll("#footer ul")[2].querySelectorAll("li");
  contactListEls[0].textContent = tercume[language].email;
  contactListEls[1].textContent = tercume[language].phone;
  contactListEls[2].textContent = tercume[language].address;

  const rightsEl = document.querySelector("#footer h6");
  rightsEl.textContent = `© ${tercume[language].privacyTermsMap}`;
}

const languaggeLinks = document.querySelectorAll("#language-selector a");
languaggeLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const language = event.target.textContent.toLowerCase();
    changgeLanguage(language);
  });
});

function changegalleryLanguage(language) {
  // gallerylang
  const galleryEl = document.querySelector("#buttons")
  const hamisiEl = galleryEl.querySelectorAll("button");
  hamisiEl[0].textContent = tercuume[language].hamisi;
  hamisiEl[1].textContent = tercuume[language].stul;
  hamisiEl[2].textContent = tercuume[language].qapi;
  hamisiEl[3].textContent = tercuume[language].divan;
  
  const abouttEl = document.querySelector("#footer h4:first-of-type");
  abouttEl.textContent = tercuume[language].about;
  const aboutListEls = document.querySelectorAll("#footer ul:first-of-type li");
  aboutListEls[0].textContent = tercuume[language].terms;
  aboutListEls[1].textContent = tercuume[language].privacy;
  aboutListEls[2].textContent = tercuume[language].cookies;

  const supportEl = document.querySelectorAll("#footer h4")[1];
  supportEl.textContent = tercuume[language].support;
  const supportListEls = document.querySelectorAll("#footer ul")[1].querySelectorAll("li");
  supportListEls[0].textContent = tercuume[language].support;
  supportListEls[1].textContent = tercuume[language].faq;
  supportListEls[2].textContent = tercuume[language].rules;

  const contactEl = document.querySelectorAll("#footer h4")[2];
  contactEl.textContent = tercuume[language].contact;
  const contactListEls = document.querySelectorAll("#footer ul")[2].querySelectorAll("li");
  contactListEls[0].textContent = tercuume[language].email;
  contactListEls[1].textContent = tercuume[language].phone;
  contactListEls[2].textContent = tercuume[language].address;

  const rightsEl = document.querySelector("#footer h6");
  rightsEl.textContent = `© ${tercuume[language].privacyTermsMap}`;
}

const languagegalleryLinks = document.querySelectorAll("#language-selector a");
languagegalleryLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const language = event.target.textContent.toLowerCase();
    changegalleryLanguage(language);
  });
});
