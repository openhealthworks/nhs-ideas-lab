var NProgress = require('nprogress');
document.addEventListener('DOMContentLoaded', function() {
    NProgress.start();
});
window.addEventListener('load', function() {
    var body = document.body;
    var loader = document.getElementById('loader');
    body.classList.add('loaded');
    loader.classList.add('loader-fade');
    NProgress.done();
}, true);

// Halt initial runtime animations & reinstate them after the loading screed has gone
document.addEventListener('DOMContentLoaded', registerAndRemove)
window.addEventListener(  'load',             reinstate        )

var animations

function registerAndRemove(){
    animations = [].map.call($('[class*=animated]'), function(el){
        var className = [].find.call(el.classList, function(className){
            return /animated/.test(className)
        })
    
        el.classList.remove(className)
    
        return function reinstate(){
            el.classList.add(className)
        }
    })
}

function reinstate(){
    animations.forEach(function(fn){fn()})
}