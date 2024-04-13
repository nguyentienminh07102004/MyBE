// Scope là phạm vi truy cập gồm 2 phạm vi:
    // let a = 10; // Khai báo kiểu global - Toàn cục
    // let test = () => {
    //     console.log(a);
    // }
    // test(a);

// Local - Khai báo kiểu cục bộ
    // let test2 = () => {
    //     console.log(x);
    //     var x = 9; // Đây là khai báo trong 1 hàm => var nếu khai báo trong 1 khối như if - while thì nó mới là global.
    // }
    // test2();
    // console.log(x);


// Variable in hoisting
// từ khoá var trong js có tính hoisting

// Ex1: 
    // console.log(a); // => Trả về undefine
    // var a = "Hello";
// Hoisting sẽ chuyển phần KHAI BÁO biến lên đầu nên sẽ không bị lỗi.
// Nó sẽ tương đương với 
    // var a; // Khai báo biến a
    // console.log(a); // => Chỉ khai báo chưa gán giá trị nên là undefine
    // a = "Hello";
// Note: 'let' và 'const' không có hoisting

// Function in hoisting
    // Declaration function
    // test(); // => In ra "OK" nên có tính hoisting
    // function test(){
    //     console.log("OK");
    // }

    // Expression function
    // test(); // nó báo là không thể truy cập trước khi khai báo
    // var test = function (){
    //     console.log("OK");
    // }


// This trong js
    //console.log(this); // Nó trả về phần tử cấp cao nhất là window

    const button = document.querySelector("#button");
    //console.log(button);
    button.addEventListener("click", () => {
        console.log(this);
    });

    const inforUser = {
        fullName: "Dang Phuong Nam",
        email: "namtest@gmail.com",
        phone: "0123456789",
        getPhone: function(){
            console.log(this.phone);
        }
    }
    inforUser.getPhone();
// Note: Arrow function không tồn tại this nên sẽ trả về window.

// Module
