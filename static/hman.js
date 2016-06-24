/* eslint-disable new-cap, no-console, no-use-before-define,
object-shorthand */
$(document).ready(initialize);

function initialize() {
  console.log('page load');
  $('#btnNew').click(newGame);
  $('#btnGuess').click(checkGuess);
}

function newGame() {
  const name = $('#txtName').val();
  console.log('the javascript is runningname', name);
  $.ajax({
    url: '/hangman/newGame',
    method: 'post',
    dataType: 'json',
    data: { name },
    success: (rsp) => {
      console.log('success!!', rsp, 'cleanedgame??', rsp.cleanedGame);
      update(rsp.cleanedGame, rsp.rightLetters);
      toggleGameOn(rsp);
    },
    error: console.log('call is failing'),
  });
}

function checkGuess() {
  console.log('checkguess is starting');
  // const result = Math.floor(Math.random() * 2);
  // $('#flipResult').text(result);
  // $.ajax({
  //   url: '/coins/${id}/flip',
  //   method: 'put',
  //   dataType: 'json',
  //   data: { result },
  //   success: (rsp) => {
  //     console.log('rsp:', rsp);
  //     update(rsp);
  //     $('#flipResult').text(result);
  //   },
  // });
}

function update(game, rightLetters) {
  console.log('update triggered. game is:', game, 'rightLetters', rightLetters);
  // $('#lblRightLetters').text(rightLetters.arrayToString());
  $('#lblName').text(game.name);
  $('#lblId').text(game.id);
  $('#lblWordLength').text(game.wordLength);
  $('#lblPastGuess').text(game.guesses);
  $('#lblTimeRemaining').text(game.timeRemaining);
    if (game.didWin !== null) $('#lblIsWon').text(game.didWin);
}

function toggleGameOn(game) {
  $('#atGameStart').toggleClass('invisible');
  if (game.isWon !== null) {
    $('#lblIsWon').text(game.isWon);
    $('#atGameEnd').toggleClass('invisible');
  }
}

// rsp.top[1].game.box.large
