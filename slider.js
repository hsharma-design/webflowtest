function slider1() {
alert("Hello 4");
let splides = $('.slider1');
for ( let i = 0, splideLength = splides.length; i < splideLength; i++ ) {
	new Splide( splides[ i ], {
  // Desktop on down
	perPage: 4,
	perMove: 1,
  focus: 0, // 0 = left and 'center' = center
  type: 'slide', // 'loop' or 'slide'
  gap: '1rem', // space between slides
  arrows: 'slider', // 'slider' or false
  pagination: 'slider', // 'slider' or false
  speed : 600, // transition speed in miliseconds
  dragAngleThreshold: 30, // default is 30
  autoWidth: false, // for cards with differing widths
  rewind : true, // go back to beginning when reach end
  rewindSpeed : 400,
  waitForTransition : false,
  updateOnMove : true,
  trimSpace: false, // true removes empty space from end of list
  breakpoints: {
		991: {
    	// Tablet
     	perPage: 2,
		},
    767: {
    	// Mobile Landscape
     	perPage: 2,
		},
    479: {
    	// Mobile Portrait
     	perPage: 1,
		}
	}
} ).mount();
}

}
slider1();
