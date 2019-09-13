// anime({
//   // select the element to animate
//   targets: "div.box.red",
//   // program the animation
//   translateY: [{ value: 200, duration: 500 }, { value: 0, duration: 800 }],
//   rotate: {
//     value: "1turn",
//     easing: "easeInOutSine"
//   }
// });

// anime({
//   // select the element to animate
//   targets: "div.box.blue",
//   // program the animation
//   translateY: [
//     { value: 200, duration: 500, delay: 1000 },
//     { value: 0, duration: 800 }
//   ],
//   rotate: {
//     value: "1turn",
//     easing: "easeInOutSine",
//     delay: 1000
//   }
// });

// anime({
//   // select the element to animate
//   targets: "div.box.green",
//   // program the animation
//   translateY: [
//     { value: 200, duration: 500, delay: 2000 },
//     { value: 0, duration: 800 }
//   ],
//   rotate: {
//     value: "1turn",
//     easing: "easeInOutSine",
//     delay: 2000
//   }
// });

// anime({
//   // select the element to animate
//   targets: "div.box.yellow",
//   // program the animation
//   translateY: [
//     { value: 200, duration: 500, delay: 3000 },
//     { value: 0, duration: 800 }
//   ],
//   rotate: {
//     value: "1turn",
//     easing: "easeInOutSine",
//     delay: 3000
//   }
// });

var playPause = anime({
  // select the element to animate
  targets: "div.box",
  // program the animation
  translateY: [{ value: 200, duration: 1000 }, { value: 0, duration: 2000 }],
  rotate: {
    value: "1turn",
    easing: "easeInOutSine"
  },
  delay: function(el, i, l) {
    return i * 2000;
  },
  autoplay: false,
  loop: true
});

document.querySelector("#boxes #btns .play").onclick = playPause.play;
document.querySelector("#boxes #btns .pause").onclick = playPause.pause;
