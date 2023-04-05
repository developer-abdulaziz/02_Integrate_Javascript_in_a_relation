// Task 01 - Notification diasabled
document.querySelector('.wrong-pin').style.display = 'none';
document.querySelector('.correct-pin').style.display = 'none';

// Task 02 - Generate Pin (4 digit pin)
function generatePin(){
    const pin = Math.floor(Math.random()*(9000) + 1000);
    const generatePinField = document.querySelector('.generatedPin');
    generatePinField.style.textAlign = 'center';
    generatePinField.value = pin;

}

// Task 02 - (Input number populate on show value input) 
// populate ortho holo dekhano
function showInput(number){
    const showInput = document.querySelector(".showValue");
    showInput.value = showInput.value + number;
    showInput.style.textAlign ="center"
}

// Task 04 - (Clear all input field) using C on calculate
function clearInput(){
    document.querySelector(".showValue").value = '';
}



// Task 05 - (Remove element one by one using "<")
function removeElement(){
    const currentValue = document.querySelector(".showValue").value;
    const newCurrentValue = currentValue.substring(0, currentValue.length-1);
    document.querySelector(".showValue").value = newCurrentValue;

}


/*
// substring meaning
let text = 'Hello world';
let result = text.substring(0, 5);
console.log(result);
*/



