var allWhite = RegExp.prototype.test.bind(/^\s/);

$(function(){
  var typewriter = $('.typewriter')[0]
  
  typewriter.innerHTML = typewriter.textContent
    .split('')
    .reduce(function(a, b){
      return allWhite(a) && allWhite(b) ? a : a + b
    })
    .split('')
    .map(function(character, index, total){
      return index == 0 || index == total.length ? '' : '<span class=glyph>' + character + '</span>'
    })
    .join('')
    
});