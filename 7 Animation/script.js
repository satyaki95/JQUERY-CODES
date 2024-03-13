
$("#btn").click(function () {

    $('#div1').hide(2000).show(2000);

    $('#div1').toggle(2000);

    $('#div1').fadeOut(2000);

    $('#div1').fadeIn(2000);

    $('#div1').fadeOut(2000).fadeIn(2000);

    $('#div1').fadeToggle(2000);

//                   time,opasity
    $('#div1').fadeTo(2000,0.7);

    $('#div1').slideUp(2000);

    $('#div1').slideDown(2000);

    $('#div1').slideToggle(2000);

    $('#div1').animate({
        height:"400px",
        width:"900px"
    },2000);



})