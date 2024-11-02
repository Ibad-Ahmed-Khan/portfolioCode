let box = [];
const fun1 = () => {
  for (let i = 1; i <= 20; i++) {
    box.push(i);
  }
  const two = box.map((item) => item * 2);
  return two;
};

console.log(fun1());
