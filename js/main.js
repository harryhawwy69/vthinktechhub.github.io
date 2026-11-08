/* Startups, team and numbers are written into the page above. This script only runs the domain filter and swaps any photo that fails to load for initials. */
(function(){
  try{
    var btns=[].slice.call(document.querySelectorAll('#filters .filter'));
    var cards=[].slice.call(document.querySelectorAll('#grid .venture'));
    btns.forEach(function(b){
      b.addEventListener('click',function(){
        var d=b.getAttribute('data-d');
        btns.forEach(function(x){x.setAttribute('aria-pressed',String(x===b));});
        cards.forEach(function(c){var chip=c.querySelector('.chip');c.hidden=!(d==='All'||(chip&&chip.textContent===d));});
      });
    });
    [].slice.call(document.querySelectorAll('[data-initials] img')).forEach(function(img){
      function swap(){var p=img.parentElement;p.style.background=p.getAttribute('data-bg');p.textContent=p.getAttribute('data-initials');}
      img.addEventListener('error',swap,{once:true});
      if(img.complete&&img.naturalWidth===0)swap();
    });
  }catch(e){}
})();
