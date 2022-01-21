
var scrollAnimationElm2 = document.querySelectorAll('.sa');
var scrollAnimationFunc = function () {
  for (var i = 0; i < scrollAnimationElm2.length; i++) {
    var triggerMargin = 200;
    if (window.innerHeight > scrollAnimationElm2[i].getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm2[i].classList.add('show');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);




var scrollAnimationElm = document.querySelectorAll('.sa2');
var scrollAnimationFunc = function () {
  for (var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 200;
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm[i].classList.add('show2');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);
