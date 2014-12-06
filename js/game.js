/*Shuffle array*/
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

var myFunction = function(event) {

}

function removeForm(string) {
    var elem = document.getElementById(string);
    elem.parentNode.removeChild(elem);
    return false;
}

/*Get user input for number of symbols*/
function getNumSymbols(){
   var clickCounter=0;
   var firstClick ;
   var matchingPair=0;
   var userAttempts=0;
   var divInfoTwo;
   var numOfattempts = 0;
   var diver;
   var divInfo ;
  
  
var onclick1 = function(event) {
if (userAttempts %2 != 0){
		numOfattempts = (userAttempts - 1) / 2;  
	}
	else {
		numOfattempts = (userAttempts ) / 2;  
	}

	if(userAttempts >= 1){

		diver.removeChild(divInfo);
   		diver     = document.createElement("div");
   	    diver.id='userTry';
  		divInfo = document.createTextNode("Attempt"+ (numOfattempts+1));
  	    diver.appendChild(divInfo);

		body.appendChild(diver);
		}
  			
this.style.backgroundColor = 'white';
  //var b = this.textContent;
  //alert(b);
   if(clickCounter>=2){
   clickCounter=0;
   }
   var firstClickSymbol;
	var currentClick= this;
	
	if (clickCounter === 0){
		firstClick = currentClick;
		
	}
	clickCounter++;
	userAttempts++;
	if (clickCounter===2){
		if (firstClick.textContent===currentClick.textContent){
		   firstClick.style.backgroundColor = 'white';
		   currentClick.style.backgroundColor = 'white';

		   
		   firstClick.removeEventListener('click', onclick1);
		   currentClick.removeEventListener('click', onclick1);
		   matchingPair++;

		   if (matchingPair == userInputNum){
		    var para     = document.createElement("p");
		    var paraInfo = document.createTextNode("Good Game it took you"+":"+ (userAttempts/2)+""+"try(s)");
		    para.appendChild(paraInfo);
			body.appendChild(para);
			removeForm("gameTable");
		   }
		}
		else{
		setTimeout(function(){	firstClick.style.backgroundColor = 'black';
		currentClick.style.backgroundColor = 'black';
		}, 1000);
			alert("No Match");

		}	
	clickCounter=0;
	}

  }
  

	//array of symbols
	var symbols= ["~","~","!","!","#","#","$","$","%","%","^","^","&","&","*","*"];
    //var symbols= ["~","!","#","$","%","^","&","*"];


    //User number input
	var userInputNum=document.getElementById("numSymbols").value;
	
    //Ensures our users start with at least 2 or 16 cards by default 
    if(userInputNum>=8){
    	userInputNum=8;
    }
    else if(userInputNum<=0){
   		userInputNum=1;
    }
    var numCards= userInputNum*2;

	//Create array of random symbols  
	var randomSymbols=[];
	for (var b = 0; b < numCards; b++) {
 		randomSymbols.push(symbols[b]);
	}
 
 	randomSymbols= shuffle(randomSymbols);

	removeForm("game");

   //Generate a game board
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];
 
  // creates a <table> element and a <tbody> element
  var tbl     = document.createElement("table");
  var tblBody = document.createElement("tbody");
  tbl.id='gameTable';
  
  // creating all cells
  for (var i = 0; i < numCards; i++) {
    // creates a table row
    var row = document.createElement("tr");
    //give each element an id 
    row.id= 'newid'+i;

    for (var j = 0; j < 1; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
	 var cell = document.createElement("td");
	      
     var cellText = document.createTextNode(randomSymbols[i]);
     cell.style.backgroundColor = 'black'; 

     cell.addEventListener("click", onclick1);	
     cell.appendChild(cellText);
     row.appendChild(cell);
    }
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
 
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  
   if(userAttempts<1){
		   diver     = document.createElement("div");
  			divInfo = document.createTextNode("Attempt"+ userAttempts);
		    diver.id='userTry';
		    diver.appendChild(divInfo);
		    divInfoTwo=divInfo;
			body.appendChild(diver);
  
  }
   
}

document.getElementById("startButton").addEventListener("click", getNumSymbols);