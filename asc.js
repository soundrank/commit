
const myFunc = function () {

  const target = document.getElementsByClassName('target');

  const position = Math.floor(window.innerHeight * .65);

  for (let i = 0; i < target.length; i++) {

    let offsetTop = Math.floor(target[i].getBoundingClientRect().top);
    let offsetBottom = Math.floor(target[i].getBoundingClientRect().bottom);

    if (offsetTop < position) {
      $('.redman').addClass('is-animate');
    }

    if (offsetBottom < 300) {
      $('.redman').removeClass('is-animate');
    }
  }
}
window.addEventListener('scroll', myFunc, false);



const myFuncs = function () {

  const target2 = document.getElementsByClassName('targetblue');

  const position2 = Math.floor(window.innerHeight * .65);

  for (let i = 0; i < target2.length; i++) {

    let offsetTop2 = Math.floor(target2[i].getBoundingClientRect().top);
    let offsetBottom2 = Math.floor(target2[i].getBoundingClientRect().bottom);

    if (offsetTop2 < position2) {
      $('.blueman').addClass('is-animate2');
    }

    if (offsetBottom2 < 300) {
      $('.blueman').removeClass('is-animate2');
    }
  }
}
window.addEventListener('scroll', myFuncs, false);



const myFuncs2 = function () {

  const target3 = document.getElementsByClassName('eye');

  const position3 = Math.floor(window.innerHeight * .35);

  for (let i = 0; i < target3.length; i++) {

    let offsetTop3 = Math.floor(target3[i].getBoundingClientRect().top);
    if (offsetTop3 < position3) {
      $('.eye').addClass('fixed');
    }


  }
}
window.addEventListener('scroll', myFuncs2, false);






const myFuncs4 = function () {

  const target4 = document.getElementsByClassName('been');

  const position4 = Math.floor(window.innerHeight * .9);

  for (let i = 0; i < target4.length; i++) {

    let offsetTop4 = Math.floor(target4[i].getBoundingClientRect().top);
    let offsetBottom4 = Math.floor(target4[i].getBoundingClientRect().bottom);

    if (offsetTop4 < position4) {
      $('.volume').addClass('is-animate4');
    }

    if (offsetBottom4 < 10) {
      $('.volume').removeClass('is-animate4');
    }
  }
}
window.addEventListener('scroll', myFuncs4, false);


const myFuncs5 = function () {
  const target5 = document.getElementsByClassName('been2');
  const position5 = Math.floor(window.innerHeight * .9);

  for (let i = 0; i < target5.length; i++) {

    let offsetTop5 = Math.floor(target5[i].getBoundingClientRect().top);
    let offsetBottom5 = Math.floor(target5[i].getBoundingClientRect().bottom);

    if (offsetTop5 < position5) {
      $('.water').addClass('is-animate5');
    }

    if (offsetBottom5 < 10) {
      $('.water').removeClass('is-animate5');
    }
  }
}
window.addEventListener('scroll', myFuncs5, false);
