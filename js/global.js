jQuery( function($) {
	
	$(document).ready(function(){
		
		// Main menu superfish
		$('ul.sf-menu').superfish({
			delay: 200,
			animation: {opacity:'show', height:'show'},
			speed: 'fast',
			cssArrows: false,
			disableHI: true
		});
		
		// Mobile Menu
		$('#navigation-toggle').sidr({
			name: 'sidr-main',
			source: '#sidr-close, #site-navigation, #mobile-search',
			side: 'left'
		});

		$(".sidr-class-toggle-sidr-close").click( function() {
			$.sidr('close', 'sidr-main');
			return false;
		});

		// Scroll to the search input
		$('#mobile-search input.field').on('focus', function() {
			setTimeout(function() {
				var $input = $('#mobile-search input.field');
				var container = $('.sidr');
				if(container.length) {
					var inputTop = $input.offset().top;
					var containerTop = container.offset().top;
					var scrollTo = inputTop - containerTop;
					container.animate({ scrollTop: scrollTo }, 300);
				} else {
					$('html, body').animate({ scrollTop: $(window).scrollTop() + $('#mobile-search input.field').offset().top - 100 }, 300);
				}
			}, 400);
		});
		
	}); // End doc ready

	$(window).load(function() {

		// Infinite scroll
		var $container = $('#blog-wrap');
		$container.infinitescroll({
			loading: {
				msg: null,
				finishedMsg : null,
				msgText : null,
				msgText: '<div class="infinite-scroll-loader"><i class="fa fa-spinner fa-spin"></i></div>',
			},
			navSelector  : 'div.page-jump',
			nextSelector : 'div.page-jump div.older-posts a',
			itemSelector : '.loop-entry',
		}, function( newElements ) {
			var $newElems = $( newElements ).css({ opacity: 0 });
			$newElems.imagesLoaded(function() {
				$newElems.animate({ opacity: 1 });
			});
		});

	}); // End window.load
	
});