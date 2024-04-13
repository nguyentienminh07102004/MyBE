/*
Cho một mảng đối tượng JSON chứa thông tin các sản phẩm.
Viết một hàm calculateTotalQuantity() để tính tổng số lượng sản phẩm từ mảng đối tượng JSON.
*/
const productsJSON = `
  [
    {
      "id": 1,
      "name": "iPhone 12",
      "quantity": 10
    },
    {
      "id": 2,
      "name": "Samsung Galaxy S21",
      "quantity": 5
    },
    {
      "id": 3,
      "name": "Google Pixel 5",
      "quantity": 8
    }
  ]
`;
const calculateTotalQuantity = (productsJSON) => {
    return JSON.parse(productsJSON).reduce((total, value) => {
        return total + value.quantity;
    }, 0);
}
console.log(calculateTotalQuantity(productsJSON));