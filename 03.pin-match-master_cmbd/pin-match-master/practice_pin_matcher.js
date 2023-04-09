document.querySelector('.wrong-pin').style.display = 'none';
document.querySelector('.correct-pin').style.display = 'none';

function generatePin(){
    const pin = Math.floor(Math.random()*(9000+1000));
    const generatedPin = document.querySelector('.generatedPin');
    generatedPin.style.textAlign = 'center'; 
    generatedPin.value = pin;
}

