const products = document.querySelectorAll(".product");
const cardWrap = document.querySelector(".card-wrap");

products.forEach(product => {
    const button = product.querySelector(".button");
    button.addEventListener("click", function () {

        const cardWrap = document.querySelector(".card-wrap");

        const productPhoto = product.querySelector("img");
        const productName = product.querySelector(".product-text h3");
        const newPrice = product.querySelector(".new-price");

        const newCard = document.createElement("div");
        newCard.classList.add("card");

        const photo = document.createElement("img");
        const text = document.createElement("p");
        const price = document.createElement("p");

        photo.width = 150;
        photo.height = 150;

        photo.src = productPhoto.src;
        text.innerHTML = productName.innerText;
        price.innerHTML = newPrice.innerText;

        newCard.appendChild(photo);
        newCard.appendChild(text);
        newCard.appendChild(price);

        cardWrap.appendChild(newCard);

    });
});
