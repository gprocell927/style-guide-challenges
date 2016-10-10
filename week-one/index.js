// on click of dropdown, toggle classes
var $ = require('jquery');

$('#menu').on('click', function(){
  $('.dropdown').slideDown();
});
