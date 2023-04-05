
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberFieldString);

    const newPhoneNumber = previousPhoneNumber + 1;
    phoneNumberField.value = newPhoneNumber;

    //phone total price
    const phoneTotal = newPhoneNumber * 1219;
    const phoneTotalPrice = document.getElementById('phone-total');
    phoneTotalPrice.innerText = phoneTotal;


    // calculate sub tax total
    const phoneTotalElement = document.getElementById('phone-total');
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);


    const caseTotalElement = document.getElementById('case-total');
    const currentCaseTotalString = caseTotalElement.innerText;
    const currentCaseTotal = parseInt(currentCaseTotalString);

    // subtotal
    const currentSubTotal = currentCaseTotal + currentPhoneTotal;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;

    // tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    const taxAmountElement = document.getElementById('tax-amount');
    taxAmountElement.innerText = taxAmount;

    // final amount
    const finalAmount = currentSubTotal + taxAmount;
    const finalAmountElement = document.getElementById('final-total')
    finalAmountElement.innerText = finalAmount;

})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberFieldString);

    const newPhoneNumber = previousPhoneNumber - 1;
    phoneNumberField.value = newPhoneNumber;

     //phone total price
     const phoneTotal = newPhoneNumber * 1219;
     const phoneTotalPrice = document.getElementById('phone-total');
     phoneTotalPrice.innerText = phoneTotal;



      // calculate sub tax total
    const phoneTotalElement = document.getElementById('phone-total');
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);


    const caseTotalElement = document.getElementById('case-total');
    const currentCaseTotalString = caseTotalElement.innerText;
    const currentCaseTotal = parseInt(currentCaseTotalString);

    // subtotal
    const currentSubTotal = currentCaseTotal + currentPhoneTotal;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;

        // tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    const taxAmountElement = document.getElementById('tax-amount');
    taxAmountElement.innerText = taxAmount;

    // final amount
    const finalAmount = currentSubTotal + taxAmount;
    const finalAmountElement = document.getElementById('final-total')
    finalAmountElement.innerText = finalAmount;

})


// ====================================================== //

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;

    const caseTotal = newCaseNumber * 59;
    const caseTotalPrice = document.getElementById('case-total');
    caseTotalPrice.innerText = caseTotal;


     // calculate sub tax total
     const phoneTotalElement = document.getElementById('phone-total');
     const currentPhoneTotalString = phoneTotalElement.innerText;
     const currentPhoneTotal = parseInt(currentPhoneTotalString);
 
 
     const caseTotalElement = document.getElementById('case-total');
     const currentCaseTotalString = caseTotalElement.innerText;
     const currentCaseTotal = parseInt(currentCaseTotalString);
 
     const currentSubTotal = currentCaseTotal + currentPhoneTotal;

     // subtotal
     const subTotalElement = document.getElementById('sub-total');
     subTotalElement.innerText = currentSubTotal;

             // tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    const taxAmountElement = document.getElementById('tax-amount');
    taxAmountElement.innerText = taxAmount;

    // final amount
    const finalAmount = currentSubTotal + taxAmount;
    const finalAmountElement = document.getElementById('final-total')
    finalAmountElement.innerText = finalAmount;

})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    const newCaseNumber = previousCaseNumber - 1;
    caseNumberField.value = newCaseNumber;

    // case total price
    const caseTotal = newCaseNumber * 59;
    const caseTotalPrice = document.getElementById('case-total');
    caseTotalPrice.innerText = caseTotal;

     // calculate sub tax total
     const phoneTotalElement = document.getElementById('phone-total');
     const currentPhoneTotalString = phoneTotalElement.innerText;
     const currentPhoneTotal = parseInt(currentPhoneTotalString);
 
 
     const caseTotalElement = document.getElementById('case-total');
     const currentCaseTotalString = caseTotalElement.innerText;
     const currentCaseTotal = parseInt(currentCaseTotalString);
 
     const currentSubTotal = currentCaseTotal + currentPhoneTotal;

     // subtotal
     const subTotalElement = document.getElementById('sub-total');
     subTotalElement.innerText = currentSubTotal;

    // tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    const taxAmountElement = document.getElementById('tax-amount');
    taxAmountElement.innerText = taxAmount;

    // final amount
    const finalAmount = currentSubTotal + taxAmount;
    const finalAmountElement = document.getElementById('final-total')
    finalAmountElement.innerText = finalAmount;

})



