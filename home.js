const addMoney = document.getElementById('addMoney');
const cashOut = document.getElementById('cashOut');
const transferMoney = document.getElementById('transferMoney');
const getBonus = document.getElementById('getBonus');
const payBill = document.getElementById('payBill');
const history = document.getElementById('history');
const latestPayment = document.getElementById('latestPayment');


document.getElementById('addMoneyBtn').addEventListener('click', function () {
    
    addMoney.classList.remove('hidden')
    cashOut.classList.add('hidden')
    transferMoney.classList.add('hidden')
    getBonus.classList.add('hidden')
    payBill.classList.add('hidden')
    history.classList.add('hidden')
    latestPayment.classList.add('hidden')
    
})
document.getElementById('cashOutBtn').addEventListener('click', function () {
    
    addMoney.classList.add('hidden')
    cashOut.classList.remove('hidden')
    transferMoney.classList.add('hidden')
    getBonus.classList.add('hidden')
    payBill.classList.add('hidden')
    history.classList.add('hidden')
    latestPayment.classList.add('hidden')
  
})
document.getElementById('transferMoneyBtn').addEventListener('click', function () {
    
    addMoney.classList.add('hidden')
    cashOut.classList.add('hidden')
    transferMoney.classList.remove('hidden')
    getBonus.classList.add('hidden')
    payBill.classList.add('hidden')
    history.classList.add('hidden')
    latestPayment.classList.add('hidden')
   
})
document.getElementById('getBonusBtn').addEventListener('click', function () {
    
    addMoney.classList.add('hidden')
    cashOut.classList.add('hidden')
    transferMoney.classList.add('hidden')
    getBonus.classList.remove('hidden')
    payBill.classList.add('hidden')
    history.classList.add('hidden')
    latestPayment.classList.add('hidden')
    
})
document.getElementById('payBillBtn').addEventListener('click', function () {
    
    addMoney.classList.add('hidden')
    cashOut.classList.add('hidden')
    transferMoney.classList.add('hidden')
    getBonus.classList.add('hidden')
    payBill.classList.remove('hidden')
    history.classList.add('hidden')
    latestPayment.classList.add('hidden')
    
})
document.getElementById('historyBtn').addEventListener('click', function () {
    
    addMoney.classList.add('hidden')
    cashOut.classList.add('hidden')
    transferMoney.classList.add('hidden')
    getBonus.classList.add('hidden')
    payBill.classList.add('hidden')
    history.classList.remove('hidden')
    latestPayment.classList.add('hidden')
    
})