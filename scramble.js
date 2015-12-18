var d = document;
var el = d.getElementsByTagName('h2')[0];

//el.style.visibility = "hidden";

//var finalStr = el.innerHTML;
//el.innerHTML = "";

//console.log(finalStr);
//console.log(randomChar());
/*
for (var i = 0; i < finalStr.length; i++) {
	(function(j){
		setTimeout(function() {
			el.innerHTML += randomChar(finalStr.split(''));
		}, 50 * j);
	})(i);
}
*/


var possibleStrings = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "(", ")"]

cycleString(el, "C", possibleStrings, 20);
console.log(el.innerHTML);
/*
function tagLetters(el, prepend, append) {
	var tagPrepend = prepend || "<span>";
	var tagAppend = append || "</span>";
	var arr = el.innerHTML.split
}
*/
function cycleString(el, targetStr, possibleStrs, cycleDelay) {
	var interval = setInterval(function() {
		el.innerHTML = randomString(possibleStrs);
		
		if (el.innerHTML === targetStr) {
			clearInterval(interval);
		}
	}, cycleDelay);
}

function randomString(strArray) {
	// Assign default array if charArray not provided
	var arr  = strArray || ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "(", ")"]
	
	// Define random index along length of arr
	var i = Math.floor((Math.random() * arr.length)); 
	
	//Return string
	return arr[i];
}

