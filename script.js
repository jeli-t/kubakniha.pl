// script.js

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.burger-menu').addEventListener('click', function() {
        document.querySelector('.navigation').classList.toggle('show');
    });

    // Close the menu when a link is clicked
    var navLinks = document.querySelectorAll('.navigation a');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function() {
            document.querySelector('.navigation').classList.remove('show');
        });
    }
});
