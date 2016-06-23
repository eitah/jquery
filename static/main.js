$(document).ready(initialize);

function initialize() {
  $('#btn1').click(doStuff);
  $('#btn2').click(timer);
  $('#btn3').click(clear);
  $('#btn4').click(numbers);
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.random();
  return `rgba(${r},${g},${b},${a})`;
}

function doStuff() {
  $('h1').css('color', 'red');
  $('h3').text('newtext');
  console.log('stuff');
  // debugger;
  $('h3').toggleClass('awesome');
  $('#alpha').addClass('cool');
  let txt = $('#txt1').val();
  console.log('txt:', txt);
  //$('body').css('background-color', txt);
  //$('body').css('background-color', randomColor());
}


let id;

function timer() {
  id = setInterval(function() {
    $('body').css('background-color', randomColor());
  }, 100);
}

function clear() {
  clearInterval(id);
}

function numbers() {
  $('#numbers').empty();
  for (let i = 0; i < 20; i++){
    let r = Math.floor(Math.random() * 11);
    $('#numbers').append(`<li>${r}</li>`);
  }
};
