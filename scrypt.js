
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
const buttonbackspace = document.getElementById("back").addEventListener("click", backspace);

let display = document.getElementById("display");
let displayValue = display.textContent;
let displayValue1 = "";
let storedValue = "";
let storedValue1 = "";
let operator = "";
let miniDisplay = document.getElementById("minidisplay");

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

function backspace (){
    let x =display.textContent.split("");
    x.pop();
    x = x.join("");
    if (x.length <1) {
        display.textContent = "0";
        
    }else {
         display.textContent = x;
    }
    if(typeof storedValue == "string"){
        displayValue= display.textContent;
    }else{
        displayValue1= display.textContent;
        storedValue1 =Number(displayValue1);
    }    
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
        
        //limit the the number of entered digits for num1
        if (displayValue.length > 13) {            
            displayValue=displayValue.substring(0,13);
        }
        if(window.outerWidth <= 500) {
            displayValue=displayValue.substring(0,9);
        }

        display.textContent= displayValue;
        // not allow making 2 comas
        onlyOneComma ();
    }
    else {
        
        displayValue1 = displayValue1 + e.target.textContent;

        //limit the the number of entered digits for num2
        if (displayValue1.length > 13) {
            
            displayValue1=displayValue1.substring(0,13);
        }
        if(window.outerWidth < 500) {
            displayValue1=displayValue1.substring(0,9);
        }
        display.textContent = displayValue1;
        storedValue1 =Number(displayValue1);
        // not allow making 2 comas
        onlyOneComma ();
   }    
}

function addOperator(e) {
    // console.log(storedValue, storedValue1);

    if (storedValue, displayValue1) {
        operate (operator, storedValue, storedValue1)
    }
    storedValue = Number(displayValue);
    
    if (e.target.textContent == "+" )  {
        operator = add;
    }else if (e.target.textContent == "-") {
        operator =subtract;
    }else if (e.target.textContent == "*") {
        operator =multiply;
    }else if (e.target.textContent == "/") {
        operator =divide;
    }    
    return operator;
} 

function operate(opt, num1, num2) {    
    opt = operator;
    num1 = storedValue;
    num2 = storedValue1;    
    display.textContent = opt(num1, num2);
    displayValue=  display.textContent;
    storedValue= Number(displayValue);
    displayValue1="";
    dealBigNumbers();
    miniDisplay.textContent= num1 + optSign() + num2;
}

function clear(e) {
    location.reload();
}

function onlyOneComma (){
    if (display.textContent.match(/\./)){
        buttoncoma= document.getElementById(".").removeEventListener("click", populateDisplay)
    }
}

// dealing with big numbers
function dealBigNumbers() {
    let result = display.textContent;        
    let resultArray = result.split("");
    let commaIndex= resultArray.findIndex(el => el == ".");
    let chComa = resultArray.filter(el => el != ".");
    chComa.splice( 1, 0, ".");
    let newRes = chComa.join("");
    let finRes = newRes.substring(0,10); 

    //limit number size display 
    if ( result >= 10000000000000000000 ){
        display.textContent= "infinite!";
        return;
    }
    // making some responsiveness
    if (window.outerWidth>500) {
        if (result.length>13 && commaIndex < 10 && commaIndex > 0) {    
            display.textContent = display.textContent.substring(0,15)
        }else if (result.length>13 && (commaIndex >= 10 || commaIndex < 0)){
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


// adding keyboard support 

function keyboardInput(e) {
    let code = e.keyCode;
    //dealing with shiftKeys (+ and *)
    if (e.shiftKey && e.keyCode == 56) {     
            code = 42;
    }else if (e.shiftKey && e.keyCode == 61) {
            code = 43
    }
    e.preventDefault(); //prevents default keyboard shortcuts on browser
    const key = document.querySelector(`button[data-key="${code}"]`); // letter keyboard
    const num = document.querySelector(`button[data-num="${code}"]`); // numeric keyboard
    
    if (key) key.click();  // click on key element
    else if(num) num.click();  // click on num element
    else return;
}
window.addEventListener("keydown", keyboardInput);

// getting operator sign for miniDisplay
function optSign(opt) {
    if (operator == add) return "+";
    else if (operator == subtract) return "-";
    else if (operator == divide) return "/";
    else if (operator == multiply) return "*";
    else return;
}