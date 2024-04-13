// function addTwoNumber(){
//     let sum = 0;
//     for(value of arguments){
//         sum += value;
//     }
//     return sum;
// }
// console.log(addTwoNumber(100, 200, 300, 500, 500, 600));
// let sum = (...a) => {
//     let sum = 0;
//     for(let value of a){
//         sum += value;
//     }
//     return sum;
// }
// //let a = [100, 200, 300, 400, 500, 600, 550];
// console.log("Sum = " + sum(100, 200, 700));

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = (array) => {
//     let sum = 0;
//     for(value of array){
//         if(value % 2 == 0) sum += value;
//     }
//     return sum;
// }
// console.log(sum(arr));
// Thêm "..." vào trước tham số của hàm nếu như đối số là các phần tử mảng còn tham số là tên mảng
// còn lại nếu như tham số là mảng còn đối số cũng kà mảng thì không cần thêm "..."

//Ví dụ 2
// let sum = (n) => {
//     return (n + 1) / 2;
// }
// let n = +prompt("Enter the value you want: ");
// console.log(sum(n));
// 2.Try-catch
// try {
//     console.log(10);
// } catch (error) {
//     consol.log(error);
// }finally{

// }
// const infor = {
//     name: "Nguyen Tien  Minh",
//     dateOfBirth: "2004-10-07",
//     address: "Hai Duong"
// }
// console.log(infor);
// infor.email = "nguyentienminhntm07102004@gmail.com";
// infor["phone"] = "0904756287";
// console.log(infor);
// delete infor.phone;
// console.log(infor);

// funcsion forEach
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.forEach((value, index, array) => {
//     if(value == 1) value = 2;
// });

const subject = [
    {
        name: "Math",
        score: 8.6
    },
    {
        name: "Physical",
        score: 10
    },
    {
        name: "Chemisty",
        score: 8.5
    },
    {
        name: "Information",
        score: 8.8
    },
    {
        name: "Information",
        score: 9.4
    }
];
// tat ca cacs phaan tu trong mang ddeu phaai lon hon dieeu kien
// let checkGoodStudent = subject.every((value) => {
//     return value.score >= 8;
// });
// // chi can 1 phan tu dung voi dieu kien dua ra
// let checkAverageStudent = subject.some((value) => {
//     return value.score < 5;
// });
// console.log(checkGoodStudent);
// console.log(checkAverageStudent);
// hàm find trả về kết quả đầu tiên của mảng được tìm thấy, nếu không tồn tại trả về undefind
// hàm filter giống hàm find nhưng trả về 1 mảng tất cả các phần tử thoả mãn
// let sub = subject.filter((value) => {
//     return value.name === "Information";
// });
// let Map = subject.map((value) => {
//     return value.name === "Information";
// });
// console.log(Map);
// let numbers = [1, 2, 3, 4, 5];
// let cnt = 1;
// numbers.reduce((total, value) => {
//     console.log("Lan lap thu " + cnt);
//     console.log("total = " + total);
//     console.log("value = " + value);
//     cnt++;
//     return total + value;
// }, 0);
let Total = subject.reduce((total, value) => {
    return total + value.score;
}, 0);
console.log(Total / subject.length);
let string = "Chang con gi het";
let New = string.split(" ").map(data => {
    return data.charAt(0).toUpperCase() + data.slice(1, data.length);
});
console.log(New);