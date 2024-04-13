// Viết hàm truyền vào 2 tham số. Sau đó tìm số lớn nhất trong 2 số đó.
    // let max = (number_1, number_2) => {
    //     return (number_1 < number_2) ? number_2 : number_1;
    // }


// Đề bài: Viết hàm kiểm tra đầu vào đã cho:
// Nếu đầu vào chia hết cho 3 in ra: "Fizz"
// Nếu đầu vào chia hết cho 5 in ra: "Buzz"
// Nếu đầu vào chia hết cho 3 hoặc 5 in ra: "FizzBuzz"
// Nếu đầu vào KHÔNG chia hết cho 3 hoặc 5 in ra: Giá trị đầu vào
// Nếu đầu vào không phải là kiểu Number in ra: "Vui lòng nhập số!"

    // let isfizzBuzz = (number) => {
    //     let res = "Vui lòng nhập số!";
    //     if (typeof number === "number") {
    //         let num = parseInt(number);
    //         if (num % 15 === 0) {
    //             res = "FizzBuzz";
    //         } else if (num % 3 === 0) {
    //             res = "Fizz";
    //         } else if (num % 5 === 0) {
    //             res = "Buzz";
    //         } else {
    //             res = number;
    //         }
    //     }
    //     return res;
    // }

    // const checkFizzBuzz1 = isfizzBuzz("one");
    // console.log(checkFizzBuzz1); // Vui lòng nhập số!


    // const checkFizzBuzz2 = isfizzBuzz(true);
    // console.log(checkFizzBuzz2); // Vui lòng nhập số!


    // const checkFizzBuzz3 = isfizzBuzz(9);
    // console.log(checkFizzBuzz3); // Fizz


    // const checkFizzBuzz4 = isfizzBuzz(10);
    // console.log(checkFizzBuzz4); // Buzz


    // const checkFizzBuzz5 = isfizzBuzz(30);
    // console.log(checkFizzBuzz5); // FizzBuzz


    // const checkFizzBuzz6 = isfizzBuzz(11);
    // console.log(checkFizzBuzz6); // 11

// Đề bài: Giả sử một người đi xe ô tô, có vận tốc là x (km/h). Viết hàm kiểm tra đầu vào x:
// Nếu đầu vào x có vận tốc dưới 70km in ra: 'Vận tốc an toàn"
// Nếu đầu vào x có vận tốc trên 70km, cứ vượt quá tốc độ mỗi 5km/h bị phạt 30000đ, in ra: "Bạn đã bị phạt: " + Số tiền bị phạt
// Nếu đầu vào x có vận tốc trên 70km, bị tước giấy phép lái xe, in ra: "Bạn đã bị tước giấy phép lái xe"

    // const SPEEDLIMIT = 70;
    // const KMPERPOINT = 5;
    // const MONEY = 30000;
    // const OVERSPEEDLIMIT = 100;
    // let checkSpeedLimit = (speed) => {
    //     let res = "Vận tốc an toàn!";
    //     if(speed > OVERSPEEDLIMIT){
    //         res = "Bị tước giấy phép lái xe";
    //     }else if(speed > SPEEDLIMIT){
    //         res = "Bạn bị phạt: " + (parseInt((speed - SPEEDLIMIT) / KMPERPOINT) * MONEY); 
    //     }
    //     return res;
    // }
    // const checkPoin1 = checkSpeedLimit(40);
    // console.log(checkPoin1); // Vận tốc an toàn


    // const checkPoin2 = checkSpeedLimit(70);
    // console.log(checkPoin2); // Vận tốc an toàn


    // const checkPoin3 = checkSpeedLimit(75);
    // console.log(checkPoin3); // Bạn đã bị phạt: 30000đ


    // const checkPoin4 = checkSpeedLimit(99);
    // console.log(checkPoin4); // Bạn đã bị phạt: 150000đ


    // const checkPoin5 = checkSpeedLimit(120);
    // console.log(checkPoin5); // Bạn đã bị tước giấy phép lái xe


// Viết hàm kiểm tra và chỉ in ra các cặp key, value có value là kiểu string
    // let showStringProperties = (object) => {
    //     for(let key in object){
    //         if(typeof object[key] === "string"){
    //             console.log(key + ": " + object[key]);
    //         }
    //     }
    // }
    // // Ví dụ:
    // const person = {
    //     name: "Le Van A",
    //     age: 40,
    //     height: 175,
    //     country: "Viet Nam",
    //     designation: "UI Developer"
    // };
    // showStringProperties(person);

// Check số nguyên tố
    // let isPrime = (number) => {
    //     for(let i = 2; i <= Math.sqrt(number); i++){
    //         if(number % i == 0) return false;
    //     }
    //     return number > 1;
    // }
    // let showPrime = (count) => {
    //     for(let i = 2; i <= count; i++){
    //         if(isPrime(i)){
    //             document.write(i + "<br>");
    //         }
    //     }
    // }
    // showPrime(1200);
// Viết một hàm nhận thời gian ở định dạng AM/PM 12 giờ và trả về một chuỗi biểu diễn thời gian ở định dạng 24 giờ.
    // let convertTime = (time) => {
    //     let res = time.slice(0, time.length - 2);
    //     if(time.charAt(time.length - 2) == "P"){
    //         if(time.slice(0, 2) !== "12") res = parseInt(time.slice(0, 2)) + 12 + time.slice(2, time.length - 2);
    //     }else{
    //         if(time.slice(0, 2) === "12"){
    //             res = "00" + time.slice(2, time.length - 2);
    //         }
    //     }
    //     return res;
    // }
    // var test1 = convertTime("07:05:45PM");
    // console.log(test1); // 19:05:45


    // var test2 = convertTime("12:40:22AM");
    // console.log(test2); // 00:40:22


    // var test3 = convertTime("12:45:54PM");
    // console.log(test3); // 12:45:54

// Viết một hàm để lấy được đuôi mở rộng của 1 file bất kỳ.

    // let extensionFilename = (fileName) => {
    //     let res = "";
    //     if(fileName.indexOf(".") === -1){
    //         res = "Đây không phải là file";
    //     }else{
    //         res = (fileName.split("."))[1];
    //     }
    //     return res;
    // }
    // console.log(extensionFilename("abc.java"));

//     Cho một mảng myFriends, hãy lấy ra danh sách tên bạn bè trong mảng myFriends.
        // Input:
        // const myFriends = [1, 2, "Nam", "Hùng", 3, 4, "Hòa", 6, "Long"];
        // Output:
        // ["Nam", "Hùng", "Hòa", "Long"];
    

        let getName = (arr) => {
            return arr.filter((value) => {
                return typeof value === "string";
            });
        }
        const myFriends = [1, 2, "Nam", "Hùng", 3, 4, "Hòa", 6, "Long"];
        console.log(getName(myFriends));