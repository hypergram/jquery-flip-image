/*!
 * jQuery Flip Image  v1.0.0
 *
 * Authors: Nick Goodliff, Oliver Hunt
 * ==========================================================
 *
 * Copyright 2014 Project 53 Ltd
 *
 * Licensed under MIT (https://github.com/project53/jquery-flip-image/LICENSE)
 *
 * ==========================================================
 */
 
;(function ( $, window, document, undefined ) {
		var pluginName = "flipImage",
			defaults = {
			  flipSpeed: 500,
			  rotateClass: 'rotate',
			};

		function flipImage ( element, options ) {
			this.img = element;
			this.o = $.extend( {}, defaults, options );
			this._defaults = defaults;
			this._name = pluginName;
		
			this.init();
		}
		
		var _beginFlip = function(img, o) {
			// add the rotate class to rotate it 90degrees
			$(img).addClass(o.rotateClass);
			// set timeout to run at the point the transform finishes to switch the images
			setTimeout(function() { _toggleImgSrc(img); }, o.flipSpeed);
		}
		var _toggleImgSrc = function(img) {
			$img = $(img);
			var flipSrc = $img.data('flip-src');
			$img.data('flip-src', $img.attr('src'));
			
			// changing the src triggers a .load() when complete, which is set to call _endFlip()
			$img.attr('src', flipSrc);
		}
		var _endFlip = function(img, o) {
			// remove the rotation transform to rotate back to 0degrees
			$(img).removeClass(o.rotateClass);
		}

		$.extend(flipImage.prototype, {
			init: function () {
				var img = this.img;
				var options = this.o;
				$(img).load(function() { 
					_endFlip(img, options);
				});
				_beginFlip(img, options);
			},
			flip: function () {
				_beginFlip(this.img, this.o);
			}
		});
		
		$.fn[pluginName] = function ( options ) {
				return this.each(function() {
						if ( !$.data( this, "plugin_" + pluginName ) ) {
							var obj = new flipImage( this, options );
							$.data( this, "plugin_" + pluginName, obj);
						}
						else {
							$.data( this, "plugin_" + pluginName ).flip();
						}
				});
		};

})( jQuery, window, document );