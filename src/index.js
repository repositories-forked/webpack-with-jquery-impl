import './scss/style.scss';

// import RS from 'jquery';

/*  Functional Programming */

// var abc = import('jquery');
// abc.then(function(RS){
//     // console.log(RS);
//     window.$ = window.jQuery = RS.default;
//     import('./js/script.js').then(function(){
//         import('./js/script2.js').then(function(){

//         })
//     }).catch(function(){
//         console.log("Failed to load the module");
//     });
// });

/* Imperative Programming */

async function loadModules() {
    var RS = await import('jquery');
    window.$ = window.jQuery = RS.default;
    try {
        await import('./js/script.js');
        console.log("Module has been loaded sucessfully");
    } catch (e) {
        console.log("Failed to load the module");
    }
}

loadModules();


/* // High-order function
addEventListener('mousemove', function(){
                //               ^ callback Fun
});

function test(){
    return function(){}
}

// Pure function
var i = 10;
function test(a,b){
    return a+b + i;
} */

