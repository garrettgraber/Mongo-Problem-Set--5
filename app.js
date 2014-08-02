

var alphabetSoup = function(inString) {
	var alphaArray = inString.split('');
	var alphabetString = 'abcdefghijklmnopqrstuvwxyz';
	var alphabetTotal = alphabetString + alphabetString.toUpperCase();;
	var outArray = [];

	for(var i=0; i < alphaArray.length; i++) {
		var tempValue = alphaArray[ i ];
		console.log(tempValue);

		if(alphabetTotal.indexOf(tempValue) > -1) {
			outArray.push(tempValue);
		}

	}
	outArray.sort();
	return outArray;
};

var vowelCount = function(inString) {

	var vowelString = 'aeiou';
	var totalVowelString = vowelString + vowelString.toUpperCase();
	var inArray = inString.split('');
	var count = 0;

	for(var i=0; i < inArray.length; i++) {
		var tempValue = inArray[ i ];
		if(totalVowelString.indexOf(tempValue) > -1) {
			count++;
		}
	}
	return count
};

var coinDeterminer = function(inNumber) {
	if(typeof(inNumber) !== 'number') {
		return false;
	}
	else if(inNumber < 1 || inNumber > 1000) {
		return false;
	}
	else {		
		if(inNumber > 15) {
			var baseCount = Math.floor(inNumber / 11) - 1;
			var remainingNumber = inNumber - (baseCount * 11);
			var counterValue = baseCount;
			var result = numberCycler(remainingNumber, 11, counterValue);
		}
		else {
			var counterValue = 0;
			var result = numberCycler(inNumber, 11, counterValue);
		}	
	}
	return result[ 2 ];
};

var numberCycler = function(inNumber, currentModulo, counter) {
	var coinBaseArray = [ 11, 9, 7, 5, 1 ];
	var tempRemainder = inNumber % currentModulo;
	if(inNumber < currentModulo) {
		while(inNumber < currentModulo) {
			var currentModuloIndex = coinBaseArray.indexOf(currentModulo);
			currentModuloIndex++;
			var currentModulo = coinBaseArray[ currentModuloIndex ];
		}
	}
	if( (inNumber % currentModulo === 3 || inNumber % currentModulo === 4) && (inNumber > 4) ) {
		var currentModuloIndex = coinBaseArray.indexOf(currentModulo);
		currentModuloIndex++;
		var currentModulo = coinBaseArray[ currentModuloIndex ];
	}
	var remainder = inNumber % currentModulo;
	if(inNumber < 5) {
		counter += inNumber;
	}
	else {
		counter++;
	}
	if(remainder !== 0) {
		var outValues = numberCycler(remainder, currentModulo, counter);
		var remainder = outValues[ 0 ];
		var currentModulo = outValues[ 1 ];
		var counter = outValues[ 2 ];
	}
	return [remainder, currentModulo, counter];
};


// for(var i=225; i < 240; i++) {
// 	// var counter = 0;
// 	// numberCycler(i, 11);

// 	var result = coinDeterminer( i );
// 	console.log('\ni=' + i);
// 	console.log('counter: ' + result);
// }

module.exports = { coinDeterminer:coinDeterminer, numberCycler:numberCycler };
