$(document).ready( function() {
	
	// isReady captures whether the mouse is hovering on Ryu
	var isReady = false;
	
	$('.ryu').mouseenter(function() {
    	$('.ryu-still').hide();
		$('.ryu-ready').show();
		
		// Mouse is hovering, make isReady true
		isReady = true;
  })
	.mouseleave(function() {
   		$('.ryu-ready').hide();
		$('.ryu-still').show();

		// Mouse is no longer hovering, make isReady false
		isReady = false;
  })
	.mousedown(function() {
    	playHadouken();
    	$('.ryu-ready').hide();
    	$('.ryu-throwing').show();
    	$('.hadouken').finish().show().animate(
 			{'left': '1020px'}, 
 			500,
  			function() {
    			$(this).hide();
    			$(this).css('left', '520px');
  			}
		);
  })
  	.mouseup(function() {
  		$('.ryu-throwing').hide();
  		$('.ryu-ready').show();
  });

  	$(document).keydown(function(event) {
  		if (event.which == 88) {
  			
  			//if statement chooses which Ryu div to hide based on isReady
  			if(isReady) {
		  		$('.ryu-ready').hide();
		  	}
		  	else {
		  		$('.ryu-still').hide();
		  	}
	  		$('.ryu-cool').show();
	  	}
  	})
  	.keyup(function(event) {
  		if(event.which == 88) {
  			$('.ryu-cool').hide();
  			
  			//if statement chooses which Ryu div to reveal based on isReady
  			if(isReady) {
  				$('.ryu-ready').show();
  			}
  			else {
  				$('.ryu-still').show();
  			}
  		}
  	});
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}