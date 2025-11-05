document.getElementById('withdraw-btn').addEventListener('click', function(event){
  event.preventDefault()
  const accountNumber = document.getElementById('cashout-account').value;
  const amount = getInputeValueByID('cashout-amount');
  const pinNumber = getInputeValueByID('cashout-pin');
  const mainBalance = getInnerTextByID('main-balance');

     if(accountNumber.length === 11){
        if(pinNumber === 1234){
            const sum = mainBalance - amount;
            setInnerTextByIDandValue('main-balance', sum);
        }
        else{
          alert('pinNumber Not valid');
        }
     }
     else{
        alert('accout number not valid')
     }

})