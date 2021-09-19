function settingAppear () {
    document.getElementById('setting').classList.toggle('active');
}

var specialNav = document.getElementById("pictures");
var navItems = specialNav.getElementsByTagName('img');

for (let img of navItems) {
    img.addEventListener("click", function() {
        if (!img.classList.contains('active')) {
            clearActives(navItems);
            img.classList.toggle('active');
            document.body.style.backgroundImage = "url("+img.getAttribute('src')+")"
        }
    });
}

function clearActives(classlist) {
    for (let value of classlist) {
        value.classList.remove('active');
    }
}

var date = document.getElementById("datetime");
const today = new Date(Date.now()).toLocaleTimeString('ua-UA');
date.innerHTML = today 
