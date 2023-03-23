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

  const li1El = document.querySelector("#header .navbar ul li a:first-of-type");
  li1El.textContent = translations[language].li1;

  const li2El = document.querySelectorAll("#header .navbar ul li a")[1];
  li2El.textContent = translations[language].li2;

  const li3El = document.querySelectorAll("#header .navbar ul li a")[2];
  li3El.textContent = translations[language].li3;

  const li4El = document.querySelectorAll("#header .navbar ul li a")[3];
  li4El.textContent = translations[language].li4;

  const li5El = document.querySelectorAll("#header .navbar ul li a")[4];
  li5El.textContent = translations[language].li5;

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
  const li1El = document.querySelector("#headeer .navbar ul li a:first-of-type");
  li1El.textContent = translatio[language].li1;

  const li2El = document.querySelectorAll("#headeer .navbar ul li a")[1];
  li2El.textContent = translatio[language].li2;

  const li3El = document.querySelectorAll("#headeer .navbar ul li a")[2];
  li3El.textContent = translatio[language].li3;

  const li4El = document.querySelectorAll("#headeer .navbar ul li a")[3];
  li4El.textContent = translatio[language].li4;

  const li5El = document.querySelectorAll("#headeer .navbar ul li a")[4];
  li5El.textContent = translatio[language].li5;

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
  const li1El = document.querySelector("#headerr .navbar ul li a:first-of-type");
  li1El.textContent = tercume[language].li1;

  const li2El = document.querySelectorAll("#headerr .navbar ul li a")[1];
  li2El.textContent = tercume[language].li2;

  const li3El = document.querySelectorAll("#headerr .navbar ul li a")[2];
  li3El.textContent = tercume[language].li3;

  const li4El = document.querySelectorAll("#headerr .navbar ul li a")[3];
  li4El.textContent = tercume[language].li4;

  const li5El = document.querySelectorAll("#headerr .navbar ul li a")[4];
  li5El.textContent = tercume[language].li5;

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
  const li1El = document.querySelector("#headergallery .navbar ul li a:first-of-type");
  li1El.textContent = tercuume[language].li1;

  const li2El = document.querySelectorAll("#headergallery .navbar ul li a")[1];
  li2El.textContent = tercuume[language].li2;

  const li3El = document.querySelectorAll("#headergallery .navbar ul li a")[2];
  li3El.textContent = tercuume[language].li3;

  const li4El = document.querySelectorAll("#headergallery .navbar ul li a")[3];
  li4El.textContent = tercuume[language].li4;

  const li5El = document.querySelectorAll("#headergallery .navbar ul li a")[4];
  li5El.textContent = tercuume[language].li5;

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

function changecatalogLanguage(language) {
  // cataloglang
  const li1El = document.querySelector("#headercatalog .navbar ul li a:first-of-type");
  li1El.textContent = tercumet[language].li1;

  const li2El = document.querySelectorAll("#headercatalog .navbar ul li a")[1];
  li2El.textContent = tercumet[language].li2;

  const li3El = document.querySelectorAll("#headercatalog .navbar ul li a")[2];
  li3El.textContent = tercumet[language].li3;

  const li4El = document.querySelectorAll("#headercatalog .navbar ul li a")[3];
  li4El.textContent = tercumet[language].li4;

  const li5El = document.querySelectorAll("#headercatalog .navbar ul li a")[4];
  li5El.textContent = tercumet[language].li5;

  const abouttEl = document.querySelector("#footer h4:first-of-type");
  abouttEl.textContent = tercumet[language].about;
  const aboutListEls = document.querySelectorAll("#footer ul:first-of-type li");
  aboutListEls[0].textContent = tercumet[language].terms;
  aboutListEls[1].textContent = tercumet[language].privacy;
  aboutListEls[2].textContent = tercumet[language].cookies;

  const supportEl = document.querySelectorAll("#footer h4")[1];
  supportEl.textContent = tercumet[language].support;
  const supportListEls = document.querySelectorAll("#footer ul")[1].querySelectorAll("li");
  supportListEls[0].textContent = tercumet[language].support;
  supportListEls[1].textContent = tercumet[language].faq;
  supportListEls[2].textContent = tercumet[language].rules;

  const contactEl = document.querySelectorAll("#footer h4")[2];
  contactEl.textContent = tercumet[language].contact;
  const contactListEls = document.querySelectorAll("#footer ul")[2].querySelectorAll("li");
  contactListEls[0].textContent = tercumet[language].email;
  contactListEls[1].textContent = tercumet[language].phone;
  contactListEls[2].textContent = tercumet[language].address;

  const rightsEl = document.querySelector("#footer h6");
  rightsEl.textContent = `© ${tercumet[language].privacyTermsMap}`;
}

