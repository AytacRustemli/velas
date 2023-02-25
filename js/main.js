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
