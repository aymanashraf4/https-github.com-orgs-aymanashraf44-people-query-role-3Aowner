$(function()
{

'use strict';

$('#x-x  a').click(function(e)
{
e.preventDefault();

$('html , body').animate({

scrollTop: $('#' + $(this).data('scroll')).offset().top

},1500);

});

});

$(document).ready(function()
{

$(".img-thumbnail-fir").on("click",function()
{
 

$("#main-picc").hide().attr(

    "src" , $(this).attr("src")
).fadeIn(1000)
});


});

$(document).ready(function()
{

$(".img-thumbnail-firr").on("click",function()
{
 

$("#main-picc").hide().attr(

    "src" , $(this).attr("src")
).fadeIn(1000)
});


});


$(document).ready(function()
{

$(".img-thumbnail-firrr").on("click",function()
{
 

$("#main-picc").hide().attr(

    "src" , $(this).attr("src")
).fadeIn(1000)
});


});

$(document).ready(function()
{
$("html").niceScroll();

});


var typed = new Typed('#a-a', {
    strings: ["Ayman Ashraf Mohammed"],
    typeSpeed: 300
    });

    var typed = new Typed('#b-b', {
        strings: ["UI Developer"],
        typeSpeed: 300
        });
    


$(document).ready(function()
{
$("#load").fadeOut(4000);

});
