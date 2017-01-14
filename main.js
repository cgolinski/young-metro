/*
$(document).ready(function() {
  var button = $('#theButton');
});
*/

var button = document.getElementById('theButton');

button.onclick = function click() {
  var possibleAnswers = ['Yes. Bruh your mixtape is lit.', 'Nah bruh. Tell your children you love them and move to Mexico.', 'answer 3'];
  var answer = Math.floor(Math.random() * (possibleAnswers.length - 0) + 0);
  //alert(possibleAnswers[answer]);
  renderAnswer(possibleAnswers[answer]);
}

function renderAnswer(answer) {
  document.getElementById('response').innerHTML = '<p>' + answer + '</p>';
}

