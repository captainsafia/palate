$('.ui.radio.checkbox').checkbox();

$('input[type="radio"]').on('click change', function(e) {
  var time = e.target.getAttribute('id');
  var path = 'images/crop_' + time + 'radar.png';
  $('#flavor-by-time-image img').attr('src', path);
});
