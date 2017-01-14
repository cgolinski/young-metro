$(document).ready(function() {
  var button = $('#theButton');
});

button.onclick = function click() {
  var possibleAnswers = ['answer 1', 'answer 2', 'answer 3'];
  var answer = Math.floor(Math.random() * (possibleAnswers.length - 0) + 0);
  alert(possibleAnswers[answer]);
}

