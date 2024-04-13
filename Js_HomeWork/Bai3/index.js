// Đề bài:
// Theo lý thuyết thì số nguyên dương là tập hợp những số chia hết cho 1 và lớn hơn 0. Tức là dãy số 1, 2, 3 ,4 ,5 ,6 ... chính là các số nguyên dương.
// Dùng hàm prompt để tạo ô nhập và lấy ra giá trị từ ô nhập đó.
// Viết một hàm kiểm tra số nhập vào có phải số nguyên dương hay không? 
// Nếu đúng alert ra YES.
// Nếu sai alert ra NO.

    // let isPositiveInteger = (number) => {
    //     return number > 0 && number % 1 === 0;
    // }
    // let number = prompt("Enter your value: ");
    // if(isNaN(number)){
    //     console.log("Đây không là 1 số!");
    // }else{
    //     console.log(isPositiveInteger(number) === true ? "YES" : "NO");
    // }


// Một hình gồm n cạnh và n góc. Nhập vào số n và một mảng gồm n phần tử chứa các góc (độ) của một hình (hình tam giác, hình vuông,…).
// Lưu ý:
// Trả về false nếu n < 3.
// Tổng các góc trong là (n - 2) x 180°.

    // let isShapePossible = (number, arr) => {
    //     if(number <= 2) return false;
    //     if(arr.some((value) => {
    //         return value <= 0 || value >= 180;
    //     }) === true) return false;
    //     return arr.reduce((total, angel) => {
    //         return total + angel;
    //     }, 0) === (number - 2) * 180;
    // }

    // console.log(isShapePossible(5, [500, 0, 20, 10, 10]));

    // const test1 = isShapePossible(4, [90, 90, 90, 90]);
    // console.log(test1); // true


    // const test2 = isShapePossible(3, [20, 20, 140]);
    // console.log(test2); // true


    // const test3 = isShapePossible(1, [21]);
    // console.log(test3); // false


// Tạo một hàm nhận vào một câu văn và trả về chữ viết tắt của câu văn đó. Lấy tất cả các từ có độ dài lớn hơn hoặc bằng n ký tự và trả về chữ cái đầu tiên của mỗi từ, được viết hoa.
// Ví dụ: 
// "Xin chào! Tôi tên là Nam." —> "XCTTLN"
// "Xin chào! Tôi tên là Nam." và n = 3 —> "XCTTN", Chữ "là" bị bỏ qua, vì có 2 ký tự, nhỏ hơn n = 3
// "Xin chào! Tôi tên là Nam." và n = 4 —> "CN", Các chữ có 3 ký tự trở xuống bị bỏ, vì n = 4
    
    // const abbrevitate = (string, MAXLENGTH = 0) => {
    //     let arr = string.split(" ").filter((value) => {
    //         return value.length >= MAXLENGTH;
    //     });
    //     //console.log(arr);
    //     let result = arr.reduce((res, value) => {
    //         return res += value.charAt(0).toUpperCase();
    //     }, "");
    //     return result;
    // };
    // console.log(abbrevitate("Xin chào! Tôi tên là Nam.", 4));

// Đề bài:
// Tạo một hàm thay đổi kiểu viết (hoa hoặc thường) của các chữ cái trong một chuỗi.
// Viết xen kẽ 1 chữ hoa xong đến 1 chữ thường, lặp đi lặp lại cho đến hết chuỗi.
// Lưu ý: 
// Ký tự đầu tiên phải luôn luôn là HOA.
// Bỏ qua khoảng trắng.
// Ví dụ: 
// "Khá Bảnh" —> "KhÁ bẢnH"
// "Khổ trước sướng sau thế mới giàu." —> "KhỔ tRưỚc SưỚnG sAu ThẾ mỚi GiÀu."
// ""Giàu trước khổ sau thế càng đau." —> "GiÀu TrƯớC kHổ SaU tHế CàNg ĐaU."

    // const alternatingCaps = (string) => {
    //     return string.split(" ").map(value => {
    //         return value.split("").map((item, index) => {
    //             return index % 2 === 0 ? item.toUpperCase() : item.toLowerCase();
    //         }).join("");
    //     }).join(" ");
    // }
    // console.log(alternatingCaps("Khổ trước sướng sau thế mới giàu."));
    
// Đề bài:
// Trung vị của một nhóm số là số ở giữa khi nhóm được sắp xếp.
// Nếu kích thước của nhóm là chẵn, trung vị là trung bình cộng của hai số ở giữa.
// Cho một dãy số đã sắp xếp, trả về giá trị trung bình (được làm tròn đến một chữ số thập phân nếu giá trị trung bình không phải là số nguyên).
    
    let median = (arr) => {
        let res = 0;
        if(arr.length % 2 == 0){
            let avg = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
            if(avg === Math.floor(avg)) res = avg;
            else res = avg.toFixed(1);
        }else{
            res = arr[arr.length / 2];
        }
        return res;
    }
    