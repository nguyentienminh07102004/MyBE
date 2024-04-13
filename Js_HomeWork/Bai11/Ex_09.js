const dataJSON = `{
    "name": "Lê Văn A",
    "age": 20,
    "email": "levana@gmail.com",
    "address": {
      "street": "Số 123, đường ABC",
      "city": "Hà Nội",
      "country": "Việt Nam"
    }
  }`;
const inforUser = JSON.parse(dataJSON);
console.log(inforUser.name);
console.log(inforUser.age);
console.log(inforUser.email);
console.log(inforUser.address.street);
console.log(inforUser.address.city);
console.log(inforUser.address.country);