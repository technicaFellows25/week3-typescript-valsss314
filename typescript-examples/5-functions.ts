// Usually don't need to add a return type 
// annotation since TypeScript will infer it
function add(a: number, b: number) {
  return a + b;
}

// THIS WILL NOT WORK:
// add(5, "Some string");

const add2 = (a: number, b: number) => {
  return a + b;
}

console.log(add(5, 3));
