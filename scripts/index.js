//Include side.html file in index.html

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

// Script for signup.html

const showPassword = document.querySelector(".see-pass");
const input = document.querySelector(".password input");

showPassword.addEventListener("click", () => {
  if (input.type === "text") {
    input.type = "password";
  } else if (input.type === "password") {
    input.type = "text";
  }
});
