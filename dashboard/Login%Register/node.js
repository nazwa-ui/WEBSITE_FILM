
let lastChecked = null;

function toggleRadio(radio) {
  if (lastChecked === radio) {
    radio.checked = false;
    lastChecked = null;
  } else {
    lastChecked = radio;
  }
}