
$(document).ready(function() {
  var button = $('#theButton');
	console.log('document ready jquery is working')

	button.click(function() {
	  var possibleAnswers = ['Yes. Bruh your mixtape is lit.', 'Nah bruh. Tell your children you love them and move to Mexico.', 'answer 3', 'Nah bruh. Tell your children you love them and move to Mexico.Nah bruh. Tell your children you love them and move to Mexico.Nah bruh. Tell your children you love them and move to Mexico.Nah bruh. Tell your children you love them and move to Mexico.'];
	  var answer = Math.floor(Math.random() * (possibleAnswers.length - 0) + 0);

	  renderAnswer(possibleAnswers[answer]);
	  moveQuestion();
	});

	function renderAnswer(answer) {
	  var response = $('#response p');
	  response.empty();
	  response.append(answer);
	}

	function moveQuestion() {
		var body = $('body');
		body.addClass('withAnswer');
	}

});



