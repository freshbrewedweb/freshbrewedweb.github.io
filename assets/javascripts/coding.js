document.addEventListener('DOMContentLoaded', function(){
  Typed.new('#coding', {
    strings: [
        "composer create-project --prefer-dist laravel/laravel kickass-app",
        "cd kickass-app",
        "php artisan serve",
        "atom routes/web.php",
        "Route::get('/', 'PageController@index');"
    ],
    stringsElement: null,
	// typing speed
	typeSpeed: 0,
	// time before typing starts
	startDelay: 0,
	// backspacing speed
	backSpeed: 0,
	// shuffle the strings
	shuffle: false,
	// time before backspacing
	backDelay: 500,
	// Fade out instead of backspace (must use CSS class)
	fadeOut: true,
	fadeOutClass: 'typed-fade-out',
	fadeOutDelay: 500, // milliseconds
	// loop
	loop: true,
	// null = infinite
	loopCount: null,
	// show cursor
	showCursor: true,
	// character for cursor
	cursorChar: "|",
	// attribute to type (null == text)
	attr: null,
	// either html or text
	contentType: 'html',
	// call when done callback function
	callback: function() {},
	// starting callback function before each string
	preStringTyped: function() {},
	//callback for every typed string
	onStringTyped: function() {},
	// callback for reset
	resetCallback: function() {}
  });
});
