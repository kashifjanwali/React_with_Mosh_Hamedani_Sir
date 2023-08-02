const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const dayName = weekDays.map(function (day) {
    return "<li>" + day + "</li>";
});
console.log(dayName);

const colors = ["red", "green", "blue"];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items)