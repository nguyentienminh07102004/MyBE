const button = document.querySelector("#button");
let work1 = () => {
    console.log("Work1");
}
let work2 = () => {
    console.log("Work2");
}
// button.onclick = () => {
//     work1();
//     work2();
// }

// addEventListener có thể gọi được nhiều sự kiện khác nhau - 
// DOM Event chỉ có thể gọi 1 sự kiện. Nếu có nhiều sự kiện nó sẽ gọi sự kiện cuối cùng
button.addEventListener("click", () => {
    work1();
});
button.addEventListener("click", () => {
    work2();
});
// Nếu muốn huỷ bỏ đi các sự kiện thì dùng hàm removeEventListener() - Tham số như hàm addEventListener

