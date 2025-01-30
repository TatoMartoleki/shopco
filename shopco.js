const apiEndpoint = "https://fakestoreapi.com/products?limit=8";
const productsList = document.getElementsByClassName('products__list')




fetch(apiEndpoint)
    .then(Response => Response.json())
    .then(data => {

        const dummyDatabase = [...data]

        const firstFour = data.slice(0, 4)
        const secondFout = data.slice(4, 8)

        console.log(firstFour);



        const firstTwo = data.slice(0, 2);
        const secondTwo = data.slice(2, 4);
        const thirdTwo = data.slice(4, 6)
        const fourthTwo = data.slice(6, 8)

        firstFour[0].rating.rate = 4.5
        firstFour[0].title = "Fjallraven - Foldsack Backpack"
        firstFour[0].rating.img = "./images/Frame 104.5.png"
        firstFour[1].rating.rate = 3.5
        firstFour[1].title = "Mens Casual Premium T-Shirts"
        firstFour[1].rating.img = "./images/Frame 103.5.png"
        // firstTwo[1].price = 240
        firstFour[1].rating.sale = 20

        firstFour[2].rating.rate = 4.5
        firstFour[2].rating.img = "./images/Frame 104.5.png"
        firstFour[3].rating.rate = 3.5
        firstFour[3].rating.img = "./images/Frame 103.5.png"
        // secondTwo[1].price = 240
        firstFour[3].rating.sale = 20


        secondFout[0].rating.rate = 4.5
        secondFout[0].rating.img = "./images/Frame 104.5.png"
        secondFout[0].title = "Dragon Station Chain Bracelet"
        secondFout[1].rating.rate = 3.5
        secondFout[1].rating.img = "./images/Frame 103.5.png"
        // thirdTwo[1].price = 135
        secondFout[1].rating.sale = 30


        secondFout[2].rating.rate = 4.5
        secondFout[2].rating.img = "./images/Frame 104.5.png"
        secondFout[3].rating.rate = 3.5
        secondFout[3].rating.img = "./images/Frame 103.5.png"
        secondFout[3].title = "Pierced Owl Rose Gold Plated"
        // fourthTwo[1].price = 135
        secondFout[3].rating.sale = 30




        const createProductElement = (product) => {
            const productContainer = document.createElement('div');
            productContainer.classList.add('product__container');
            productContainer.innerHTML = `
                <div class=image__box>
                <img src="${product.image}" alt="${product.title}" class="product__image" />
                </div>
                <div class="product__content">
                    <h3 class="product__title">${product.title}</h3>
                    <div class="product__rating">
                        <div class="rating__imgNpoints">
                        <img src="${product.rating.img}"
                        </div>
                        <div class="rating__quantity">
                        <p class="rating__numbers">${product.rating.rate}/<p class="rating__numbers rating__outOf ">5</p></p>
                        </div>
                    </div>
                    <div class="sale__content">
                        <p class="product__price">$${product.rating.sale ? (product.price * (1 - product.rating.sale / 100)).toFixed(2) : product.price}</p>
                        ${product.rating.sale ?
                    `<div class="product__price--box">
                                $${product.price}
                            </div>` : ''}
                        ${product.rating.sale ? `<div class="sale__box">-${product.rating.sale}%</div>` : ''}
                </div>`;
            return productContainer;
        };

        firstFour.forEach(product => {
            const productElement = createProductElement(product);
            productsList[0].appendChild(productElement);
        });

        secondFout.forEach(product => {
            const productElement = createProductElement(product);
            productsList[1].appendChild(productElement);
        });


    }).catch(error => console.error('Error fetching data:', error));

let allProducts = [];

window.onload = function () {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            allProducts = data;
        })
        .catch(error => {
            console.error("Error fetching all products:", error);
        });
};

function searchProducts(query) {
    const filteredProducts = allProducts.filter(product =>
        product.title.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );

    const resultsContainer = document.getElementById('search__results');
    resultsContainer.innerHTML = '';

    if (filteredProducts.length === 0) {
        resultsContainer.innerHTML = 'No products found.';
        return;
    }

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('search__product');
        productDiv.innerHTML = `
                <div class="search__image--wrapper">
                    <img class="search__image" src="${product.image}" alt="${product.title}" />
                </div>
                <div class="search__title--wrapper">
                    <span>${product.title}</span>
                    <span id="search__product--price">$${product.price}</span>
                </div>
            `;
        resultsContainer.appendChild(productDiv);
    });
}

document.getElementById('nav__search--button').addEventListener('click', function (event) {
    event.preventDefault();
    const query = document.getElementById('nav__search--input').value.toLowerCase();

    if (!query.trim()) {
        alert("Please enter a search query.");
        return;
    }

    searchProducts(query);
});

document.getElementById('nav__search--input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const query = document.getElementById('nav__search--input').value.toLowerCase();
        searchProducts(query);
    }
});
