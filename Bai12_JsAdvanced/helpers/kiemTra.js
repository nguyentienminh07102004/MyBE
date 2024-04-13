const kiemTraSoDuong = (number) => {
    return number > 0 && number % 1 === 0;
}
export {kiemTraSoDuong};

const kiemTraChanLe = (number) => {
    return number % 2 === 1 ? "odd" : "even";
}
export {kiemTraChanLe};