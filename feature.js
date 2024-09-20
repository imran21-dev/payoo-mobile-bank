function sectionAdd(id) {
     document.getElementById('addMoney').classList.add('hidden');
     document.getElementById('cashOut').classList.add('hidden');
     document.getElementById('transferMoney').classList.add('hidden');
     document.getElementById('getBonus').classList.add('hidden');
     document.getElementById('payBill').classList.add('hidden');
     document.getElementById('history').classList.add('hidden');
     document.getElementById('latestPayment').classList.add('hidden');  
     
     document.getElementById(id).classList.remove('hidden')
}

//get input value 

function getInputValue(id) {
  const providedId = document.getElementById(id).value;
  const inputNumber = parseFloat(providedId);
  return inputNumber
}

// get inner text
function getInnerText(id) {
  const providedId = document.getElementById(id).innerText;
  const innerText = parseFloat(providedId);
  return innerText
}

// cart bg

function cartBg(id) {
    document.getElementById('addMoneyBtn').className = "w-full  btn btn-outline flex items-center flex-col justify-center h-max border-gray-200 py-5 px-2 "
    document.getElementById('cashOutBtn').className = "w-full  btn btn-outline flex items-center flex-col justify-center h-max border-gray-200 py-5 px-2 "
    document.getElementById('transferMoneyBtn').className = "w-full  btn btn-outline flex items-center flex-col justify-center h-max border-gray-200 py-5 px-2 "
    document.getElementById('getBonusBtn').className = "w-full  btn btn-outline flex items-center flex-col justify-center h-max border-gray-200 py-5 px-2 "
    document.getElementById('payBillBtn').className = "w-full  btn btn-outline flex items-center flex-col justify-center h-max border-gray-200 py-5 px-2 "
    document.getElementById('historyBtn').className = "w-full  btn btn-outline flex items-center flex-col justify-center h-max border-gray-200 py-5 px-2 "

    document.getElementById(id).className = "w-full  btn btn-outline flex items-center flex-col justify-center h-max border-gray-200 py-5 px-2 bg-green-50 border-green-500 text-green-500"
    


}