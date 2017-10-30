$.fn.classNames = function(hash){
  for(var name in hash)
    this[hash[name] ? 'addClass' : 'removeClass'](name)  
}

$(document)
  .ready(function(e){
    layout()
    stick()
    patch(e)
  })
  .on('click', patch)

$(window)
  .on('resize', throttle(patch))

function layout(){
  var $menu = $('#dl-menu')
  
  $('nav .container').css({
    margin: 'auto'
  })

  $menu.clone()
    .insertBefore($menu).children().eq(0).css({
      display:    'flex',
      position:   'absolute',
      right:      0,
      transform:  'translateY(-50%)',
      whiteSpace: 'nowrap'
    })

  $menu
    .removeProp('id')
    .removeClass('xv-menuwrapper')
    .addClass(   'dl-menuwrapper')
    
  $('.paper-nav-toggle').css({
    'appearance': 'none',
    '-webkit-appearance:': 'none'
  })
}

function stick(){
  var $nav = $('nav')

  $nav.clone().prop({
    tabIndex: -1
  }).css({
    pointerEvents: 'none',
    visibility: 'hidden'
  }).insertAfter($nav)

  $nav.css({
    position: 'fixed',
    width: '100%'
  })
}

var before = {}

function patch(e){
  var $toggle   = $('.paper-nav-toggle')
  var $nav      = $('nav:eq(0)')
  var $title    = $('.container > .row', $nav)
  var $bar      = $('.dl-menu:eq(0)',    $nav)
  var $dropdown = $('.dl-menu:eq(1)',    $nav)

  var now = {}

  now.widescreen = innerWidth($nav) >= $title.width() + $bar.width()

  now.expanded   = (
    now.widescreen
    || e.type === 'click' 
      ? $toggle.is(e.target) && !before.expanded 
      : before.expanded
  )

  if(JSON.stringify(before) === JSON.stringify(now))
    return
  
  $bar
    .prop({
      tabIndex : now.widescreen ? 0 : -1
    })
    .css({
      pointerEvents : now.widescreen ? 'visible' : 'hidden',
      visibility    : now.widescreen ? 'visible' : 'hidden'
    })

  $toggle
    .css({
      display: now.widescreen ? 'none' : 'block'
    })
    .classNames({
      'active': now.expanded
    })
  
  $dropdown
    .classNames({
      'dl-menuopen dl-menu-toggle': now.expanded
    })
  
  Object.assign(before, now)
}

function throttle(delay, fn){
  var deferred

  return function(){
    clearTimeout(deferred)

    deferred = setTimeout(fn, delay)
  }
}

function innerWidth($el){
  return $el.width() - [0, 'left', 'right'].reduce(function(total, axis){
    return total + $el.css('padding-' + axis).match(/\d+/).pop() || 0
  })
}