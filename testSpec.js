
var transferObject = require('./foo.js');
var assert = require('assert');

var numberCycler = transferObject.numberCycler;
var coinDeterminer = transferObject.coinDeterminer;

var coinArray = [11, 9, 7, 5, 1];

var coinArray1 = [1, 5, 10, 20];

var coinArray2 = [13,11,9,5,1];

var coinArray3 = [13,11,9,7,1];

var coinArray4 = [23,17,14,7,5,1];

var coinArray5 = [35,34,25,26,1];


var coinDeterminerTest = function(inNumber, resultCheckValue) {
	describe('number: ' + inNumber, function(){
		describe('Actual Result: ' + resultCheckValue, function(){
			it('coinDeterminer function number 0', function(){
				expect( coinDeterminer(inNumber, coinArray) ).toEqual(resultCheckValue);
			})
		})
	});
};

var coinDeterminerTest1 = function(inNumber, resultCheckValue) {
	describe('number: ' + inNumber, function(){
		describe('Actual Result: ' + resultCheckValue, function(){
			it('coinDeterminer function number 1', function(){
				expect( coinDeterminer(inNumber, coinArray1) ).toEqual(resultCheckValue);
			})
		})
	});
};

var coinDeterminerTest2 = function(inNumber, resultCheckValue) {
	describe('number: ' + inNumber, function(){
		describe('Actual Result: ' + resultCheckValue, function(){
			it('coinDeterminer function number 2', function(){
				expect( coinDeterminer(inNumber, coinArray2) ).toEqual(resultCheckValue);
			})
		})
	});
};

var coinDeterminerTest3 = function(inNumber, resultCheckValue) {
	describe('number: ' + inNumber, function(){
		describe('Actual Result: ' + resultCheckValue, function(){
			it('coinDeterminer function number 3', function(){
				expect( coinDeterminer(inNumber, coinArray3) ).toEqual(resultCheckValue);
			})
		})
	});
};

var coinDeterminerTest4 = function(inNumber, resultCheckValue) {
	describe('number: ' + inNumber, function(){
		describe('Actual Result: ' + resultCheckValue, function(){
			it('coinDeterminer function number 4', function(){
				expect( coinDeterminer(inNumber, coinArray4) ).toEqual(resultCheckValue);
			})
		})
	});
};

var coinDeterminerTest5 = function(inNumber, resultCheckValue) {
	describe('number: ' + inNumber, function(){
		describe('Actual Result: ' + resultCheckValue, function(){
			it('coinDeterminer function number 5', function(){
				expect( coinDeterminer(inNumber, coinArray5) ).toEqual(resultCheckValue);
			})
		})
	});
};

// coinArray = [35, 34, 25, 26, 1]

coinDeterminerTest5(200, 6);


// coinArray = [23,17,14,7,5,1]

coinDeterminerTest4(63, 3);
coinDeterminerTest4(62, 5);
coinDeterminerTest4(212, 10);

// coinArray = [13,11,9,7,1]
coinDeterminerTest3(18, 2);
coinDeterminerTest3(17, 3);
coinDeterminerTest3(16, 2);
coinDeterminerTest3(15, 3);
coinDeterminerTest3(57, 5);
coinDeterminerTest3(912, 72);


// coinArray = [13,11,9,5,1]
coinDeterminerTest2(15, 3);
coinDeterminerTest2(22, 2);
coinDeterminerTest2(8, 4);
coinDeterminerTest2(11, 1);
coinDeterminerTest2(13, 1);
coinDeterminerTest2(24, 2);



// coinArray = [1, 5, 10, 20]
coinDeterminerTest1(15, 2);
coinDeterminerTest1(20, 1);
coinDeterminerTest1(12, 3);
coinDeterminerTest1(55, 4);
coinDeterminerTest1(56, 5);
coinDeterminerTest1(9, 5);
coinDeterminerTest1(59, 8);

// coinArray = [11, 9, 1, 5, 7]
coinDeterminerTest(16, 2);
coinDeterminerTest(82, 8);
coinDeterminerTest(98, 10);

coinDeterminerTest(137, 13);
coinDeterminerTest(182, 18);
coinDeterminerTest(180, 18);
coinDeterminerTest(233, 23);

coinDeterminerTest(169, 17);
coinDeterminerTest(168, 16);
coinDeterminerTest(167, 17);
coinDeterminerTest(166, 16);

coinDeterminerTest(165, 15);
coinDeterminerTest(164, 16);
coinDeterminerTest(163, 15);
coinDeterminerTest(162, 16);
coinDeterminerTest(161, 15);
coinDeterminerTest(156, 16);
coinDeterminerTest(155, 15);

coinDeterminerTest(154, 14);
coinDeterminerTest(153, 15);
coinDeterminerTest(152, 14);

coinDeterminerTest(933, 85);


