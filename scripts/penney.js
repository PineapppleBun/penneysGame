
function createReadableArray(arrayDiscrete){
	var arrayFlips = arrayDiscrete.map(function(arrayElements){
		if(arrayElements===1){
			arrayElements="H";
		}else if(arrayElements===0){
			arrayElements="T";
		}
		return arrayElements;
	});
	return arrayFlips;
}

function createDiscreteArray(arrayFlips){
	var arrayDiscrete = arrayFlips.map(function(arrayElements){
		if(arrayElements==="H"){
			arrayElements=1;
		}else if(arrayElements==="T"){
			arrayElements=0;
		}
		return arrayElements;
	});
	return arrayDiscrete;
}

var playerGuess = function(){
	var pRead=[];
	var pGuess=[];
	pRead[0]=prompt('What is your first coin choice?(H or T?)'); 							//Storing first choice in an array
	pRead[1]=prompt('What is your second coin choice?');								 								//Second choice
	pRead[2]=prompt('What is your third coin choice?');																//Third choice
	confirm('Your guess is '+ pRead[0] + " " + pRead[1] + " " + pRead[2]);						//Reading back your choices
	pGuess = createDiscreteArray(pRead);
	return pGuess;
}();

function penney(playerGuess){
	var penneyArray = [];
	var readablePenneyArray = [];
	if(playerGuess[1]===1){
		penneyArray[0] = 0;
	}else if(playerGuess[1]===0){
		penneyArray[0] = 1;
	}
	penneyArray[1] = playerGuess[0];
	penneyArray[2] = playerGuess[1];
	var readablePenneyArray = createReadableArray(penneyArray);
	confirm('The computer guesses '+ readablePenneyArray[0] + " " + readablePenneyArray[1] + " " + readablePenneyArray[2]);
	console.log(penneyArray);
	return penneyArray;
};

var penneyGuess = penney(playerGuess);