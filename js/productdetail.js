const texth4Element = document.querySelector("#elastic .tree .textt .h4");
const plus1Element = document.querySelector("#elastic .image .plus1");
const plus2Element = document.querySelector("#elastic .tree .plus2");
const plus3Element = document.querySelector("#elastic .tree .plus3");


plus1Element.addEventListener("click", () => {
  texth4Element.innerHTML = "Elastik hörgü";
});

plus2Element.addEventListener("click", () => {
  texth4Element.innerHTML = "Bərk ağac çərçivəsi";
});

plus3Element.addEventListener("click", () => {
  texth4Element.innerHTML = "Yumşaq vatka";
});

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
      items: 3,
    },
  },
});



const blueBtn = document.getElementById('blue');
const orangeBtn = document.getElementById('orange');
const grayBtn = document.getElementById('gray');
const brownBtn = document.getElementById('brown');
const pinkBtn = document.getElementById('pink');
const blackBtn = document.getElementById('black');
const greyBtn = document.getElementById('grey');
const greenBtn = document.getElementById('green');
const product = document.querySelector("#detail .image");


blueBtn.addEventListener('click', () => {
  product.style.backgroundColor = "#4863A0";
});
orangeBtn.addEventListener('click', () => {
  product.style.backgroundColor = "#F88138";
});
grayBtn.addEventListener('click', () => {
  product.style.backgroundColor = "#555555";
});
brownBtn.addEventListener('click', () => {
  product.style.backgroundColor = "#E3A03A";
});
pinkBtn.addEventListener('click', () => {
  product.style.backgroundColor = "#DA1467";
});
blackBtn.addEventListener('click', () => {
  product.style.backgroundColor = "#000000";
});
greyBtn.addEventListener('click', () => {
  product.style.backgroundColor = "#C6C6C6";
});
greenBtn.addEventListener('click', () => {
  product.style.backgroundColor = "#ADD19E";
});
