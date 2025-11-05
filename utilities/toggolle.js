document.getElementById('cashout').style.display = 'none';

document.getElementById('add-money-box').addEventListener('click', function(){
    handleToggle('addMoney', 'block')
    handleToggle('cashout', 'none')
})

document.getElementById('cashout-box').addEventListener('click', function(){
    handleToggle('addMoney', 'none')
    handleToggle('cashout', 'block')
})


function handleToggle(id, status){
    document.getElementById(id).style.display = status;
}