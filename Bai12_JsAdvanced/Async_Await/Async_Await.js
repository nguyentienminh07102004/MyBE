// async là biến 1 hàm thường thành 1 hàm promise
// await giống 'then' nó đặt trước 1 câu lệnh để cho lệnh đó thực hiện xong rồi mới chạy tới câu lệnh phía dưới
const fetchAPI = async (API) => {
    const response = await fetch(API); // 'await' được đặt trước hàm fetch để chờ hàm fetch thực hiện xong mới chạy tiếp
    const data = await response.json(); // nếu không có từ khoá "await" thì khi in ra 'data' sẽ hiển thị là pending
    console.log(data);
}
// fetchAPI("https://dummyjson.com/products");
fetchAPI("http://localhost:3000/products")
.then((data) => {
    console.log(data);
})