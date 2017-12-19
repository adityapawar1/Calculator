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
// Changing Background Color
var color = 0
 function background() {
  if (color == 0){
	document.body.style.backgroundColor = "lightblue";
	  color++;

  }
  else if (color == 1){
document.body.style.backgroundColor = "black";
  color++;

  }
  else if (color == 2){
document.body.style.backgroundColor = "yellow";
  color++;

  }
  else if (color == 3){
 document.body.style.backgroundColor = "gold";
  color++;

  }
   else if (color == 4){
 document.body.style.backgroundColor = "pink";
  color++;

  }
    else if (color == 5){
document.body.style.backgroundColor = "purple";
  color++;

  }
    else if (color == 6){
document.body.style.backgroundColor = "green";
  color++;

  }
    else if (color == 7){
document.body.style.backgroundColor = "orange";
  color = 0;

  }
 }
 var color1 = 0
 
 
 
 function calBackground() {
  if (color1 == 0){
	document.getElementById("background").style.backgroundColor = "lightblue";
	  color1++;

  }
  else if (color1 == 1){
document.getElementById("background").style.backgroundColor = "black";
  color1++;

  }
  else if (color1 == 2){
document.getElementById("background").style.backgroundColor = "yellow";
  color1++;

  }
  else if (color1 == 3){
document.getElementById("background").style.backgroundColor = "gold";
  color1++;

  }
   else if (color1 == 4){
document.getElementById("background").style.backgroundColor = "pink";
  color1++;

  }
    else if (color1== 5){
document.getElementById("background").style.backgroundColor = "purple";
  color1++;

  }
    else if (color1 == 6){
document.getElementById("background").style.backgroundColor = "green";
  color1++;

  }
    else if (color1 == 7){
document.getElementById("background").style.backgroundColor = "orange";
  color1 = 0;

  }
 }
 // Change Background Image
 function url() {
	var input = confirm("Do you want to change the background image for the page?")
	if (input == true){ 
 var url1 = prompt('What would you like the background url to be?')
document.body.style.backgroundImage = "url(" + url1 + ")";
	}
	else {
	var input2 = confirm("Do you want to change the background image for the calculator?")
	}
	if (input2 == true){
		 var url2 = prompt('What would you like the background url to be?')
document.getElementById("background").style.backgroundImage = "url("+url2+")";
	}
	
 }
 