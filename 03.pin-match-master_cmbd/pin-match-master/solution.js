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

// Task 06 - (check pin if the pin is matched or not)
function checkPin(){
    const generatedPin = document.querySelector('.generatedPin').value;
    const newPin = document.querySelector('.showValue').value;
    // console.log(generatedPin, newPin);

    if(generatedPin == newPin){
        document.querySelector('.correct-pin').style.display = 'block';
        document.querySelector('.wrong-pin').style.display = 'none';

        document.querySelector('.generate-btn').style.backgroundColor = 'green';
        document.querySelector('.submit-btn').style.backgroundColor = 'green';
        document.querySelector('.submit-btn').disabled = true;
        document.querySelector('.generate-btn').disabled = true;

    }
    else{
        document.querySelector('.correct-pin').style.display = 'none';
        document.querySelector('.wrong-pin').style.display = 'block';

        document.querySelector('.generate-btn').style.backgroundColor = 'red';
        document.querySelector('.submit-btn').style.backgroundColor = 'red';
        document.querySelector('.submit-btn').disabled = false;
        document.querySelector('.generate-btn').disabled = true;



       let tryLeft = document.getElementById('tryLeft').innerText;
        // console.log(typeof tryLeft);
        let newTryLeft = parseInt(tryLeft);
         if(newTryLeft > 0){
            newTryLeft = newTryLeft - 1;
         }
         document.getElementById('tryLeft').innerText = newTryLeft;
         document.querySelector('.showValue').value = '';

         if(newTryLeft === 0){
        document.querySelector('.submit-btn').disabled = true;
        document.querySelector('.submit-btn').style.backgroundColor = 'black';
        document.querySelector('.submit-btn').innerText = 'PIN LOCKED!'


         }
    }
}


