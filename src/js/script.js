// var $ = require('jquery');       << CommonJS
import $ from 'jquery';             // ES6

var color = 'yellow';
$("button").click(function(){
    $("#my-div").css("background-color", color == 'blue'? (color = 'yellow'): (color = 'blue'));
});