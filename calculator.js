// JavaScript Document
//Change Display
function d(val) {
	document.getElementById("d").value = val;
}

// Type Num and Operators

function v(val) {
	document.getElementById("d").value +=val;
}
//Evaluate the expressions

function e() {
	try {
		d(eval(document.getElementById("d").value));
	}
	catch(err) {
		d("Error");
	}
}