const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// dayNmae is a simple call back function which transform each element in an array
const dayName = weekDays.map(function (day) {
  return "<li>" + day + "</li>";
});
console.log(dayName);

// using arrow functio instead of a simple function
const colors = ["red", "green", "blue"];
const items = colors.map((color) => "<li>" + color + "</li>");
console.log(items);

// Template Literal
const clr_items = colors.map((color) => `<li>${color}</li>`);
console.log(clr_items);