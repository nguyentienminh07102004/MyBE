//window.localStorage.setItem("fullName", "Nguyễn Trung Quang"); // gán giá trị vào bộ nhớ local sto dưới dạng key - value
console.log(window.localStorage.getItem("fullName")); // lấy ra giá trị trong bộ nhớ
document.querySelector(".title").innerHTML = window.localStorage.getItem("fullName");

const buttonChangeMode = document.querySelector(".change-mode.display");
const Body = document.querySelector("body");
if(window.localStorage.getItem("displayMode") !== null){
    Body.setAttribute("class", window.localStorage.getItem("displayMode"));
}
buttonChangeMode.addEventListener("click", () => {
    let mode = "dark";
    if(Body.getAttribute("class") === "dark") mode = "light";
    Body.setAttribute("class", mode);
    window.localStorage.setItem("displayMode", mode);
    buttonChangeMode.innerHTML = mode;
})