var d = document;
var els = d.getElementsByClassName('scrambled');

var possibleStrings = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "(", ")", "&hellip;", "."]
var MAX_TIME = 5000;
var LETTER_TICK_DELAY = 50;

for (i = 0; i < els.length; i++) {
	var el = els[i];
	tagChars(el);

	var spans = el.getElementsByTagName('span');
	for (j = 0; j < spans.length; j++) {
		cycleString(spans[j], spans[j].textContent, possibleStrings, 50);
	}
}

function tagChars(el, prepend, append) {
	var tagPrepend = prepend || "<span>";
	var tagAppend = append || "</span>";
	var arr = el.textContent.split("");

	arr.forEach(function(value, i, arr) {
		if (value !== " ") {
			arr[i] = tagPrepend + value + tagAppend;
		}
	});

	el.innerHTML = arr.join(""); 
}


function cycleString(el, targetStr, possibleStrs, cycleDelay) {
	var cycleNum = 0;

	var interval = setInterval(function() {
		el.innerHTML = randomString(possibleStrs);
		
		if (cycleNum * LETTER_TICK_DELAY > MAX_TIME) {
			el.innerHTML = targetStr;
		}

		if (el.innerHTML === targetStr) {
			clearInterval(interval);
		}
		
		cycleNum++;
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

