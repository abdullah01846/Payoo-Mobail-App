document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const acountNumber = document.getElementById('acount-number').value;
    const pinNumer = document.getElementById('pin').value;
    const conVertedPin = parseInt(pinNumer)
    

   if(acountNumber.length === 11){
      if(conVertedPin === 1234){
        window.location.href="main.html"
      }
      else{
        alert('pin is not corrceted')
      }
   }
   else{
     alert('need valid acount number')
   }
    
    


})
