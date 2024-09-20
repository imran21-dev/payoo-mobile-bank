


document.getElementById('addMoneyBtn')
.addEventListener('click', function () { 
   sectionAdd('addMoney') 
})
document.getElementById('cashOutBtn')
.addEventListener('click', function () {  
    sectionAdd('cashOut')
})
document.getElementById('transferMoneyBtn')
.addEventListener('click', function () {
   sectionAdd('transferMoney')
    
})
document.getElementById('getBonusBtn')
.addEventListener('click', function () {
   sectionAdd('getBonus')
   
})
document.getElementById('payBillBtn')
.addEventListener('click', function () {
   sectionAdd('payBill')
  
})
document.getElementById('historyBtn')
.addEventListener('click', function () {
   sectionAdd('history')
 
})



// calculation-----


 // Add Money Function
document.getElementById('addMoneyBalance')
.addEventListener('click', function (event) {
    event.preventDefault();
   const accountBalance = getInnerText('accountBalance');
   let number = document.getElementById('addMoneyNumber').value;
   let amount = getInputValue('addMoneyAmount');
   let pin = getInputValue('pinNumber');
   
    if (number === '01301460344' && pin === 2430) {
      const newBalance =  accountBalance + amount;
      document.getElementById('accountBalance').innerText = newBalance
    //   window.location.hash='header'
        document.getElementById('header').scrollIntoView({behavior : "smooth"})
       const time = new Date().toLocaleString();

        const historContainer = document.getElementById('historContainer');
        const newSection = document.createElement("section");
        newSection.innerHTML = `
        <div class="flex items-center bg-white px-4 py-2 shadow-sm rounded-2xl">
                   <figure class="bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center">
                     <img class="w-2/3" src="assets/wallet.png" alt="">
                   </figure>
                   <div class="flex-1 pl-2">
                       <h1 class="text-lg font-medium">Add Money <span class="text-green-500">+$${amount}</span></h1>
                       <p class="text-sm text-gray-400">${time}</p>
                   </div>
                   <a href="#"><i class="fa-regular fa-ellipsis-vertical text-xl text-gray-500 px-2"></i></a>
               </div>
        `
        historContainer.appendChild(newSection)

    }
    else{
        my_modal_1.showModal()
    }
  
     let fakaNumber = document.getElementById('addMoneyNumber');
         fakaNumber.value = ''
     let fakaAmount = document.getElementById('addMoneyAmount');
         fakaAmount.value = ''
     let fakapin = document.getElementById('pinNumber');
         fakapin.value = ''
  
        
   
})

// Cash Out Function

document.getElementById('cashOutBalance')
.addEventListener('click', function (event) {
    event.preventDefault();
   const accountBalance = getInnerText('accountBalance');
   let number = document.getElementById('cashOutNumber').value;
   let amount = getInputValue('cashOutAmount');
   let pin = getInputValue('cashOutPin');
   if (accountBalance < amount) {
     
      const newMessage =  document.getElementById('modalBalance');
            newMessage.innerHTML = `
            <h3>Your current balance : <span class="text-blue-500">$${accountBalance}</span></h3>`
      my_modal_2.showModal()
   }
   
    else if (number === '01301460344' && pin === 2430) {
      const newBalance =  accountBalance - amount;
      document.getElementById('accountBalance').innerText = newBalance
    //   window.location.hash='header'
        document.getElementById('header').scrollIntoView({behavior : "smooth"})
       const time = new Date().toLocaleString();
          
        const historContainer = document.getElementById('historContainer');
        const newSection = document.createElement("section");

            newSection.innerHTML = `
            <div class="flex items-center bg-white px-4 py-2 shadow-sm rounded-2xl">
                       <figure class="bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center">
                         <img class="w-2/3" src="assets/money.png" alt="">
                       </figure>
                       <div class="flex-1 pl-2">
                           <h1 class="text-lg font-medium">Cash Out <span class="text-red-500">-$${amount}</span></h1>
                           <p class="text-sm text-gray-400">${time}</p>
                       </div>
                       <a href="#"><i class="fa-regular fa-ellipsis-vertical text-xl text-gray-500 px-2"></i></a>
                   </div>
            `
            historContainer.appendChild(newSection)
    }
    else{
        my_modal_1.showModal()
    }
  
     let fakaNumber = document.getElementById('cashOutNumber');
         fakaNumber.value = ''
     let fakaAmount = document.getElementById('cashOutAmount');
         fakaAmount.value = ''
     let fakapin = document.getElementById('cashOutPin');
         fakapin.value = ''
  
        
   
})
// history function



// offline sections
document.getElementById('trBtn').addEventListener('click', function () {
  my_modal_3.showModal()    
})
document.getElementById('bonusBtn').addEventListener('click', function () {
  my_modal_3.showModal()    
})
document.getElementById('payBtn').addEventListener('click', function () {
  my_modal_3.showModal()    
})

// log out
document.getElementById('logOutBtn').addEventListener('click' ,function () {
    location.href = 'index.html'
        
})