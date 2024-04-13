let child_01 = document.querySelector("#child-1");
console.log(child_01);

// Lấy ra thẻ cha của nó bằng thuộc tính parentNode
console.log(child_01.parentNode);

// Lấy thẻ con bằng thuộc tính childNodes
console.log(child_01.childNodes); // Các text là các khoảng trắng và dấu enter giữa các element
// Nếu muốn lấy các element con thì dùng querySelectorAll()
console.log(child_01.querySelectorAll(".box"));

// Lấy ra phần tử con đầu tiên
console.log(child_01.firstElementChild);

// Lấy ra phần tử con cuối cùng dùng
console.log(child_01.lastElementChild);

// Lấy ra phần tử cùng cấp kế tiếp
console.log(child_01.nextElementSibling);
// Tương tự với cách lấy phần tử cùng cấp phía trước nó
console.log(child_01.previousElementSibling); // Nếu không có thì ra về null

// nodeName => Trả về tên của thẻ ở đây là thẻ 'div'