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

