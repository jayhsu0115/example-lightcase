(function($, window, document, undefined) {

	$.imagesquare = function(elements, raito) {
		$(elements).each(function() {
			"undefined" == typeof raito && (raito = 1);
			$(elements).each(function() {
				var e = $(this);
				var h = Math.floor(e.width() * raito);
				e.height(h);
			});
		});
	}
	$.wallpaper = function(elements) {
		$(elements).each(function() {
			var e = $(this);
			e.addClass("wallpaper").css({
				"background-image" : "url(" + e.data("wallpaper") + ")"
			});
		});
	}

	$(window).resize(function() {
		$.imagesquare($(".image"));
	});

	$(document).ready(function() {
		$.wallpaper($(".image"));
		$.imagesquare($(".image"));
		$("a[data-rel^=lightcase]").lightcase();
	});

})(jQuery, window, document);
