let iconCart = document.querySelector(".icon-cart");
let closCart = document.querySelector(".close");
let ListProductHtml = document.querySelector(".ListProduct");
let body = document.querySelector("body");

let ListProduct = [];
iconCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});
closCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

const addDataToHTML = () => {
  ListProductHtml.innerHTML = "";
  if (ListProduct.length > 0) {
    ListProduct.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("item");
      newProduct.dataset.id = product.id;
      newProduct.innerHTML = `
      <img src="${product.image}" alt="" />
          <h2>${product.name}</h2>
          <div class="price">$${product.price}</div>
          <button class="addCart">Savatga qo'shish</button>
      `;
      ListProductHtml.appendChild(newProduct);
    });
  }
};

ListProductHtml.addEventListener("click", (event) => {
  let positionClick = event.target;
  if (positionClick.classList.contains("addCart")) {
    let product_id = positionClick.parentElement.dataset.id;
    addToCart(product_id);
  }
});

const addToCart = () => {};

const initApp = () => {
  fetch("product.json")
    .then((response) => response.json())
    .then((data) => {
      ListProduct = data;
      addDataToHTML();
    });
};

initApp();
