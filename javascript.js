const menuButton = document.querySelector(".menu_button")

function hideMenu() {
    const navigation = document.querySelector(".menu");

    
    navigation.classList.toggle("hide")
}


menuButton.addEventListener("click", hideMenu) 