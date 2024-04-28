const DATASET = [
	"10400376_132225319544_8304899_n.jpeg",
	"21462649_10155102992728460_2795738114477470255_n.jpeg",
	"70749792_10156914013949545_8267946219578327040_n.jpeg",
	"eezeejob.png",
	"IMG_2256-768x1024.jpeg",
	"jkm.jpg",
	"kontact-app-1.png",
	"MARCO.jpg",
	"MMA-localStorage.png",
	"na-lp-wireframe_draft.png",
	"na-lp.png",
	"PEMM.jpg",
	"rudzainy_dot_com_old.gif",
	"Screen-Shot-2018-05-14-at-1-03-42-PM.png",
	"Screenshot_2023-12-25_at_8-48-43_PM.png",
	"Screenshot-2022-01-27-at-2-43-02-PM-730x1024.jpeg",
	"Screenshot-2022-01-27-at-2-47-23-PM-1024x774.jpeg",
	"Screenshot-2022-01-27-at-3-11-13-PM-1-1024x445.jpeg",
	"Screenshot-2022-01-27-at-3-14-21-PM-1024x668.jpeg",
	"Users_rudzainy_Google20Drive_PostCo_Mails_postco_mail_collection_arrive.png",
	"Users_rudzainy_Google20Drive_PostCo_Mails_postco_mail_return_returned.png",
	"Web-1280-1.png"
]

const IMG_URL = "https://rudzainy.my/assets/img/resized/320/"

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
	  	$('.browser').last().css('z-index', index + 1).css('top', top + 'px').css('left', left + 'px').append('<img src="' + IMG_URL + DATASET[(Math.floor(Math.random() * 22))] + '">').css('height', 'auto').css('display', 'block')
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
		  	$('.browser').last().css('z-index', index + 1).css('top', top + 'px').css('left', left + 'px').append('<img src="' + IMG_URL + DATASET[(Math.floor(Math.random() * 22))] + '">').css('height', 'auto').css('display', 'block')
		  	index += 1;
				score -= 1;
				$('#update-score').html(score);
	  	}, 350);
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
		  	$('.browser').last().css('z-index', index + 1).css('top', top + 'px').css('left', left + 'px').append('<img src="' + IMG_URL + DATASET[(Math.floor(Math.random() * 22))] + '">').css('height', 'auto').css('display', 'block')
		  	index += 1;
				score -= 1;
				$('#update-score').html(score);
	  	}, 350);
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