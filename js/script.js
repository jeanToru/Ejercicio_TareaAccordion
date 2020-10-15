function accordion(accordionElem) {

    /* Al expanded panel que es el div que cubre todo si no es null se le remueve el active y al panel que es el div actual se le agrega el active*/

    function mostrarPanel(panel) {
        let expandedPanel = accordionElem.querySelector(".active");
        if (expandedPanel) {
            expandedPanel.classList.remove("active");
        } else {
            panel.classList.add("active");
        }
    }
    let allPanels = accordionElem.querySelectorAll(".panel");
    for (let i = 0; i < allPanels.length; i++) {
        allPanels[i].addEventListener("click", (event) => {
            mostrarPanel(event.currentTarget);
        });
    }
}

accordion(document.getElementById("accordion"));
