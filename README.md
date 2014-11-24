jquery-flip-image
=================

Creates the effect of an image flipping to have a different image on the flip side

As seen on Leodis Lager site - http://www.leodislager.com

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.flip-image.min.js"></script>
	```

3. Add an image:

	```html
	<img id="img-1" src="my-image.png" data-flip-src="my-image-flip.png" alt="" />
	```

4. Call the plugin:

	```javascript
	$("#img-1").flipImage({
		flipSpeed: 400,
		rotateClass: 'rotate'
	});
	```

## Demo

View a demo here: http://www.p53.co.uk/labs/jquery-flip-image/demo


## Tips

Keep images the same proportions and filesizes as small as possible - SVGs work great