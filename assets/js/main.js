console.log("test");

let counter = 0;
let counter2 = 0;

function count1() {
    updateDisplay(++counter);
}
function reset() {
    counter = 0;
    counter2 = 0;
    updateDisplay(counter)
    updateDisplay2(counter2);
}
function updateDisplay(wert) {
    document.getElementById("ergebnis1").innerHTML = wert;
}
function count2() {
    updateDisplay(counter+=2);
}
function count3() {
    updateDisplay(counter+=3);
}
function count1a() {
    updateDisplay2(++counter2);
}
function updateDisplay2(wert2) {
    document.getElementById("ergebnis2").innerHTML = wert2;
}
function count2a() {
    updateDisplay2(counter2+=2);
}
function count3a() {
    updateDisplay2(counter2+=3);
}
function fenster() {
    let spielerName1 = window.prompt("Bitte eintragen:", "Spielername 1");
    console.log(spielerName1);
    let spielerName2 = window.prompt("Bitte eintragen:", "Spielername 2");
    console.log(spielerName2);
}