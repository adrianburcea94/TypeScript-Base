// Type 'any'. You can assign any type to a variable of type 'any'
// Use 'unknown' instead of 'any'!!!

function mySum(a: number, b: number) {
  return a.toFixed() + b.toFixed();
}

const div = document.getElementById("app");
if (div !== null) {
  console.log(div.textContent);
}