/*
Cho một mảng đối tượng JSON chứa thông tin các sản phẩm.
Viết một hàm có tên deleteProduct() nhận vào id của một sản phẩm và xóa sản phẩm đó khỏi mảng JSON "productsJSON" và cập nhật lại mảng.
 */
let productsJSON = `
  [
    {
      "id": 1,
      "name": "iPhone 12",
      "price": 1200
    },
    {
      "id": 2,
      "name": "Samsung Galaxy S21",
      "price": 1000
    },
    {
      "id": 3,
      "name": "Google Pixel 5",
      "price": 900
    }
  ]
`;
let deleteProduct = (id) => {
    return JSON.stringify(JSON.parse(productsJSON).filter(value => value.id !== id));
}
console.log(deleteProduct(2));