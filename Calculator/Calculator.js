let storedValue1 = "";
var displayValue2 = "";
var computedValue = "";
const placeHolder = 0;
let backSpace = "false";
let test = [];
let test2 = [];
let addition = "false";
let multiply = "false";
let divide = "false";
let subtract = "false";
let negative = "false";
let repeat = "false";
let action = "false";
let memory = "false";
const show = document.getElementById('screen');
let t = "";
let dup = "";
let dup2 = "";

show.innerText = placeHolder;

document.getElementById("001").addEventListener("click", ()=> {test.push("1"); fillDisplay()});
document.getElementById("002").addEventListener("click", ()=> {test.push("2"); fillDisplay()});
document.getElementById("003").addEventListener("click", ()=> {test.push("3"); fillDisplay()});
document.getElementById("004").addEventListener("click", ()=> {test.push("4"); fillDisplay()});
document.getElementById("005").addEventListener("click", ()=> {test.push("5"); fillDisplay()});
document.getElementById("006").addEventListener("click", ()=> {test.push("6"); fillDisplay()});
document.getElementById("007").addEventListener("click", ()=> {test.push("7"); fillDisplay()});
document.getElementById("008").addEventListener("click", ()=> {test.push("8"); fillDisplay()});
document.getElementById("009").addEventListener("click", ()=> {test.push("9"); fillDisplay()});
document.getElementById("000").addEventListener("click", ()=> {test.push("0"); fillDisplay()});
document.getElementById("equals").addEventListener("click", ()=> {computeValue(); action = "false"; test = [...test2.toString()];});
document.getElementById("decimal").addEventListener("click", ()=> {
	
	for (t of test) {
		if (t == ".") {dup = "true"}
	}		
if (dup == "true") {test.push("")} else {if (test.length == 0) {test.push("0"); test.push(".")} else {test.push(".")}; fillDisplay() };
});
document.getElementById('negative').addEventListener("click", ()=> {
	for (v of test) {
		if (v == "-") {dup2 = "true"}
	}		
if (dup2 == "true") {test.unshift("")} else {test.unshift("-"); fillDisplay() };
});

function fillDisplay() {
	
	//if (test[0] == "0" && test[1] != "0") {test.shift()};
	if (test[0] == "0" && test[1] == "0") {test = ["Err"]};
	if (backSpace == "true") {test.pop()};
	
	displayThis = test.join("");
	show.innerText= displayThis;
	backSpace = "false";
	console.log(test + test2);
}

//Memory
document.getElementById('memory').addEventListener("click", ()=> {
	
	if (test.length == 0) {	storedValue1 = test2;
	} else {storedValue1 = test};
		
	if (test.length == 0 && test2.length == 0) {storedValue1 = "Err";};
	memory = "true";
});

//Memory Recall
document.getElementById('memoryRecall').addEventListener("click", ()=> {	
	if (memory == "true") {test = storedValue1; show.innerText = test.join(""); }
});
//Clear
document.getElementById('clear').addEventListener("click", ()=> {show.innerText = placeHolder; test = []; addition = "false"; multiply = "false"; repeat = "false"; action = "false"; dup = "false";});
document.getElementById('clearEverything').addEventListener("click", ()=> {show.innerText = placeHolder; test = []; addition = "false"; multiply = "false"; repeat = "false"; action = "false"; dup = "false";
	storedValue1 = 0});

//Memory Clear
document.getElementById('memoryClear').addEventListener("click", ()=> {memory = "false"; storedValue1 = "";});

//Backspace
document.getElementById('backspace').addEventListener("click", ()=> {backSpace = "true"; fillDisplay()});


//Addition
document.getElementById('add').addEventListener("click", ()=> {
	if (action !== "false") {computeValue(); action = "addition";} else {
	test2 = test; test = []; /*show.innerText = placeHolder*/; action = "addition"; dup = "false";
	}
	});
	
//Multiply	
document.getElementById('multiply').addEventListener("click", ()=> {
	if (action !== "false") {computeValue(); action = "multiply";} else {
	test2 = test; test = []; /*show.innerText = placeHolder*/; action = "multiply"; dup = "false";;
	}
	});
	
//Subtraction
document.getElementById('subtract').addEventListener("click", ()=> {
	if (action !== "false") {computeValue(); action = "subtract";} else {
	test2 = test; test = []; /*show.innerText = placeHolder*/; action = "subtract"; dup = "false";;
	}
	});
	
//Divide
document.getElementById('divide').addEventListener("click", ()=> {
	if (action !== "false") {computeValue(); action = "divide";} else {
	test2 = test; test = []; /*show.innerText = placeHolder*/; action = "divide"; dup = "false";;
	}
	});	
//Percent
document.getElementById('percent').addEventListener("click", ()=> {
	
		x = test.join(""); y = "100"; 
		num1 = parseFloat(y);
		num2 = parseFloat(x);
		test3 = num2/num1;
		show.innerText = test3;
		test = [test3];/*action = "percent"; computeValue() ; action = "false"*/
		});


function computeValue() {
	if (action == "addition") {
		if (test.length == 0) {test.push("0")};
		x = test.join(""); y = test2.join(""); 
		num1 = parseFloat(y);
		num2 = parseFloat(x);
		show.innerText = num1 + num2;
		test2 = [num1 + num2];
		test = [];
		
		}
		
	if (action == "multiply") {
		if (test.length == 0) {test.push("0")};
		x = test.join(""); y = test2.join(""); 
		num1 = parseFloat(y);
		num2 = parseFloat(x);
		show.innerText = num1 * num2;
		test2 = [num1 * num2];
		test = [];
		
		}
		
	if (action == "subtract") {
		if (test.length == 0) {test.push("0")};
		x = test.join(""); y = test2.join(""); 
		num1 = parseFloat(y);
		num2 = parseFloat(x);
		show.innerText = num1 - num2;
		test2 = [num1 - num2];
		test = [];
		
		}
		
	if (action == "divide") {
		if (test.length == 0) {test.push("0")};
		x = test.join(""); y = test2.join(""); 
		num1 = parseFloat(y);
		num2 = parseFloat(x);
		show.innerText = num1 / num2;
		test2 = [num1 / num2];
		test = [];
		
		}
	
	dup = "false";
	dup = "false";
	
	
}

// is an array better to hold the values? How will I parse the array into one number? can I build the displayValues and a corresponding array?
// can a variable be equal to the array?*/