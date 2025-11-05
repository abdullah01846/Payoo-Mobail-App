document.getElementById('add-money').addEventListener('click', function(event){
  event.preventDefault()
  const accountNumber = document.getElementById('acount-number').value;
  const amount = getInputeValueByID('amount');
  const pinNumber = getInputeValueByID('pin');
  const mainBalance = getInnerTextByID('main-balance');

     if(accountNumber.length === 11){
        if(pinNumber === 1234){
            const sum = mainBalance + amount;
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