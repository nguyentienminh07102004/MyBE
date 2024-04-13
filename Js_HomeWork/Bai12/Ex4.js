// Tạo một Promise để lấy danh sách các số chẵn từ một mảng các số nguyên cho trước.
// Nếu trong mảng đó có số chẵn thì in ra mảng mới gồm các số chẵn lấy được từ mảng đó.
// Nếu trong mảng đó không có số chẵn thì in ra thông báo: "Lỗi: Không tìm thấy số chẵn."
let Check = (arr) => {
    new Promise((resolve, reject) => {
        arr = arr.filter(value => value % 2 === 0);
        if(arr.length > 0) resolve(arr);
        else reject();
    })
    .then((arr) => {
        console.log(arr);
    })
    .catch(() => {
        console.log("Khong tim thay so chan");
    })
}
const numbersTest1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Check(numbersTest1);
const numbersTest2 = [11, 13, 15, 17, 19];
Check(numbersTest2);