var item = { name: "aaaa", age: "16" };
const newItem = { ...item };
//const newItem = item;
item.name = "bbb";
console.log(newItem);
