import { kiemTraSoDuong } from "../helpers/kiemTra.js";
import { kiemTraChanLe } from "../helpers/kiemTra.js";
import { sum } from "../helpers/Calculator.js";
// callBack là hàm được truyền vào hàm đối số của 1 hàm khác (Ảo thật đấy..........!)
// Ví dụ 1:
    // let work01 = () => {
    //     console.log("Cong viec 1");
    // }
    // let work02 = (func) => { // truyền vào hàm này 1 hàm khác gọi là callBack
    //     console.log("Cong viec 2");
    //     func(); // gọi hàm đó ra ở đây là hàm 1
    // }

    // work02(work01); // không truyền vào 2 dấu ngoặc hàm. Tại sao thì không biết ???

// Ví dụ 2
    // sum(111, -20, (number) => {
    //     console.log(kiemTraChanLe(number));
    //     console.log(kiemTraSoDuong(number));
    // });

// Ví dụ 3
    const loginSuccess = () => {
        console.log("Login success");
    }
    const checkLogin = (data, callBack) => {
        const email = "namtest@gmail.com";
        const password = "2222";
        
        if(data.email === email && data.password === password){
            callBack();
        } else{
            console.log("Login fail");
        }
    }
    let data = {
        email: "namtest@gmail.com",
        password: "2222"
    };
    checkLogin(data, loginSuccess);