//option 1: directly set on the HTML element

// option 2: add onclick function
function makeRed(){
    document.body.style.backgroundColor='red';
}

//option 3:
const makeBlueButton = document.getElementById('make_blue');
makeBlueButton.onclick =  makeBlue; //aikhane () eta dile auto call hoi thakbe so dea jabena

function makeBlue(){
 document.body.style.backgroundColor = 'blue';
}

//option 3 another
const purpleButton = document.getElementById('make_purple');
purpleButton.onclick = function make_purple(){
    document.body.style.backgroundColor = 'purple';
}

