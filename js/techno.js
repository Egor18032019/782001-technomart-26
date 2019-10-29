var left = document.querySelector(".left");
var right = document.querySelector(".right");
var sliders = document.querySelectorAll(".sliders");
var i = 1;
sliders[i].classList.add("slider-show");
left.addEventListener("click", slidLeft);
right.addEventListener("click", slidRight);
function slidLeft(evt) {
  evt.preventDefault();
  sliders[i].classList.remove("slider-show");
  i = i - 1;
  if (i <= 0) {
    i = 0;
    console.log("начало");
  }
  if (sliders.length <= i) {
    i = 3;
    console.log("конец");
  }
  sliders[i].classList.add("slider-show");
}
function slidRight(evt) {
  evt.preventDefault();
  sliders[i].classList.remove("slider-show");
  i = i + 1;
  if (i <= 0) {
    i = 0;
    console.log("начало");
    }
  if (sliders.length <= i) {
    i = 2;
    console.log("конец");
  }
  sliders[i].classList.add("slider-show");
}
// left.addEventListener("click",function(evt){
//   evt.preventDefault();
//   console.log("тыкнул влево");
// if(!twoS.classList.contains("slider-show")){
//   twoS.classList.add("slider-show");
//   firstS.classList.remove("slider-show");
//   threeS.classList.remove("slider-show");
// }
// else if (firstS.classList.contains("slider-show")) {
//   console.log("больше нет картинок")
// } else {
//   twoS.classList.remove("slider-show");
//   firstS.classList.add("slider-show");
//   console.log("kak tak");
// }
// });

// // доделать
// right.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   console.log("тыкнул вправо");
//   if (!twoS.classList.contains("slider-show")) {
//     twoS.classList.add("slider-show")
//   } else {
//     twoS.classList.remove("slider-show");
//     threeS.classList.add("slider-show");
//   }
// });
