/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools

let previnput ='0';
let calculationOperator = "";
let currentinput = '0';

const screen = document.querySelector(".calculator-screen");
const updateScreen = number => {
  screen.value = number;
};
const numbers = document.querySelectorAll(".number");


const inputNumber = (number) => {
  if (currentinput === '0') {
    currentinput = number;
  } else {
    currentinput += number;
  }
};

numbers.forEach((number) => {
  number.addEventListener("click", e => {
    inputNumber(event.target.value);
    updateScreen(currentinput);
  });
});
 const operators=document.querySelectorAll(".operator");

/*operators.forEach((operator)=>{
  operator.addEventListener("click",(event)=>{
    console.log(event.target.value)
  }  )
})*/
const operation=(operator)=>{
  previnput=currentinput;
  calculationOperator=operator;
  currentinput='0';  
}

operators.forEach((operator)=>{
  operator.addEventListener("click",(event)=>{
    
    operation(event.target.value);
    
    
  }  )
})
const calc=() =>{
  let result=0;
  previnput=parseInt(previnput,10);
  currentinput=parseInt(currentinput,10);
  switch( calculationOperator)
    {
      case '+':
        result=previnput+currentinput;
        break;
      case '-':
        result=previnput-currentinput;
        break;
      case '/':
        result=previnput/currentinput;
        break;
      case '*':
        result=previnput*currentinput;
        break;
              
    }
  currentinput=result.toString();
  calculationOperator="";
}
const equal=document.querySelector(".equal-sign")
equal.addEventListener("click" ,() =>{
  calc()
  updateScreen(currentinput)
                       
                       })

const Ac=document.querySelector(".output1");
Ac.addEventListener("click",()=>{
  currentinput='0';
  updateScreen(currentinput);
})