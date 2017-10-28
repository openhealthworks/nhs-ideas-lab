$('.navbar').each(function(index, navbar){
    var $toggle  = $('.paper-nav-toggle', navbar)
    var $large   = $('.xv-menuwrapper', navbar)
    var $title   = $large.parent().prev()
    var $header  = $large.parent().parent()
    var expanded = false
    var enlarged = true

    var $small = $large.clone()

    $small.addClass('xv-menuwrapper')
    $small.removeClass('dl-menuwrapper')

    $large.before($small)

    $large.css({
        position  : 'absolute',
        right     : '0px',
        transform : 'translateY(-50%)'
    })
        .children().css({
            whiteSpace : 'nowrap'
        })
            .children().css({
                display : 'inline-block',
                float   : 'none'
            })

    maybeEnlarge()

    $(document).on('click', function(e){
        if(expanded || $toggle[0].contains(e.target))
            maybeExpand()
    })

    $(window).on('resize', debounce(125, maybeEnlarge))

    function maybeExpand(expand){
        if(expand == undefined)
            expand = !expanded

        expanded = expand

        $toggle
            .attr('aria-expanded', expanded)
            [expanded ? 'addClass' : 'removeClass']('dl-active')

        $small.children().eq(0)[expanded ? 'addClass' : 'removeClass']('dl-menuopen')
    }

    function maybeEnlarge(){
        var enlarge = $large.offsetWidth + $title.offsetWidth <= headerWidth()

        enlarged = enlarge

        if(enlarged){
            maybeExpand(false)

            $toggle.css( { display    : 'none'})
            $small.css(  { display    : 'none'})
            $large.css(  { visibility : ''})
        }
        else {
            $toggle.css( { display    : ''})
            $small.css(  { display    : ''})
            $large.css(  { visibility : 'hidden'})
        }
    }

    function headerWidth(){
        var style = getComputedStyle($header.get(0))

        return digitize(style.width) - digitize(style.paddingLeft) - digitize(style.paddingRight)
    }
})

function debounce(delay, fn, defered){
    return function debouncer(){
        clearTimeout(defered)

        defered = setTimeout(fn, delay)
    }
}

function digitize(string){
    return string.match(/\d+/)[0]
}
