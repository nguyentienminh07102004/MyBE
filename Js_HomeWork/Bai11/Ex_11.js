// Viết một hàm có tên calculateOrderTotal() nhận vào một id đơn hàng và tính tổng giá trị của đơn hàng đó, 
// sử dụng thông tin từ mảng đối tượng JSON "ordersJSON" và "productsJSON".
const ordersJSON = `
  [
    {
      "id": 1,
      "items": [
        {
          "productId": 1,
          "quantity": 2
        },
        {
          "productId": 2,
          "quantity": 1
        }
      ]
    },
    {
      "id": 2,
      "items": [
        {
          "productId": 3,
          "quantity": 3
        }
      ]
    }
  ]
`;


const productsJSON = `
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
let findProduct = (id) => {
    return JSON.parse(productsJSON).find(value => value.id === id).price;
}
let calculateOrderTotal = (id) => {
    let order = JSON.parse(ordersJSON);
    let findOrder = order.find(value => value.id === id);
    if(findOrder === undefined) return "Invalid";
    return findOrder.items.map(value => {
        return value.quantity * findProduct(value.productId);
    }).reduce((total, value) => total += value);
}
console.log(calculateOrderTotal(2));