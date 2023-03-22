//option 1: directly set on the HTML element
/* <button onclick="console.log(65)">Another button</button> */


// option 2: add onclick function on the html element
/*<button onclick="makeRed()">Make Red</button>*/

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


//option 4:
const pinkButton = document.getElementById('make_pink');
pinkButton.addEventListener('click', makePink)

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

//option: 4 another
const makeGreenButton = document.getElementById('make_green');
makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
})

//option: 4 Final use
// Important: We will use this sometimes
document.getElementById('make_goldenRod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})


