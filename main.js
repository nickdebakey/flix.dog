function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    $('#header img').toggle();
    $('#darkModeBtn p').toggle();
    $('.socialLinks').toggleClass("socialLinksLight");
}