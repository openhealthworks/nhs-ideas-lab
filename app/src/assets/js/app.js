/**
 * Boot everything we need for this project
 * We are using Gulp webpack to include scripts because
 * its supper simple
 */

require('./components/_preloader');

window.$ = window.jQuery = require('jquery');

require('./libs/modernizr');

require('./libs/jquery.easing');

window.Popper = require('popper.js');

require('bootstrap');

require('./libs/jquery.waitforimages');

require('./libs/css3-animate-it');

// Simple sticky polyfill:
// Use a hidden 'relative' clone to allow sibling layout computations
// Use a visible 'fixed' clone to appear in the desired position
void function stickyNav(){
  var $original    = document.querySelector('.navbar')
  var $replacement = document.createDocumentFragment()
  var $fixed       = $replacement.appendChild($original.cloneNode(true))
  var $ghost       = $replacement.appendChild($original.cloneNode(true))

  $fixed.style.position   = 'fixed'
  $fixed.style.width      = '100%'

  $ghost.style.position   = 'relative'
  $ghost.style.visibility = 'hidden'
  $ghost.tabIndex         = -1
  $ghost.setAttribute('aria-hidden', true)

  $original.parentNode.replaceChild($replacement, $original)
}()

require('./functions');

require('./scripts');

require('./libs/animated-headline');

require('./components/xv-menu');

require('./components/_lightSlider');

require('./components/masonary'); // Masonary + isotope + portfolio filter

require('./components/_sidebar');

require('./components/_overlay');

require('./components/_countDown');

require('./components/_counter');

require('./components/charts');

require('./components/_parallex');

require('./components/_contact');

require('./components/_knob');

require('./components/_map');


// PAPER VEVERSION : 1.2

require('./components/_promotionsBar');
