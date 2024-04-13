// 2.1_Lấy thẻ theo id
    // const h2_01 = document.getElementById("h2-01");
    // console.log(h2_01);
    // const h2_02 = document.getElementById("h2-02");
    // console.log(h2_02);

// 2.2 Lấy thẻ theo tagname
    // const H2s = document.getElementsByTagName("h2");
    // console.log(H2s);

//2.3 Lấy thẻ theo classname
    // const listTitle = document.getElementsByClassName("title");
    // console.log(listTitle);

// 2.4 Lấy thẻ theo selector trong CSS
    // const title = document.querySelector(".title");
    // console.log(title);
    // Note: Lấy tất cả thẻ theo selector bằng querySelectorAll()

// 3.1 Lấy thẻ nội dung bằng thẻ HTML
    // const innerHtmlH2 = document.querySelector("#h2-01").innerHTML;
    // console.log(innerHtmlH2);
    //Note: Nếu chỉ muốn lấy text của thẻ HTML mà không lấy các thẻ khác thì dùng "innerText"
    //document.querySelector("#h2-01").innerHTML = "Xin chào các bạn!";

// 3.2 Lấy các Attribute của thẻ HTML
    // const ClassName = document.querySelector("#h2-03").getAttribute("class");
    // console.log(ClassName);
    // Tìm hiểu thêm thuộc tính classList
// 4.0 DOM CSS: Thay đổi CSS cho 1 element nào đó
    document.querySelector("#h2-01").style.fontSize = "40px";
