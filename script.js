const men = document.getElementById("men");
const women = document.getElementById("women");
const kids = document.getElementById("kids");
const productsContainer = document.querySelector(".products");

let mensData = [];
let womensData = [];
let kidsData = [];

// Fetch data from JSON endpoint
fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
  .then(response => response.json())
  .then(data => {
    const productData = data.categories;

    productData.forEach(category => {
        if (category.category_name === "Men") {
            mensData = category.category_products;
        }
        if (category.category_name === "Women") {
            womensData = category.category_products;
        }
        if (category.category_name === "Kids") {
            kidsData = category.category_products;
        }
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// Event listeners for buttons
men.addEventListener("click", () => {
    // Clear previous content
    productsContainer.innerHTML = "";

    mensData.forEach(product => {
        const discountPrice = parseInt(((product.compare_at_price - product.price)/product.compare_at_price)*100)
        productsContainer.innerHTML += `
            <div class="product">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product-info">
                    <span class="title">${product.title} . </span>
                    <span class="vendor">${product.vendor}</span>
                </div>
                <div class="price-info">
                    <span class="price">Rs ${product.price}</span>
                    <span class="compare-at-price">${product.compare_at_price}</span>
                    <span class="discount">${discountPrice}% Off</span>
                </div>
                <button class="add-to-cart">Add to Cart</button>
            </div>`;
    });
});

women.addEventListener("click", () => {
    // Clear previous content
    productsContainer.innerHTML = "";

    womensData.forEach(product => {
        const discountPrice = parseInt(((product.compare_at_price - product.price)/product.compare_at_price)*100)
        productsContainer.innerHTML += `
            <div class="product">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product-info">
                    <span class="title">${product.title} . </span>
                    <span class="vendor">${product.vendor}</span>
                </div>
                <div class="price-info">
                    <span class="price">Rs ${product.price}</span>
                    <span class="compare-at-price">${product.compare_at_price}</span>
                    <span class="discount">${discountPrice}% Off</span>
                </div>
                <button class="add-to-cart">Add to Cart</button>
            </div>`;
    });
});

kids.addEventListener("click", () => {
    // Clear previous content
    productsContainer.innerHTML = "";

    kidsData.forEach(product => {
        const discountPrice = parseInt(((product.compare_at_price - product.price)/product.compare_at_price)*100)
        productsContainer.innerHTML += `
            <div class="product">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product-info">
                    <span class="title">${product.title} . </span>
                    <span class="vendor">${product.vendor}</span>
                </div>
                <div class="price-info">
                    <span class="price">Rs ${product.price}</span>
                    <span class="compare-at-price">${product.compare_at_price}</span>
                    <span class="discount">${discountPrice}% Off</span>
                </div>
                <button class="add-to-cart">Add to Cart</button>
            </div>`;
    });
});

