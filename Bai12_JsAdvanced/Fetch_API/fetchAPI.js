fetch("https://dummyjson.com/products")
.then((resp) => {
    return resp.json(); // chuyển từ dạng json về dạng object trong js
})
.then((data) => {
    const Ul = document.querySelector(".productsList");
    data.products.map((value) => {
        let product = document.createElement("li");
        product.innerHTML = `${value.title}`;
        Ul.appendChild(product);
    });
})
// fetch cũng là 1 hàm promise có tính chờ đợi