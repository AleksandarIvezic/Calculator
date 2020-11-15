function add (n1, n2) {
	
	return n1 + n2;
}

function subtract (n1, n2) {
	return n1-n2;
}

function sum (ar) {
	if (ar){
	return ar.reduce(( accumulator, currentValue ) => accumulator + currentValue , 0);
	} else {
	return 0;
	}

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

function factorial(n) {		
	if (n> 0) {
		let f=n;
		for  (let x = 1; x<n; x++) {
			f = f * (n-x);
		}
		return f;
	} else {
		return 1;
	}	
}


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
const buttoncoma = document.getElementById(".").addEventListener("click", populateDisplay);
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





function populateDisplay(e){
    if(typeof storedValue == "string" ) {
        displayValue = displayValue + e.toElement.innerHTML;
        if (displayValue.length > 13) {
            displayValue=displayValue.substring(0,13);
        }
        display.textContent= Number(displayValue);
    }else {
        
        displayValue1 = displayValue1 + e.toElement.innerHTML;
        if (displayValue1.length > 13) {
            displayValue1=displayValue1.substring(0,13);
        }
        display.textContent = displayValue1;
        storedValue1 =Number(displayValue1);
    }   
    
  
}
function updateDisplay() {
    
    if(displayValue.length > 12 ) {
        display.textContent = displayValue.substring(0, 12);
    }else if (displayValue1.length>12) {

    }
}
  
updateDisplay();

function addOperator(e) {
    console.log(storedValue, storedValue1);

    if (storedValue, storedValue1) {
        operate (operator, storedValue, storedValue1)
    }
    storedValue = Number(displayValue);
    console.log(e.toElement.innerHTML);
    if (e.toElement.innerHTML == "+") {
        operator = add;
        console.log(operator);
    }else if (e.toElement.innerHTML == "-") {
        operator =subtract;
        console.log(operator);
    }else if (e.toElement.innerHTML == "*") {
        operator =multiply;
        console.log(operator);
    }else if (e.toElement.innerHTML == "/") {
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

/* function equal(e) {
    console.log(storedValue);
    console.log(op);
    console.log(displayValue1);
    
    console.log(storedValue);
    display.textContent = storedValue + Number(displayValue1);
    displayValue=storedValue;
} */

//console.log(displayValue);
//console.log(button1);