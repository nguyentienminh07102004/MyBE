// Default parameter là tham số mặc định. Nghĩa là nếu không có giá trị truyền vào thì sẽ lấy giá trị này thay thế.
const add = (a = 0, b = 0) => {// đây là gán ở lúc khai báo biến
    return a + b;
}

const diff = (a, b) => {
    a = a || 0;
    b = b || 0;
}
//console.log(add(10));

// Spread syntax lầ cú pháp ...arr dùng để trải các phần tử của mảng và đối tượng. (Không hiểu vì sao lại thế chỉ biết cách dùng)
// Ví dụ
let data = [1, 2, 3];
let data2 = [4, 5, 6];
let data3 = [...data, ...data2]; // data3 = data + data2
    // console.log(data3); // 1, 2, 3, 4, 5, 6

// Rest Parameters để lấy ra các giá trị của các phần tử còn lại của 1 HÀM
// Ví dụ
const sum = (num1, num2, ...numOther) => {
    console.log(numOther);
}
sum(1, 2, 3, 4, 5, 6); // [3, 4, 5, 6]

// destructuring là phá vỡ cấu trúc.
const time = [19, 28, 30];
// Thay vì viết là:
//     const hour = time[0];
//     const minute = time[1];
//     const second = time[2];
const [hour, minute, second] = time; // tương tự như trên nhưng ngăn gọn hơn tương tự với object
