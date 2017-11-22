window.onload = function(){

	var scroll_text = document.getElementsByClassName('dota2-scroll-text')[0];

	// var scroll_text_img = scroll_text.getElementsByTagName('img');

	var mySwiper = new Swiper('.swiper-container',{
	effect : 'fade',
	fade: {
	  crossFade: false,
	}
	});


	var new_player = document.getElementsByClassName('new-player')[0];

	var old_player = document.getElementsByClassName('old-player')[0];

	var new_player_pic = document.getElementsByClassName('new-player-pic')[0];

	var old_player_pic = document.getElementsByClassName('old-player-pic')[0];

	new_player.onmouseover = function(){

		old_player_pic.style.opacity = '0';

		old_player_pic.style.left = '112px';

		new_player_pic.style.opacity = '1';

		new_player_pic.style.left = '112px';
	}


	old_player.onmouseover = function(){

		old_player_pic.style.opacity = '1';

		old_player_pic.style.left = '-150px';

		new_player_pic.style.opacity = '0';

		new_player_pic.style.left = '200px';

	}

}