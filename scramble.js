var d = document;
var el = d.getElementsByTagName('h2')[0];

var possibleStrings = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "(", ")", "&hellip;"]

//cycleString(el, "C", possibleStrings, 20);
console.log(el.textContent);
tagChars(el);

var spans = el.getElementsByTagName('span');
for (i = 0; i < spans.length; i++) {
	cycleString(spans[i], spans[i].textContent, possibleStrings, 50);
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

