
// Variables

const button1 = document.getElementById("1").addEventListener("click", populateDisplay);
const button2 = document.getElementById("2").addEventListener("click", populateDisplay);
const button3 = document.getElementById("3").addEventListener("click", populateDisplay);
const button4 = document.getElementById("4").addEventListener("click", populateDisplay);
const button5 = document.getElementById("5").addEventListener("click", populateDisplay);
const button6 = document.getElementById("6").addEventListener("click", populateDisplay);
const button7 = document.getElementById("7").addEventListener("click", populateDisplay);
const button8 = document.getElementById("8").addEventListener("click", populateDisplay);
const button9 = document.getElementById("9").addEventListener("click", populateDisplay);
const button0 = document.getElementById("0").addEventListener("click", populateDisplay);
let buttoncoma = document.getElementById(".").addEventListener("click", populateDisplay);
const buttonc = document.getElementById("c").addEventListener("click", clear);
const buttonplus = document.getElementById("+").addEventListener("click", addOperator);
const buttonminus = document.getElementById("-").addEventListener("click", addOperator);
const buttondivide = document.getElementById("/").addEventListener("click", addOperator);
const buttonmulti = document.getElementById("*").addEventListener("click", addOperator);
const buttonequal = document.getElementById("=").addEventListener("click", operate);

let display = document.getElementById("display");
let displayValue = display.textContent;
let displayValue1 = "";
let storedValue = "";
let storedValue1 = "";
let operator = "";
const container= document.getElementById("container");

//Functions

function add (n1, n2) {
	
	return n1 + n2;
}

function subtract (n1, n2) {
	return n1-n2;
}

function multiply (n1, n2) {
	return n1 * n2;
}
function divide (n1,n2) {
    return n1/n2;
}

function power(num, p) {
	let n = num;
	for (let i=1; i<p; i++){
		n = n * num;
	}
	return n;
}

// filling display with 

function populateDisplay(e){
    
    // not allow concatenate 0 with numbers
    if ( displayValue == "0" && e.target.textContent !== "."){
        displayValue = "";
    }   

    // filling display with numbers

    if(typeof storedValue == "string" ) {
        displayValue = displayValue + e.target.textContent;
        if (displayValue.length > 16) {
            
            displayValue=displayValue.substring(0,16);
        }
        if(window.outerWidth < 500) {
            displayValue=displayValue.substring(0,11);
        }
        display.textContent= displayValue;
        
    }
    else {
        
        displayValue1 = displayValue1 + e.target.textContent;
        if (displayValue1.length > 15) {
            
            displayValue1=displayValue1.substring(0,15);
        }
        if(window.outerWidth < 500) {
            displayValue1=displayValue1.substring(0,10);
        }
        display.textContent = displayValue1;
        storedValue1 =Number(displayValue1);
    }  
    
    // not allow making 2 comas
    if (displayValue.match(/\./)) {
        buttoncoma = document.getElementById(".").removeEventListener("click", populateDisplay);
   }
}

function addOperator(e) {
    console.log(storedValue, storedValue1);

    if (storedValue, storedValue1) {
        operate (operator, storedValue, storedValue1)
    }
    storedValue = Number(displayValue);
    console.log(e.target.textContent);
    if (e.target.textContent == "+") {
        operator = add;
        console.log(operator);
    }else if (e.target.textContent == "-") {
        operator =subtract;
        console.log(operator);
    }else if (e.target.textContent == "*") {
        operator =multiply;
        console.log(operator);
    }else if (e.target.textContent == "/") {
        operator =divide;
        console.log(operator);
    }
    console.log(operator);
    console.log(typeof operator);
    return operator;
} 

function operate(opt, num1, num2) {    
    opt = operator;
    num1 = storedValue;
    num2 = storedValue1;
    console.log(num1, num2);
    display.textContent = opt(num1, num2);
    displayValue=  display.textContent;
    storedValue= Number(displayValue);
    displayValue1="";
}
function clear(e) {
    location.reload();
}