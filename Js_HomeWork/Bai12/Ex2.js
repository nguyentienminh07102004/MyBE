// Viết một hàm có tên forEachPair() nhận vào hai tham số: 
// Tham số đầu tiên là một mảng.
// Tham số thứ hai là một hàm callback (Đặt tên cho hàm callback là consoleLog()).
// Gọi hàm callback consoleLog() này với từng cặp phần tử liên tiếp của mảng array sau đó in ra màn hình console tổng của từng cặp phần tử liên tiếp đó.

let callback = (arr) => {
    let newArr = new Array();
    for(let i = 0; i < arr.length - 1; i++){
        newArr.push(arr[i] + arr[i + 1]);
    }
    newArr.forEach(element => {
        console.log(element);
    });
}
let forEachPair = (arr, callback) => {
    callback(arr);
}
forEachPair([1, 2, 3, 4, 5], callback);