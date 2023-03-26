

document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositField = depositInput.value;
    const depositAmount = parseFloat(depositField);
    // console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalField = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalField);

    const newDepositAmount = depositAmount + depositTotalAmount;
     depositTotal.innerText = newDepositAmount;


     const balance = document.getElementById('balance-total');
     const balanceField = balance.innerText;
     const balanceAmount = parseFloat(balanceField);

     const newBalanceTotal = balanceAmount + newDepositAmount;

     balance.innerText = newBalanceTotal;
     depositInput.value = '';
})



document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawTxt01 = withdrawInput.value;
    const withdrawNumber01 = parseFloat(withdrawTxt01);



    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTxt02 = withdrawTotal.innerText;
    const withdrawNumber02 = parseFloat(withdrawTxt02);

    const newWithdrawBalance = withdrawNumber02 + withdrawNumber01;

    withdrawTotal.innerText =  newWithdrawBalance;

    withdrawInput.value = '';



    const withdrawBalance = document.getElementById('balance-total');
    const withdrawBalanceTxt = withdrawBalance.innerText;
    const withdrawBalanceNumber = parseFloat(withdrawBalanceTxt);

    const totalBalanceWithdraw = withdrawBalanceNumber - newWithdrawBalance;

    withdrawBalance.innerText = totalBalanceWithdraw;

})