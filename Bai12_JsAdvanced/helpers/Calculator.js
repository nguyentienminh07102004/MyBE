const sum = (a, b, callBack) => {
    console.log(a + b);
    callBack(a + b);
}
export {sum};