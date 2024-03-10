let iconCart = document.querySelector(".icon-cart");
let closCart = document.querySelector(".close");
let body = document.querySelector("body");
iconCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});
closCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});
