// Ví dụ về JSON Object
    // var objectJSON = `
    //     {
    //         "fullName": "Nguyen Tien Minh",
    //         "email": "nguyentienminh@gmail.com",
    //         "phone": "0123456789"
    //     }
    // `;
    // // chuyển từ json sang object trong js
    // let objectJS = JSON.parse(objectJSON);
    // console.log(objectJS);

    // // Note: Chuyển ngược từ object về JSON thì dùng JSON.stringify()
    // let ObjectJSON2 = JSON.stringify(objectJS);
    // console.log(ObjectJSON2);

// Ví dụ về JSON number
    // let numberJS = 10;
    // let numberJSON = `10`;
// convert từ JSON về JS vẫn dùng JSON.parse(); và ngược lại thì dùng stringify().

// Ví dụ về JSON trong string
    // let stringJSON = `"Hello"`;
    // console.log(stringJSON);
//Các hàm vẫn tương tự nhau khi chuyển đổi từ JS về JSON và ngược lại

// Ví dụ về boolean
    // let booleanJS = `true`;

// Check NaN
let NaNJS = 10 / "a";
console.log(NaNJS);
console.log(JSON.stringify(NaNJS));