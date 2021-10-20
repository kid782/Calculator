const numbers=document.querySelectorAll(".number");
const upperScreen=document.querySelector(".upper-screen");
const lowerScreen=document.querySelector(".lower-screen");
const clearScreen=document.querySelector(".clear");
const operators=document.querySelectorAll(".operator");
const equals=document.querySelector(".equal");
let number1=0;
let number2=0;
let operatorSign="";


numbers.forEach(number=>number.addEventListener("click",()=>{
      if(lowerScreen.textContent=="Error, cant divide by 0")
      {
          return;
      }
      else {
      lowerScreen.textContent+=number.textContent;
      }
}))
clearScreen.addEventListener("click",()=>
    {lowerScreen.textContent=""
    upperScreen.textContent="";
    defaultState();
    })

operators.forEach(operator=>operator.addEventListener("click",()=>{
    let str=lowerScreen.textContent;
    number1=Number(str);
    operatorSign=operator.textContent;
    upperScreen.textContent=`${lowerScreen.textContent} ${operator.textContent}`;
    lowerScreen.textContent="";
}))

equals.addEventListener("click",()=>
{if(operatorSign)        
{getResult();}})

function add(a,b) 
{
    return a+b;
}

function subtract(a,b)
{
    return a-b;
}

function multiply(a,b)
{
    return a*b;
}

function divide(a,b)
{
    return a/b;
}

function operate(num1,num2,sign)
{
    let result=0;
    if(sign=="+")
    {
        result= add(num1,num2);
    }
    else if(sign=="-")
    {
        result= subtract(num1,num2);
    }
    else if(sign=="*")
    {
        result= multiply(num1,num2);
    }
    else if(sign=="/")
    {
        result= divide(num1,num2);
    }
    else{ alert("NO SUCH OPERATOR");}
    return result;
}

function getResult()
{
    upperScreen.textContent+=lowerScreen.textContent;
    let str=lowerScreen.textContent; 
    number2=Number(str);
    let res = operate(number1,number2,operatorSign);

        if(operatorSign=="/" && number2==0)
        {
            lowerScreen.textContent="Error, cant divide by 0";
            defaultState();
        }
        else if(res%1!=0)
        {
        lowerScreen.textContent=res.toFixed(2); 
        defaultState();
        }
        else {
        lowerScreen.textContent=res;
        defaultState();
        }
     
}

function defaultState()
{
    number1=0;
    number2=0;
    operatorSign="";  
}
