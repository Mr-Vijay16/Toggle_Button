const button = document.getElementById("modeBtn");

button.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "Enable Light Mode";
    } else {
        button.textContent = "Enable Dark Mode";
    }

});