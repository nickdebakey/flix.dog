function lightMode() {
  var element = document.body;
  var lightModeHidden = false;
  element.classList.toggle("light-mode");
  function action() {
    hidden = !hidden;
    if (hidden) {
      document.getElementById("").style.visibility = "hidden";
    } else {
      document.getElementById("").style.visibility = "visible";
    }
  }
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
