$(document).ready(initialize);

function initialize() {
  console.log('page load');
  $('#fetch').click(fetch);
}

function fetch() {
  $.ajax({
    url: 'https://api.twitch.tv/kraken/games/top',
    method: 'get',
    dataType: 'json',
    success: function(rsp) {
      let games = rsp.top;
      games.forEach(g => {
        let name = g.game.name;
        let art = g.game.box.medium;
        //console.log('art', $('#games').append(`<div><p>${name}</p><img src="${art}"></div>`);
        $('#games').append(`<div><p>${name}</p><img src="${art}"></div>`);
      })
    }
  });
}

// rsp.top[1].game.box.large
