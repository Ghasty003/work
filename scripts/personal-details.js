//Include side.html file in personal-details.html

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