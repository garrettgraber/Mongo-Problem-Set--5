

var foo = function(inNumber, inArray) {

	var largestCoin = inArray[0];
	var smallestNonOneCoin = inArray[ inArray.length - 2 ];
	var topCoinBoundary = largestCoin + smallestNonOneCoin;

	var secondSmallestNonOneCoin = inArray[ inArray.length - 3];
	var secondLargestCoin = inArray[ 1 ];

	var topCoinBoundary = secondLargestCoin + secondSmallestNonOneCoin;

	var lowerCoinBoundary = secondSmallestNonOneCoin + smallestNonOneCoin + 1;


	var coinValue = Math.floor(inNumber / largestCoin) + 1;

	if(coinValue % 2 === 0 || coinValue % 2) {
		coinValue++;
		console.log('fired add one to odd')
	}

	console.log('Coin Value: ', coinValue);

	return [ topCoinBoundary, lowerCoinBoundary, largestCoin, secondLargestCoin, secondSmallestNonOneCoin, smallestNonOneCoin ];
};

var foo2 = function(inNumber, inArray) {

	var resultArray = foo(inNumber, inArray)

	var smallestNonOneCoin = resultArray[ 5 ];

	var largestCoin = inArray[ 0 ];
	var currentModulo = inArray[ 0 ];
	var remainder = inNumber % currentModulo;
	while( remainder < smallestNonOneCoin) {

		var currentModuloIndex = inArray.indexOf(currentModulo);
		currentModuloIndex++;
		var currentModulo = inArray[ currentModuloIndex ];
		var remainder = inNumber % currentModulo;
		console.log('\nremainder: ', remainder);
		console.log('currentModulo: ', currentModulo);

	}

	return remainder;

};


var createSortedCoinArray = function(inArray) {
	
	var inArray = inArray.sort(function(a,b) { return b - a; });

	if(inArray[ inArray.length - 1 ] !== 1) {
		inArray.push(1);
	}
	return inArray;
};

var getKeyCoinValues = function(inArray) {
	var inArrayLength = inArray.length;
	if(inArray[ inArrayLength - 1 ] !== 1) {
		return false;
	}
	var largestCoin = inArray[ 0 ];
	var smallestCoinNotOne = inArray[inArray.length - 2];

	return [ largestCoin, smallestCoinNotOne ];
};


var coinDeterminer = function(inNumber, inArray) {

	var coinBaseArray = createSortedCoinArray(inArray);
	var keyCoinValues = getKeyCoinValues(coinBaseArray);
	var highestCoinValue = keyCoinValues[ 0 ];
	var lowestCoinNotOne = keyCoinValues[ 1 ];

	console.log('\n\nStart Number: ', inNumber);

	if(typeof(inNumber) !== 'number') {
		return false;
	}
	else if(inNumber < 1 || inNumber > 1000) {
		return false;
	}
	else {		
		if(inNumber >= highestCoinValue + lowestCoinNotOne) {
			var baseCount = Math.floor(inNumber / highestCoinValue) - 1;
			var remainingNumber = inNumber - (baseCount * highestCoinValue);
			var counterValue = baseCount;
			var result = numberCycler(remainingNumber, highestCoinValue, counterValue, coinBaseArray);
		}
		else {
			var counterValue = 0;
			var result = numberCycler(inNumber, highestCoinValue, counterValue, coinBaseArray);
		}	
	}
	return result[ 2 ];
};

var numberCycler = function(inNumber, currentModulo, counter, coinBaseArray) {
	// var coinBaseArray = [ 11, 9, 7, 5, 1 ];
	var keyCoinValues = getKeyCoinValues(coinBaseArray);
	var highestCoinValue = keyCoinValues[ 0 ];
	var lowestCoinNotOne = keyCoinValues[ 1 ];


	console.log('\nNumber cycler has fired');
	console.log('inNumber value: ', inNumber);
	console.log('currentModulo: ', currentModulo);
	console.log('counter: ', counter);

	if(inNumber < currentModulo) {
		while(inNumber < currentModulo) {
			var currentModuloIndex = coinBaseArray.indexOf(currentModulo);
			currentModuloIndex++;
			var currentModulo = coinBaseArray[ currentModuloIndex ];
		}
	}

	var remainder = inNumber % currentModulo;

	console.log('\ncurrentModulo before the special if statement: ', currentModulo);
	console.log('Counter before the special if statement: ', counter);
	console.log('remainder before the special if statement: ', remainder);

	if( (2 < inNumber % currentModulo) && (inNumber % currentModulo < lowestCoinNotOne) && (inNumber >= lowestCoinNotOne) && (currentModulo > lowestCoinNotOne) )  {
		console.log('Special if statement has fired');
		var currentModuloIndex = coinBaseArray.indexOf(currentModulo);
		currentModuloIndex++;
		var currentModulo = coinBaseArray[ currentModuloIndex ];

		var remainder = inNumber % currentModulo;

		while( remainder < lowestCoinNotOne) {

			var currentModuloIndex = coinBaseArray.indexOf(currentModulo);
			currentModuloIndex++;
			var currentModulo = coinBaseArray[ currentModuloIndex ];
			var remainder = inNumber % currentModulo;
			console.log('\nremainder: ', remainder);
			console.log('currentModulo: ', currentModulo);

		}


	}


	// if( inNumber % currentModulo < lowestCoinNotOne && inNumber > lowestCoinNotOne ) {
	// 	console.log('\nSpecial if statement has fired');
	// 	var currentModuloIndex = coinBaseArray.indexOf(currentModulo);
	// 	currentModuloIndex++;
	// 	var currentModulo = coinBaseArray[ currentModuloIndex ];
	// }

	// if( (inNumber % currentModulo < lowestCoinNotOne) && (inNumber < lowestCoinNotOne + highestCoinValue) && (currentModulo !== 1) ) {
	// 	console.log('\nSpecial if statement has fired');
	// 	var currentModuloIndex = coinBaseArray.indexOf(currentModulo);
	// 	currentModuloIndex++;
	// 	var currentModulo = coinBaseArray[ currentModuloIndex ];
	// }

	var remainder = inNumber % currentModulo;

	console.log('\ncurrentModulo after the special if: ', currentModulo);
	console.log('Counter after the special if: ', counter);
	console.log('remainder after the special if: ', remainder);


	if(inNumber < lowestCoinNotOne && currentModulo === 1) {
		counter += inNumber;
		console.log('Adding the single coins');
	}
	else {
		counter++;
	}

	console.log('\ncurrentModulo at the bottom: ', currentModulo);
	console.log('Counter at the bottom: ', counter);
	console.log('remainder at the bottom: ', remainder);


	if(remainder !== 0) {
		var outValues = numberCycler(remainder, currentModulo, counter, coinBaseArray);
		var remainder = outValues[ 0 ];
		var currentModulo = outValues[ 1 ];
		var counter = outValues[ 2 ];
		var coinBaseArray = outValues[ 3 ];
	}
	return [remainder, currentModulo, counter, coinBaseArray];
};


module.exports = { coinDeterminer:coinDeterminer, numberCycler:numberCycler, createSortedCoinArray:createSortedCoinArray, getKeyCoinValues:getKeyCoinValues };

