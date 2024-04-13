//Có các phương thức giống hệt Local
// Khác với local thì session chỉ lưu được giá trị trong phiên làm việc đó
const buttonChangeMode = document.querySelector(".change-mode.display");
const body = document.querySelector("body");
if(window.sessionStorage.getItem("displayMode") !== null){
    body.setAttribute("class", window.sessionStorage.getItem("displayMode"));
}
buttonChangeMode.addEventListener("click", () => {
    let mode = "dark";
    if(body.getAttribute("class") === "dark") mode = "light";
    body.setAttribute("class", mode);
    window.sessionStorage.setItem("displayMode", mode);
    buttonChangeMode.innerHTML = mode.toUpperCase();
})