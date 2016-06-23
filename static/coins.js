$(document).ready(initialize);

function initialize() {
  console.log('page load');
  $('#new').click(newGame);
  $('#flip').click(flip);
}

function newGame() {
  console.log('test');
  const name = $('#name').val();
  $.ajax({
    url: '/coins',
    method: 'post',
    dataType: 'json',
    data: { name },
    success: function (rsp) {
      update(rsp);
    }
  });
}

function flip() {
  let result = Math.floor(Math.random() * 2);
  $('#flipResult').text(result);
  $.ajax({
    url: '/coins/${id}/flip',
    method: 'put',
    dataType: 'json',
    data: { result },
    success: function (rsp) {
      console.log('rsp:', rsp);
      update(rsp);
      $('#flipResult').text(result);
    }
}

function update(game) {
  console.log('rsp:', rsp);
  $('#person').text(game.name);
  $('#id').text(game.id);
  $('#heads').text(game.heads);
  $('#tails').text(game.tails);
}

// rsp.top[1].game.box.large
