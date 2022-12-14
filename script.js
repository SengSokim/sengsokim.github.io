let themeDots = document.getElementsByClassName('theme-dot')
let theme = localStorage.getItem('theme')

if (theme == null ){
    setTheme('light')
}else{
    setTheme(theme)
}
for (var i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('click', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'style.css'
    }
    if(mode == 'dark'){
        document.getElementById('theme-style').href = 'dark.css'
    }
    if(mode == 'green'){
        document.getElementById('theme-style').href = 'green.css'
    }
    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme',mode)
}
