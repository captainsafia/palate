$('.ui.radio.checkbox').checkbox();

$('#flavor-by-time input[type="radio"]').on('click change', function(e) {
  console.log(e);
  var time = e.target.getAttribute('id');
  var path = 'images/crop_' + time + 'radar.png';
  $('#flavor-by-time-image img').attr('src', path);
});

$('#flavor-by-day input[type="radio"]').on('click change', function(e) {
  var flavor = e.target.getAttribute('id');
  var path = 'images/' + flavor + 'bars.png';
  $('#flavor-by-day-image img').attr('src', path);
});
