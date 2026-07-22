/*
fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => {

    let container = document.getElementById("products");

    data.forEach(product => {

        container.innerHTML += `
            <div class="card">
                <img src="${product.image}">
                <h4>${product.title}</h4>
                <p class="price">$${product.price}</p>
                <button onclick='addToCart(${JSON.stringify(product)})'>
                    Add to Cart
                </button>
            </div>
        `;
    });
});

function addToCart(product) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existing = cart.find(p => p.id === product.id);

    if (existing) {
        existing.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart");
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("cart");

function displayCart() {

    container.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        container.innerHTML += `
            <div class="item">
                <img src="${item.image}">
                <div>
                    <h4>${item.title}</h4>
                    <p>$${item.price}</p>

                    Quantity:
                    <input type="number" value="${item.quantity}" min="1"
                    onchange="changeQty(${index}, this.value)">

                    <br><br>
                    <button onclick="removeItem(${index})">Delete</button>
                </div>
            </div>
        `;
    });

    document.getElementById("total").innerText = "Total: $" + total;
}

function changeQty(index, value) {
    cart[index].quantity = parseInt(value);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

displayCart();

let id = localStorage.getItem("productId");

fetch("https://fakestoreapi.com/products/" + id)
.then(res => res.json())
.then(product => {

    document.getElementById("details").innerHTML = `
        <img src="${product.image}">

        <div>
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p class="price">$${product.price}</p>
            <p>Category: ${product.category}</p>
        </div>
    `;
});
*/


/*
//2-
let courses = [
    {
        name: "HTML",
        duration: "2 Months",
        price: 100
    },
    {
        name: "CSS",
        duration: "1 Month",
        price: 80
    },
    {
        name: "JavaScript",
        duration: "3 Months",
        price: 150
    }
];
let container = document.getElementById("courses");

courses.forEach(course => {
    container.innerHTML += `
        <div class="course-card">
            <h3>${course.name}</h3>
            <p>Duration: ${course.duration}</p>
            <p class="price">$${course.price}</p>
        </div>
    `;
});
*/

/*
//3-
var xhr = new XMLHttpRequest();

xhr.open("GET", "p.xml");

xhr.onload = function () {
    if (xhr.status == 200) {

        var xml = xhr.responseXML;

        var courses = xml.getElementsByTagName("course");

        for (var i = 0; i < courses.length; i++) {
            var name = courses[i].getElementsByTagName("name")[0].textContent;
            var duration = courses[i].getElementsByTagName("duration")[0].textContent;

            document.body.innerHTML += `
                <h3>${name}</h3>
                <p>${duration}</p>
            `;
        }
    }
};

xhr.send();

*/


/*
//4-
var xhr = new XMLHttpRequest();

xhr.open("GET", "p.json");

xhr.onload = function () {
    if (xhr.status == 200) {

        var data = JSON.parse(xhr.responseText);

        for (var i = 0; i < data.length; i++) {
            document.getElementById("data").innerHTML += `
                <h3>${data[i].name}</h3>
                <p>${data[i].duration}</p>
            `;
        }

    } else {
        console.log("Error loading JSON");
    }
};

xhr.send();
*/


//5-
var xhr = new XMLHttpRequest();

xhr.open("GET", "p.xml");

xhr.onload = function () {
    if (xhr.status == 200) {

        var xml = xhr.responseXML;
        var courses = xml.getElementsByTagName("course");

        var output = document.getElementById("output");

        for (var i = 0; i < courses.length; i++) {

            var name = courses[i].getElementsByTagName("name")[0].textContent;
            var duration = courses[i].getElementsByTagName("duration")[0].textContent;

            output.innerHTML += `
                <div class="course">
                    <h3>${name}</h3>
                    <p>Duration: ${duration}</p>
                </div>
            `;
        }
    }
};

xhr.send();