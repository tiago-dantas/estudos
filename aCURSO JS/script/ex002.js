/* let name = window.prompt('Insert your name');
window.alert('Welcome ' + name + "!"); */

let lshow = function() {
    let ln1 = Number(document.getElementById('n1').value);
    let ln2 = Number(document.getElementById('n2').value);
    let lnr = ln1 + ln2;
    let result = document.getElementById('dnr');
    result.innerHTML = lnr;
}


/* let lshow = function() {
    let ln1 = parseInt(document.getElementById('n1').value);
    let ln2 = parseInt(document.getElementById('n2').value);
    let lnr = ln1 + ln2;
    let result = document.getElementById('dnr')
    result.innerHTML = lnr
}
*/