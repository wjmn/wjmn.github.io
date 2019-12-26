function toggleMenu() {
    var left = document.getElementById("left");
    if ((parseInt(left.style.marginLeft) >= 0) || (left.style.marginLeft == "" && screen.width >= 1280)) {
        left.style.marginLeft = "-320px";
    } else {
        left.style.marginLeft = "0px";
    }
}
