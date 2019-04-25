function init() {
    //add your javascrip between these two lines of code
    var button = document.getElementById('entrybutton');
    var msg = document.getElementById('entryinput');

    button.addEventListener('click', function () {
        alert(" Jose\"CHIEF\"Lopez: " + msg.value);
        document.getElementById('textoutput').innerHTML = msg.value;
    });
}
window.addEventListener('load', init);