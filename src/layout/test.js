var array = [{ a: { name: "aaaa", age: "16" } }];
array.forEach(item => {
  if (item.name) {
    console.log(item);
  }
});
