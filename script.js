let themeDots = document.getElementsByClassName('theme-dot')
let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}
for (var i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode

        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'style.css'
    }
    if (mode == 'dark') {
        document.getElementById('theme-style').href = 'dark.css'
    }
    if (mode == 'green') {
        document.getElementById('theme-style').href = 'green.css'
    }
    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme', mode)
}

// animations
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    const downarrow = document.getElementById('down-arrow');
    downarrow.style.display = 'none';
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

