/* ======= INTERNATIONAL TELEPHONE INPUT ======= */
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
const info = document.querySelector(".alert-info");
const error = document.querySelector(".alert-error");
const input = document.querySelectorAll(".input-group");
let digit = 0;
function process(event) {
  event.preventDefault();
  const phoneNumber = phoneInput.getNumber();
  info.style.display = "none";
  error.style.display = "none";

  if (phoneInput.isValidNumber() && phoneInput === digit) {
    info.style.display = "";
    info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
  } else {
    error.style.display = "";
    error.innerHTML = `Invalid phone number.`;
    error.style.color = "red !important";
    input[2].style.border = "1px solid red";
  }
}
