
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
    // disable dividing with 0
    if ( n2 == 0) {
        return "ops! 😵";
    }else {
        return n1/n2;}
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
    if ( displayValue1 == "0" && e.target.textContent !== "." ){
        displayValue1 = "";
    }  

    // enabling coma if it's disabled
    buttoncoma = document.getElementById(".").addEventListener("click", populateDisplay);

    // filling display with numbers    
    if(typeof storedValue == "string") {
        displayValue = displayValue + e.target.textContent;
        if (displayValue.length > 15) {            
            displayValue=displayValue.substring(0,15);
        }
        if(window.outerWidth <= 500) {
            displayValue=displayValue.substring(0,10);
        }
        display.textContent= displayValue;
        // not allow making 2 comas
        onlyOneComma ();
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
        // not allow making 2 comas
        onlyOneComma ();
   }
 
    
}

function addOperator(e) {
    console.log(storedValue, storedValue1);

    if (storedValue, displayValue1) {
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
    dealBigNumbers();
}

function clear(e) {
    location.reload();
}

function onlyOneComma (){
    if (display.textContent.match(/\./)){
        buttoncoma= document.getElementById(".").removeEventListener("click", populateDisplay)
    }
}

function dealBigNumbers() {
    let result = display.textContent;        
    let resultArray = result.split("");
    let commaIndex= resultArray.findIndex(el => el == ".");
    let chComa = resultArray.filter(el => el != ".");
    chComa.splice( 1, 0, ".");
    let newRes = chComa.join("");
    let finRes = newRes.substring(0,12); 

    //limit number size display 
    if ( result >= 10000000000000000000 ){
        display.textContent= "infinite!";
        return;
    }
    // making some responsiveness
    if (window.outerWidth>500) {
        if (result.length>15 && commaIndex < 12 && commaIndex > 0) {    
            display.textContent = display.textContent.substring(0,15)
        }else if (result.length>15 && (commaIndex >= 12 || commaIndex < 0)){
            // deal with integers and decimal numbers
            if (commaIndex< 0) {
                display.textContent = finRes + "e" + "+" +(result.length-1);
            }else {
                display.textContent = finRes + "e" + "+" +(commaIndex-1);
            }
            
        }else {
            return;
        }
    }else{
        if (result.length>9 && commaIndex < 7 && commaIndex > 0) {   
            // deal with e+21 numbers
            display.textContent = result.substring(0,10);
        }else if (result.length>9 && (commaIndex >= 7 || commaIndex < 0)) {
            // deal with integers and decimal numbers
            if (commaIndex< 0) {
                finRes = newRes.substring(0,7);
                display.textContent = finRes + "e" + "+" +(result.length-1);
            }else {
                finRes = newRes.substring(0,7);
                display.textContent = finRes + "e" + "+" +(commaIndex-1);
            }
        }else {
            return;
        }
    }
    
}