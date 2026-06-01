// Light/dark mode button animation

const themebutton = document.getElementById("themebutton");

themebutton.addEventListener("click", () => {
    document.body.classList.toggle("lightmode");

    if (document.body.classList.contains("lightmode")) {
        themebutton.textContent = "Dark Mode";
    } else {
        themebutton.textContent = "Light Mode";
    }
});


// Join Button interaction

const joinbutton = document.getElementById("joinbutton");

const welcomemessage = document.getElementById("welcomemessage");

joinbutton.addEventListener("click", () => {
    welcomemessage.textContent = "Welcome to HYBRID.";
});