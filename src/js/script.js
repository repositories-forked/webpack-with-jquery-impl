// import $ from 'jquery';

var color = 'yellow';
RS("button").click(function(){
    RS("#my-div").css("background-color", color == 'blue'? (color = 'yellow'): (color = 'blue'));
});