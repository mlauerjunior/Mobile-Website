$(document).ready(function(event){ 
	$('.beach').click(function(){
	$('.checked1').show();
});

$('.city').click(function(){
	$('.checked2').show();
});

$('.country').click(function(){
	$('.checked3').show();
});

$('.mountain').click(function(){
	$('.checked4').show();
});

$('.traditional').click(function(){
	$('.checked5').show();
});

$('.modern').click(function(){
	$('.checked6').show();
});

$('.funky').click(function(){
	$('.checked7').show();
});

$('.minimal').click(function(){
	$('.checked8').show();
});

$('.beer').click(function(){
	$('.checked9').show();
});

$('.martini').click(function(){
	$('.checked10').show();
});

$('.tropical').click(function(){
	$('.checked11').show();
});

$('.whiskey').click(function(){
	$('.checked12').show();
});

$('.skiing').click(function(){
	$('.checked13').show();
});

$('.yoga').click(function(){
	$('.checked14').show();
});

$('.running').click(function(){
	$('.checked15').show();
});

$('.reading').click(function(){
	$('.checked16').show();
});

$('.steak').click(function(){
	$('.checked17').show();
});

$('.fish').click(function(){
	$('.checked18').show();
});

$('.chicken').click(function(){
	$('.checked19').show();
});

$('.salad').click(function(){
	$('.checked20').show();
});

$(' h1').click(function(){
	$('.firstquestion').show();
	$('.Quiztitle-mobile').hide();

});

$(document).ready(function(event){ 
 var pageWidth = $(window).width();  
    if ( pageWidth <= 480 ) {

$('.beach, .city, .country,.mountain').click(function(){
	$('.secondquestion').show();
	$('.firstquestion').hide();

});

$('.traditional, .modern, .funky,.minimal').click(function(){
	$('.thirdquestion').show();
	$('.secondquestion').hide();

});

$('.beer, .martini, .tropical,.whiskey').click(function(){
	$('.fourthquestion').show();
	$('.thirdquestion').hide();

});

$('.skiing, .yoga, .running,.reading').click(function(){
	$('.fifthquestion').show();
	$('.fourthquestion').hide();

});

$('.steak, .fish, .chicken,.salad').click(function(){
	$('.sixthquestion').show();
	$('.fifthquestion').hide();

});

$('.finished-btn').click(function(){
	$('.finishedquiz').show();
	$('.sixthquestion').hide();

});


 } });

  });
