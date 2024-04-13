// 1 hàm trong hàm khác thì là 1 Closure
// Nếu muốn return nhiều hàm closure thì bạn phải sử dụng một object, trong đó mỗi phần tử sẽ là một hàm closure.

const calculator = (a, b) => {
    const add = () => {
        return a + b;
    }
    const diff = () => {
        return a - b;
    }
    return {
        add: add,
        diff: diff
    }
}

console.log(calculator(10, 20).add());