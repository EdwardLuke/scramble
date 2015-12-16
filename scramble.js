var d = document;
var el = d.getElementsByTagName('h2')[0];

//el.style.visibility = "hidden";

var finalStr = el.innerHTML;
el.innerHTML = "";

console.log(finalStr);

for (var i = 0; i < finalStr.length; i++) {
	(function(j){
		setTimeout(function() {
			el.innerHTML += finalStr.charAt(j);
			console.log(el, finalStr.charAt(j));
		}, 50 * j);
	})(i);
	//el.innerHTML += finalStr.charAt(i);
	//console.log(finalStr.charAt(i));
}
