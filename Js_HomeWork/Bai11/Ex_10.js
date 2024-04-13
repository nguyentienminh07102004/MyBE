const dataJSON = `
  [
    {
      "name": "Lê Văn A",
      "age": 30,
      "skills": ["JavaScript", "HTML", "CSS"]
    },
    {
      "name": "Nguyễn Thị B",
      "age": 25,
      "skills": ["Python", "Java", "C++"]
    },
    {
      "name": "Đỗ Văn C",
      "age": 35,
      "skills": ["Ruby", "PHP", "SQL"]
    }
  ]
`;
const data = JSON.parse(dataJSON);
console.log(data.map(value => value.name));