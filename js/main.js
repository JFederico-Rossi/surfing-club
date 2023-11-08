document.addEventListener("DOMContentLoaded", function () {
    const toggleMenuButton = document.getElementById("toggle-menu");
    const dropdownMenu = document.getElementById("dropdown-menu");

    toggleMenuButton.addEventListener("click", function () {
        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none";
        } else {
            dropdownMenu.style.display = "block";
        }
    });
});
