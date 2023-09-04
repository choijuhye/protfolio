$('header .gnb>li').mouseover(function(){
    $(this).children('.sub').stop().slideDown();
});

$('header .gnb>li').mouseout(function(){
    $('.sub').stop().slideUp();
});




$('.s2 .con .box').click(function(e){
    e.preventDefault();
})
$('.s2 .con .box .icon').click(function(){
    $(this).toggleClass('active');

})

$('.s2 .con .box .icon2').click(function(){
    $(this).toggleClass('active');
})