$(document).ready(function() {
	var score = 0,
			life = 3,
			index = 1,
			windowWidth = $(window).width() + 100,
			windowHeight = $(window).height() + 100;

	countLives = function() {
		var heart = "";
		for(i = 0; i < life; i++) {
			heart += "♥️ ";
		}
		return heart;
	};

  $('#start').on('click', function() {
  	$('.intro').hide();
  	$('body').append('<div class="bg" style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;">')

    setInterval(function() {
	  	var top = Math.floor((Math.random() * windowHeight) + 1) - 100;
	  	var left = Math.floor((Math.random() * windowWidth) + 1) - 100;

	  	$('.container').append('\
	  		<div class="browser">\
	  			<div class="browser-menu">\
	  				<div class="browser-close"></div>\
	  			</div>\
	  		</div>');
	  	$('.browser').last().css('z-index', index + 1).css('top', top + 'px').css('left', left + 'px').append('<img src="http://www.browsercrush.com/popups/image_' + Math.floor((Math.random() *  60) + 1) + '.gif">').css('height', 'auto').css('display', 'block')
	  	index += 1;
			score -= 1;
			$('#update-score').html(score);
    }, Math.floor((Math.random() * (750 + 1)) + 500))
  });

	$('body').on('click', '.browser-close', function() {
		$(this).parent().parent().hide();
		score += 1;
		$('#update-score').html(score);
	});

	$('body').on('click', '.bg', function() {
		life -=1;
		$('#lives').html(countLives);
  	for(i = 0; i < 5; i++) {
	  	setTimeout(function() {
	  		var top = Math.floor((Math.random() * windowHeight) + 1) - 100;
		  	var left = Math.floor((Math.random() * windowWidth) + 1) - 100;

		  	$('.container').append('\
		  		<div class="browser">\
		  			<div class="browser-menu">\
		  				<div class="browser-close"></div>\
		  			</div>\
		  		</div>');
		  	$('.browser').last().css('z-index', index + 1).css('top', top + 'px').css('left', left + 'px').append('<img src="/images/' + Math.floor((Math.random() * 4) + 1) + '.jpg">').css('height', 'auto').css('display', 'block')
		  	index += 1;
				score -= 1;
				$('#update-score').html(score);
	  	}, 500);
  	};
  	if(life === 0) {
  		$('#final-score span').html(score);
  		$('#game-over').css('z-index', '2000').show();
  	};
	});

	$('body').on('click', 'img', function() {
		life -=1;
		$('#lives').html(countLives);
  	for(i = 0; i < 5; i++) {
	  	setTimeout(function() {
	  		var top = Math.floor((Math.random() * windowHeight) + 1) - 100;
		  	var left = Math.floor((Math.random() * windowWidth) + 1) - 100;

		  	$('.container').append('\
		  		<div class="browser">\
		  			<div class="browser-menu">\
		  				<div class="browser-close"></div>\
		  			</div>\
		  		</div>');
		  	$('.browser').last().css('z-index', index + 1).css('top', top + 'px').css('left', left + 'px').append('<img src="/images/' + Math.floor((Math.random() * 4) + 1) + '.jpg">').css('height', 'auto').css('display', 'block')
		  	index += 1;
				score -= 1;
				$('#update-score').html(score);
	  	}, 500);
	  };
  	if(life === 0) {
  		$('#final-score span').html(score);
  		$('#game-over').css('z-index', '2000').show();
  	};
	});

	$('#restart').on('click', function() {
		location.reload();
	})
})