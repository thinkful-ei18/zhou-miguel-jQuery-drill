$('#number-chooser').submit(e=>{
  e.preventDefault();
 let myNum = $(e.target).find('#number-choice').val();
 fizzBuzz(myNum);

 //call fizzbuzz
})

function fizzBuzz(num){
  let fizzClass = ""
  let fizzContent = ""


  for(let i=0;i<=num;i++){
  
    
   if(i%15===0 && i!==0){
    // result =`<div class="fizz-buzz-item fizzbuzz">
    //               <span>FizzBuzz</span>
    //             </div>`;
    fizzClass='fizzBuzz'
    fizzContent='fizzBuzz'
  }
  else if(i%5===0 && i!==0){
    result =`<div class="fizz-buzz-item buzz">
              <span>Buzz</span>
                </div>`;
    
  
  }
  else if(i%3===0 && i!==0){
    result =`<div class="fizz-buzz-item fizz">
                  <span>Fizz</span>
                </div>`;

  }
  else{
    result =`<div class="fizz-buzz-item fizzbuzz">
                  <span>${i}</span>
                </div>`; 
  }

  let result = `<div class="fizz-buzz-item ${fizzClass}">
                  <span>${fizzContent}</span>
                </div>`
  $('.js-results').append(result);
}

}