jQuery(function($) {
	// JavaScript hack to get the logo clickable
	$('div#header h1').click(function(){document.location = $('div#header h1 a').attr('href');});

	// Make the image list look cool so Jimmy gets hired
	$('ul#gallery').galleria({
		history   : true,
		clickNext : true,
		//insert    : '#gallery_image',
		onImage   : function(image, caption, thumb) {
			if(! ($.browser.mozilla && navigator.appVersion.indexOf("Win")!=-1) ) {
				image.css('display', 'none').fadeIn(1000);
			}
			caption.css('display', 'none').fadeIn(1000);
			var _li = thumb.parents('li');
			_li.siblings().children('img.selected').fadeTo(500,0.3);
			thumb.fadeTo('fast',1).addClass('selected');
			image.attr('title', caption.text());
		},
		onThumb : function(thumb) {
			var _li = thumb.parents('li');
			var _fadeTo = _li.is('.active') ? '1' : '0.3';
			thumb.css({display:'none',opacity:_fadeTo}).fadeIn(1500);
			thumb.hover(
				function() { thumb.fadeTo('fast',1); },
				function() { _li.not('.active').children('img').fadeTo('fast',0.3); }
			);
		}
	});
});