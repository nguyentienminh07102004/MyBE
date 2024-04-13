fetch("https://api.ipify.org/?format=json")
.then(response => response.json())
.then(data => {
    const display = document.querySelector(".ipAddress");
    display.innerHTML = data.ip;
})
.catch((error) => {
    console.log(error);
})