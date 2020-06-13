function getCups() {
    return (Date.now() - 1546297200000) / 86400000;
}
function getLines() {
    return ((Date.now() - 1546297200000) / 86400000) * 10;
}
document.getElementById("coffee").setAttribute("data-to", getCups());
document.getElementById("lines").setAttribute("data-to", getLines());