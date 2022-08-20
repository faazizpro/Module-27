/*
1. Add event listener to the deposit button
2. get the deposit amount from the deposit input field
2-5. Convert String deposit amount to a number type

3. Clear deposit input field after getting the value

4. Get the previous deposit total

5. calculate new deposit total and set the value to the deposit total

6. Get Current Balance Total

7. Calculate the new balance and set it to the balance total element
*/
//Step 1: 
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step 2:
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    console.log(newDepositAmount);

    //Step 3:
    depositField.value = '';

    //Step 4: Get the previous deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //Step 5: calculate new deposit total and set the value to the deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    //Step 6: Get Current Balance Total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //Step 7: Calculate the new balance and set it to the balance total element
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})
