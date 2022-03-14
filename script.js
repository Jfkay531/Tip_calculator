 let tipRate = document.querySelectorAll('.btn_tips button');
 let bill = document.querySelector ('#bill-amt');
 let tipAmountPerson = document.querySelector ('#amount2');
 let totalTipPerson= document.querySelector('#amount1');
 let noPersons =document.querySelector('#no-person');
 tipRate = Array.from(tipRate);
 const reset = document.querySelector('#btn_reset');

//  console.log(tipRate);
      

 tipRate.forEach(tipr =>{
     tipr.addEventListener('click', (e) =>{

          
                // Grab the tip rate clicked by the user
                const tipPercent = parseFloat(e.target.innerText.slice(0,-1));

                // Calculate the tip based on the number of person 
                const tip= (tipPercent/100)*(bill.value)/(noPersons.value);

                // Calculate the bill per person before applying tip
                const billPerson = (bill.value)/noPersons.value;

                // Apply the tip per person to the bill payable        
                const totalAmountPerPerson= (billPerson+tip);

                totalTipPerson.textContent= `$${tip}`;
                tipAmountPerson.textContent= `$${totalAmountPerPerson}` ;
    
       
     })
 })

//  Set the Reset button to clear all input/outputs

reset.addEventListener('click', ()=>{
    totalTipPerson.textContent = "";
    tipAmountPerson.textContent = "";


})

