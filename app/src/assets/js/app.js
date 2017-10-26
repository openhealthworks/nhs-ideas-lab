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

void function stickyNav(){
  // Simple sticky polyfill:
  // Use a hidden 'relative' clone to allow sibling layout computations
  // Use a visible 'fixed' clone to appear in the desired position
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

  // Sticky navs mean that browsers can't scroll to the right position when targeting
  // in-page anchors (they're at the top, but sticky stuff hides them)
  var $links = document.querySelectorAll('a');

  var $anchors = [].reduce.call(
    document.querySelectorAll('[id]'),
    function(collection, $anchor){
      var $link = [].filter.call($links, function(a){return a.hash == '#' + $anchor.id}).pop()

      if(!$link)
        return

      var $target = document.createElement('a')

      $target.setAttribute('name', $anchor.id)

      $target.style.display    = 'block'
      $target.style.position   = 'absolute'
      $target.style.visibility = 'hidden'
      $target.style.height     = '1px'
      $target.style.top        = '0px'

      $anchor.style.position   = 'relative'

      $anchor.appendChild($target)

      $link.addEventListener('click', function(){
        $target.style.marginTop = '-' + $fixed.offsetHeight + 'px'
      })
    },
    []
  )
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
