// WILLIAM GIBSON

// Offscreen navigation
var menuToggle = document.querySelector('.menu-toggle')
var bodyClass = document.querySelector('body').classList

menuToggle.addEventListener('click', function() {
  bodyClass.toggle('nav-active')
})

var body = document.querySelector('body')
var trigger = document.querySelector('.trigger')
var audio = document.querySelector('audio')

trigger.addEventListener('click', zoom)

function zoom() {

	if (body.id != 'zoom') {
		body.id = 'zoom'
		audio.play ()
	} else {
		body.id = ''
		audio.pause ()
		audio.currentTime = 0.5
	}
}
