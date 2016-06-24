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
  console.log('name', name);
  $.ajax({
    url: '/hangman',
    method: 'post',
    dataType: 'json',
    data: { name },
    success: (rsp) => {
      update(rsp, []);
      toggleGameOn(rsp);
    },
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
  // $('#lblWordLength').text(game.word.length());
  $('#lblPastGuess').text(game.guessArray);
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
