document.getElementById('loginBtn').addEventListener('click', function (event) {
   event.preventDefault() ;
   const mobileNumber = document.getElementById('number').value;
   const pin = document.getElementById('pin').value;
   console.log(typeof pin,typeof mobileNumber)
   if (mobileNumber === '01301460344' && pin === '243010') {
      location.href = 'home.html'
   }
   else{
    my_modal_1.showModal()
    
   }
})