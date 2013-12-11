$(document).ready(function(){
//open popup
$(".submit h3").click(function(){
$(".popup").fadeIn(1000);
positionPopup();
});

function positionPopup(){
if(!$(".popup").is(':visible')){
return;
}
$(".popup").css({
left: ($(window).width() - $('.popup').width()) / 2,
top: ($(window).width() - $('.popop').width()) / 7,
position:'absolute'
});
}


});