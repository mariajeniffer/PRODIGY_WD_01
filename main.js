document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".nav-menu");
    const toggleMenu = document.createElement("div");

    toggleMenu.innerHTML = "&#9776;";
    toggleMenu.style.cursor = "pointer";
    toggleMenu.style.fontSize = "1.5rem";
    toggleMenu.style.display = "none";
    document.querySelector("header").appendChild(toggleMenu);

    toggleMenu.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // Show toggleMenu only on small screens
    const updateMenuDisplay = () => {
        if (window.innerWidth <= 768) {
            toggleMenu.style.display = "block";
        } else {
            toggleMenu.style.display = "none";
            menu.classList.remove("active");
        }
    };

    window.addEventListener("resize", updateMenuDisplay);
    updateMenuDisplay();
});