const languagecatalogLinks = document.querySelectorAll("#language-selector a");
languagecatalogLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const language = event.target.textContent.toLowerCase();
    changecatalogLanguage(language);
  });
});

function changeproductdetailLanguage(language) {
  // productdetaillang
  const li1El = document.querySelector("#headerdetail .navbar ul li a:first-of-type");
  li1El.textContent = perevod[language].li1;

  const li2El = document.querySelectorAll("#headerdetail .navbar ul li a")[1];
  li2El.textContent = perevod[language].li2;

  const li3El = document.querySelectorAll("#headerdetail .navbar ul li a")[2];
  li3El.textContent = perevod[language].li3;

  const li4El = document.querySelectorAll("#headerdetail .navbar ul li a")[3];
  li4El.textContent = perevod[language].li4;

  const li5El = document.querySelectorAll("#headerdetail .navbar ul li a")[4];
  li5El.textContent = perevod[language].li5;

  const detailEl = document.querySelector("#detail");
  detailEl.lang = language;
  const detailTextEl = detailEl.querySelector("h4");
  detailTextEl.textContent = perevod[language].divan;
  const h5El = detailEl.querySelector("h5");
  h5El.textContent = perevod[language].reng;
  const h3El = detailEl.querySelector("h3");
  h3El.textContent = perevod[language].olcu;
  
  const colorEl = document.querySelector("#detail p:first-of-type");
  colorEl.textContent = perevod[language].lorem;
  const colorrEl = document.querySelectorAll("#detail p")[1];
  colorrEl.textContent = perevod[language].hundurluk;
  const color1El = document.querySelectorAll("#detail p")[2];
  color1El.textContent = perevod[language].genis;
  const color2El = document.querySelectorAll("#detail p")[3];
  color2El.textContent = perevod[language].derin;
  const color3El = document.querySelectorAll("#detail p")[4];
  color3El.textContent = perevod[language].otur;
  const color4El = document.querySelectorAll("#detail p")[5];
  color4El.textContent = perevod[language].maks;
  
  const yumEl = document.querySelector("#elastic");
  yumEl.lang = language;
  const yumTextEl = yumEl.querySelector("h4");
  yumTextEl.textContent = perevod[language].yumsaq;

  const elaqeEl = document.querySelector("#relatedproduct");
  elaqeEl.lang = language;
  const elaqeTextEl = elaqeEl.querySelector("h4");
  elaqeTextEl.textContent = perevod[language].elaqe;

  const abouttEl = document.querySelector("#footer h4:first-of-type");
  abouttEl.textContent = perevod[language].about;
  const aboutListEls = document.querySelectorAll("#footer ul:first-of-type li");
  aboutListEls[0].textContent = perevod[language].terms;
  aboutListEls[1].textContent = perevod[language].privacy;
  aboutListEls[2].textContent = perevod[language].cookies;

  const supportEl = document.querySelectorAll("#footer h4")[1];
  supportEl.textContent = perevod[language].support;
  const supportListEls = document.querySelectorAll("#footer ul")[1].querySelectorAll("li");
  supportListEls[0].textContent = perevod[language].support;
  supportListEls[1].textContent = perevod[language].faq;
  supportListEls[2].textContent = perevod[language].rules;

  const contactEl = document.querySelectorAll("#footer h4")[2];
  contactEl.textContent = perevod[language].contact;
  const contactListEls = document.querySelectorAll("#footer ul")[2].querySelectorAll("li");
  contactListEls[0].textContent = perevod[language].email;
  contactListEls[1].textContent = perevod[language].phone;
  contactListEls[2].textContent = perevod[language].address;

  const rightsEl = document.querySelector("#footer h6");
  rightsEl.textContent = `© ${perevod[language].privacyTermsMap}`;
}

const languagedetailLinks = document.querySelectorAll("#language-selector a");
languagedetailLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const language = event.target.textContent.toLowerCase();
    changeproductdetailLanguage(language);
  });
});
