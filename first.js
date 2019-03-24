$(document).ready(function()
{
$("#z-a").click(function()
{

$("#z-b").fadeToggle(3000);
});

});


$(document).ready(function()
{
$("#z-c").click(function()
{

$("#z-d").fadeToggle(3000);
});

});


$(document).ready(function()
{
$("#a-b").click(function()
{

$("#a-c").fadeToggle(3000);
});

});


$(document).ready(function()
{
$("#a-d").click(function()
{

$("#a-x").fadeToggle(3000);
});

});


$(document).ready(function () {

    $(".btn-primary").hover(

        function () { $(".btn-primary").text("click a price") }
        ,
        function () { $(".btn-primary").text("month") }
        )
});
$(document).ready(function () {

    $(".btn-warning").hover(

        function () { $(".btn-warning").text("click a price") }
        ,
        function () { $(".btn-warning").text("3 month") }
        )
});
$(document).ready(function () {

    $(".btn-success").hover(

        function () { $(".btn-success").text("click a price") }
        ,
        function () { $(".btn-success").text("6 month") }
        )
});
$(document).ready(function () {

    $(".btn-info").hover(

        function () { $(".btn-info").text("click a price") }
        ,
        function () { $(".btn-info").text("year") }
        )
});

$(document).ready(function()
{
$("#f-t").click(function()
{

$("#f-q").fadeToggle(3000);
});

});

$(document).ready(function()
{
$("#k-j").click(function()
{

$("#j-k").fadeToggle(3000);
});

});


$(document).ready(function () {
    var scrollButton = $(".scroll-top");
    $(window).scroll(function () {
        console.log($(this).scrollTop());
        if ($(this).scrollTop() >= 300)
        {
            scrollButton.show();
        }
        else
        {
            scrollButton.hide();
        }
        /*click on button to scroll top*/
       
    });
    scrollButton.click(function () {

        $("html,body").animate({ scrollTop: 0 }, 600);
    });


});

$(document).ready(function()
{

$("#b-lo").fadeOut(4000);


});





$(document).ready(function()
{

$("body").niceScroll();


});


