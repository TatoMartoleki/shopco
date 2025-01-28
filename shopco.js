const apiEndpoint = "https://fakestoreapi.com/products";
const productsList = document.getElementsByClassName('products__list')


fetch(apiEndpoint)
    .then(Response => Response.json())
    .then(data => {
        const firstTwo = data.slice(0, 2);
        const secondTwo = data.slice(2, 4);
        const thirdTwo = data.slice(4, 6)
        const fourthTwo = data.slice(6, 8)

        firstTwo[0].rating.rate = 4.5
        firstTwo[0].title = "Fjallraven - Foldsack Backpack"
        firstTwo[0].rating.img = "./images/Frame 104.5.png"
        firstTwo[1].rating.rate = 3.5
        firstTwo[1].title = "Mens Casual Premium T-Shirts"
        firstTwo[1].rating.img = "./images/Frame 103.5.png"
        // firstTwo[1].price = 240
        firstTwo[1].rating.sale = 20

        secondTwo[0].rating.rate = 4.5
        secondTwo[0].rating.img = "./images/Frame 104.5.png"
        secondTwo[1].rating.rate = 3.5
        secondTwo[1].rating.img = "./images/Frame 103.5.png"
        // secondTwo[1].price = 240
        secondTwo[1].rating.sale = 20


        thirdTwo[0].rating.rate = 4.5
        thirdTwo[0].rating.img = "./images/Frame 104.5.png"
        thirdTwo[0].title = "Dragon Station Chain Bracelet"
        thirdTwo[1].rating.rate = 3.5
        thirdTwo[1].rating.img = "./images/Frame 103.5.png"
        // thirdTwo[1].price = 135
        thirdTwo[1].rating.sale = 30


        fourthTwo[0].rating.rate = 4.5
        fourthTwo[0].rating.img = "./images/Frame 104.5.png"
        fourthTwo[1].rating.rate = 3.5
        fourthTwo[1].rating.img = "./images/Frame 103.5.png"
        fourthTwo[1].title = "Pierced Owl Rose Gold Plated"
        // fourthTwo[1].price = 135
        fourthTwo[1].rating.sale = 30




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

        firstTwo.forEach(product => {
            const productElement = createProductElement(product);
            productsList[0].appendChild(productElement);
        });

        secondTwo.forEach(product => {
            const productElement = createProductElement(product);
            productsList[1].appendChild(productElement);
        });

        thirdTwo.forEach(product => {
            const productElement = createProductElement(product);
            productsList[0].appendChild(productElement);
        });

        fourthTwo.forEach(product => {
            const productElement = createProductElement(product);
            productsList[1].appendChild(productElement);
        });



    }).catch(error => console.error('Error fetching data:', error));