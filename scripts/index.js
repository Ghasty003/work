//Include side.html file in neccessary html files.

function includeHTML() {
  let z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}
includeHTML();

// Script for signup.html to toggle password visibility.

const showPassword = document.querySelector(".see-pass");
const input = document.querySelector(".password input");

showPassword.addEventListener("click", () => {
  if (input.type === "text") {
    input.type = "password";
  } else if (input.type === "password") {
    input.type = "text";
  }
});

// Check strength of password in the register page.

const passwordInput = document.querySelector(".pass");
const lines = document.querySelectorAll(".lines div");
const strength = document.querySelectorAll(".strength p")[1];

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length >= 8) {
    lines[0].style.background = "#2B9978";
  } else {
    lines[0].style.background = "#D1D1D1";
  }

  if (/[0-9]/.test(passwordInput.value) && passwordInput.value.length >= 8) {
    lines[1].style.background = "#2B9978";
  } else {
    lines[1].style.background = "#D1D1D1";
  }

  if (
    /[^a-zA-Z0-9]/g.test(passwordInput.value) &&
    passwordInput.value.length >= 8 &&
    /[0-9]/.test(passwordInput.value)
  ) {
    lines[2].style.background = "#2B9978";
  } else {
    lines[2].style.background = "#D1D1D1";
  }
});
