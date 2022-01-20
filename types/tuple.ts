/**
 * @name Tuple
 * @description Tuple (кортеж) описывает строгую последовательность множества типов, каждый
 *               из которых ограничивает элемент массива с аналогичным индексом.
 */
let userInfo: [string, number] = ["Ilya", 26];
let userName = userInfo[0];
let userAge = userInfo[1];

type PersonName = string;
type PersonAge = number;
type PersonZipCode = number;
type Persons = [PersonName, PersonAge];

let persons: [PersonName, PersonAge][] = [];

// mixedTuple.
let extendPersons: [
    ...Persons,
    PersonZipCode?,
    { lat?: number; lng: number }?
][] = [];

extendPersons.push([...userInfo, 123, { lng: 123 }]);


// Кортеж также поддерживает spread оператор
function f(...rest: [number, string, boolean]): void {}

// f(1232, '')
