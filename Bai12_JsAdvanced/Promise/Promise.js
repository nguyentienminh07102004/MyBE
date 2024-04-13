    // let check = 1045;
    // let promise = new Promise((resolve, reject) => {
    //     if(check === undefined){
    //         reject(check);
    //     }else{
    //         resolve(check);
    //     }
    // });

    // promise
    //     .then((number) => {
    //         console.log(number); // đây là biến truyền vào resolve
    //         console.log("Success");
    //         return number;
    //     })
    //     .then((number2) => {
    //         console.log(number2);
    //         if(number2 > 3000){
    //             return number2;
    //         }else{
                
    //         }
    //     }) // then bên dưới phải chờ then bên trên thực hiện xong mới chạy
    //     // Kết quả trả về của hàm then bên trên hàm then bên dưới cũng nhận được
    //     // Nếu hàm then bên trên không trả về gì thì hàm bên dưới là undefine
    //     .then(() => {
    //         console.log("End...");
    //     })
    //     .catch(() => {
    //         console.log("Fail");
    //     })
    // .finally(() => {
    //     console.log("Always...");
    // })
    // finally và catch là không bắt buộc

    // 3 Trạng thái của promise
    // const promise2 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(100);
    //     }, 3000);
    // })
    // console.log(promise2);
    // setTimeout(() => {
    //     setTimeout(() => {
    //         console.log(promise2);
    //     }, 3000);
    // })

    
//Theo ý hiểu khi đọc 1 tài liệu nào đó trên mạng thì đáng lẽ then có 2 hàm để xử lý resolve và reject nhưng sinh ra hàm catch để thay thế khi xử lý lỗi. Đây là ví dụ:
    const promise = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    
    if(randomNumber < .7) {
        resolve('All things went well!');
    } else {
        reject('Something went wrong');
    }
    });
    promise.then((data) => {
        console.log(data);  // prints 'All things went well!'
    },
    (error) => {
        console.log(error); // prints Error object
    }
    );

// JavaScript là một ngôn ngữ bất đồng bộ nghĩa.
// Ví dụ như hàm setTimeout được set là mất 3 giây để chạy nhưng bên dưới có 1 hàm khác ví dụ như console.log() thì thay vì chờ 3 giây cho hàm setTimeout chạy xong rồi chạy hàm
// chạy hàm console.log() thì nó sẽ chạy luôn hàm console.log() rồi chạy tiếp, sau đó 3 giây thì setTimeout trả kết quả rồi thực hiện sau. Nó thực hiện độc lập. >>>>>