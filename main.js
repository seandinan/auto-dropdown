var words = ['dog', 'cat', 'Toby', 'KC', 'Sean', 'test'];
var input = document.getElementById('typin');
var options = document.getElementById('options');

input.addEventListener('input', function(event){
	var value = event.target.value;
	options.innerHTML = "";
	for (var i = 0; i < words.length; i++){
		if (words[i].slice(0, value.length).toLowerCase() == value.toLowerCase()){
			var guess = document.createElement('li');
			guess.innerHTML = words[i];
			options.appendChild(guess);
		}
	}
});

options.addEventListener('click', function(event){
	input.value = event.target.innerHTML;
});

document.getElementById('save').addEventListener('click', function(){
	for (var i = 0; i < words.length; i++){
		if (words[i].toLowerCase() == input.value.toLowerCase()){
			return false;
		}
	}
	words.push(input.value);
})