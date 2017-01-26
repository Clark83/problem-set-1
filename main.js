
// Write a function called letterCapitalize
var letterCapitalize = function(string) {
	var words = string.split(" ");

	for(var i=0; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].slice(1);
	}

	return words.join(" ");
}

console.log(letterCapitalize('going coding tonight'));








// Write a function called wordCount

function WordCount(str) {
    return str.split(" ").length;
}

console.log(WordCount("Never eat shredded wheat"));
