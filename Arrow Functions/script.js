// function squreOfTwoNumbers(number) {
//     return number * number;
// }
// console.log(squreOfTwoNumbers(5));

// const squre = function (number) {
//     return number * number;
// }
// console.log(squre(5));

const squre = number => number * number;
console.log(squre(5));

const cube = number => number * number * number;
console.log(cube(5));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

const activeJobs1 = jobs.filter(function(job) { return job.isActive });
console.log(activeJobs1)

const activeJobs2 = jobs.filter(job => job.isActive);
console.log(activeJobs2);