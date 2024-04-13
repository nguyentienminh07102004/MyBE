// Tạo một Promise đơn giản để trả về một số nguyên ngẫu nhiên từ 1 đến 10.
// Nếu random có trả ra giá trị thì in ra dòng: "Số ngẫu nhiên: 8" (Với 8 là một số ngẫu nhiên).
// Nếu random không thành công thì in ra dòng: "Lỗi: Không thể tạo số ngẫu nhiên."

let num = Math.random() * 9 + 1;
let promise = new Promise((resolve, reject) => {
    if(num !== undefined){
        resolve(num);
    }else{
        reject();
    }
});
promise
.then((num) => {
    console.log("So can tim la: " + num);
})
.catch(() => {
    console.log("Không thể tạo số ngẫu nhiên.");
})