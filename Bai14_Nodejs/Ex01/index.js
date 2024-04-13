const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Xin chào các bạn</h1>");
});
app.get('/about', (req, res) => { // '/about' là trang routing nghĩa là phân trang theo ý hiểu hiện tại
    res.send("<h1>This is about page</h1>");
});
app.get('/blog', (req, res) => {
    res.send("<h1>Day la trang blog</h1>");
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// MPA nghĩa là khi chuyển trang thì nó sẽ load lại hết trang còn SPA thì phần nào thay đổi sẽ load lại còn phần nào không đổi sẽ không
// load lại