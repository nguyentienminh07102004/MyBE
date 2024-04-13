// Viết một hàm đặt tên là forEachTest(array, callback) nhận vào hai tham số: 
// Tham số đầu tiên là một mảng.
// Tham số thứ hai là một hàm callback (Đặt tên cho hàm callback là consoleLog()).
// Gọi hàm callback consoleLog() này với từng phần tử của mảng array sau đó in ra màn hình console từng phần tử của mảng đó
let callback = (arr) => {
    for (let value of arr) {
        console.log(value);
    }
}
let forEachTest = (arr, callback) => {
    callback(arr);
}
forEachTest([1, 2, 3, 4, 5], callback);