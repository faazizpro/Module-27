/*
1. Add Event Handler to the withdraw button

2. get the withdraw amount

3. Clear the input field

4. Get the previous withdraw total

5. calculate new withdraw total and set the value to the withdraw total Element

6. Get previous balance

7. Calculate new balance and set it to the balance total element
*/

//Step 1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //Step 2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    console.log(newWithdrawAmount );

    //Step 3: Clear the input field
    withdrawField.value = '';

    //Step 4: get the previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //Step 5: calculate new withdraw total and set the value to the withdraw total Element
    const newWithDrawTotal = previousWithdrawTotal + newWithdrawAmount
    withdrawTotalElement.innerText = newWithDrawTotal;

    //Step 6: Get previous balance
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //Step 7. Calculate new balance and set it to the balance total element
    const balanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = balanceTotal;

})