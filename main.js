
$(document).ready(function() {
  var button = $('#theButton');
	console.log('document ready jquery is working')

	button.click(function() {
	  var possibleAnswers = ['Yes. Bruh your mixtape is lit.', 'Nah bruh. Tell your children you love them and move to Mexico.', 'answer 3'];
	  var answer = Math.floor(Math.random() * (possibleAnswers.length - 0) + 0);

	  renderAnswer(possibleAnswers[answer]);
	});

	function renderAnswer(answer) {
	  var response = $('#response');
	  response.empty();
	  response.append('<p>' + answer + '</p>');
	}

});



