const data = [
  { 1001: 100, product: "equity" },
  { 1001: 200, product: "frc" },
  { 1001: 300, product: "fx" },
  { 1001: 0, product: "total" }
];

const unique = [1001, 1002, 1003];

console.log(unique);

unique.forEach((id) => {
  let sum = 0;
  console.log(id);
  data.forEach((value) => {
    sum += value[id];
    if (value.product === "total") {
      value[id] = sum;
      console.log(sum);
    }
  });
});

console.log(data);
