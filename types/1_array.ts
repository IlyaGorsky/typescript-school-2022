/**
 * @name Array
 * @description Ссылочный тип данных Array является типизированным спископодобным объектом,
 */
let students = ["Jon", "Jane"];
let counters = [1, 2, 6];
let boolArray = [true, false];

students.push("2132");

let mixedArray: Array<string | number> = [...students, ...counters];
// let mixedArray:(string | number)[]= [...students, ...counters];
// mixedArray.push(true);
