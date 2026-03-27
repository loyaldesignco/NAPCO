/*! waitForImages jQuery Plugin 2013-07-20 */
!function(a){var b="waitForImages";a.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage","cursor"]},a.expr[":"].uncached=function(b){if(!a(b).is('img[src!=""]'))return!1;var c=new Image;return c.src=b.src,!c.complete},a.fn.waitForImages=function(c,d,e){var f=0,g=0;if(a.isPlainObject(arguments[0])&&(e=arguments[0].waitForAll,d=arguments[0].each,c=arguments[0].finished),c=c||a.noop,d=d||a.noop,e=!!e,!a.isFunction(c)||!a.isFunction(d))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var h=a(this),i=[],j=a.waitForImages.hasImageProperties||[],k=/url\(\s*(['"]?)(.*?)\1\s*\)/g;e?h.find("*").addBack().each(function(){var b=a(this);b.is("img:uncached")&&i.push({src:b.attr("src"),element:b[0]}),a.each(j,function(a,c){var d,e=b.css(c);if(!e)return!0;for(;d=k.exec(e);)i.push({src:d[2],element:b[0]})})}):h.find("img:uncached").each(function(){i.push({src:this.src,element:this})}),f=i.length,g=0,0===f&&c.call(h[0]),a.each(i,function(e,i){var j=new Image;a(j).on("load."+b+" error."+b,function(a){return g++,d.call(i.element,g,f,"load"==a.type),g==f?(c.call(h[0]),!1):void 0}),j.src=i.src})})}}(jQuery);
/*!
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * Copyright 2007, 2013 Brian Cherne
 */
(function(e){e.fn.hoverIntent=function(t,n,r){var i={interval:100,sensitivity:7,timeout:0};if(typeof t==="object"){i=e.extend(i,t)}else if(e.isFunction(n)){i=e.extend(i,{over:t,out:n,selector:r})}else{i=e.extend(i,{over:t,out:t,selector:n})}var s,o,u,a;var f=function(e){s=e.pageX;o=e.pageY};var l=function(t,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if(Math.abs(u-s)+Math.abs(a-o)<i.sensitivity){e(n).off("mousemove.hoverIntent",f);n.hoverIntent_s=1;return i.over.apply(n,[t])}else{u=s;a=o;n.hoverIntent_t=setTimeout(function(){l(t,n)},i.interval)}};var c=function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t);t.hoverIntent_s=0;return i.out.apply(t,[e])};var h=function(t){var n=jQuery.extend({},t);var r=this;if(r.hoverIntent_t){r.hoverIntent_t=clearTimeout(r.hoverIntent_t)}if(t.type=="mouseenter"){u=n.pageX;a=n.pageY;e(r).on("mousemove.hoverIntent",f);if(r.hoverIntent_s!=1){r.hoverIntent_t=setTimeout(function(){l(n,r)},i.interval)}}else{e(r).off("mousemove.hoverIntent",f);if(r.hoverIntent_s==1){r.hoverIntent_t=setTimeout(function(){c(n,r)},i.timeout)}}};return this.on({"mouseenter.hoverIntent":h,"mouseleave.hoverIntent":h},i.selector)}})(jQuery);
$('.hasSubMenu').hoverIntent( function() {
		$(this).find('nav').stop(true,true).fadeIn('200');
		$('#subMenuBcgr').stop(true,true).show();
}, function() {
		$(this).find('nav').stop(true,true).fadeOut('50');
		$('#subMenuBcgr').stop(true,true).fadeOut('100');
});
var slsOneModule = function(params) {
	var p = params, $elmFirst = $('#elm'+p.elmFirstNr), $elmSecond =$('#elm'+p.elmSecondNr),
		i = $elmFirst.css('background-image'), n;
	if (i.match(/_1280/)) {
		n='_1280';
	} else if (i.match(/_768/)) {
		n='_768';
	} else {
		n='';
	}
	var slsInit = function() {
		$elmSecond
		  .css('background-image','url('+p.imagesFolder+p.elmSecondNr+n+'.jpg)')
		  .waitForImages(function() {
			p.$sLsCtner.cycle({
				fx:"fadeout",
				speed:1000,
				timeout:3000,
				slides:"> div",
				pauseOnHover: true,
				autoHeight: false
			});

			$('<img/>').attr('src', p.imagesFolder+p.elmFirstNr+n+'.jpg').load(function() {
			   $(this).remove();
			   $elmFirst.css('background-image', 'url('+p.imagesFolder+p.elmFirstNr+n+'.jpg)');
			});
		}, $.noop, true);
	}
	var that = {};
	that.slsInit = slsInit;
	return that;
}
if (document.body.getAttribute('id')==='index') {
	var homeSlSparams = {
		elmFirstNr: '1',
		elmSecondNr: '2',
		$sLsCtner: $('#slideShowCtner'),
		imagesFolder: 'images/sLs/'
	},
	sls = slsOneModule(homeSlSparams);
	sls.slsInit();
};
if (document.body.getAttribute('id')==='services') {
	(function fixBoxHeights() {
		var $lis = $('#s2 li[id^="sp"]'),
		a = $lis.map(function() {
			return $(this).height();
		  })
		  .get(),
		h = Math.max.apply( Math, a ),
		c = 40;
		$lis.each (function() { $(this).height(h+40); });
	})();
}
(function() {
	$('a[href]:not(.nosource)').each( function() {
		var $t = $(this),
		h = this.href,
		loc = location.href;
		if (
			h===loc ||
			(  (h.indexOf('index') > -1) && (h.indexOf('napco') > -1) &&
			(document.body.getAttribute('id')==='index'))  )
		{
			$t.click(function(e) {
				e.preventDefault();
			});
			if ( h.charAt(h.length-1) !== "#" ) {
				$t.addClass('cur');
			}
		}
	});
})();
