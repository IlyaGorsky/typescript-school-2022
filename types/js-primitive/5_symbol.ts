/**
 * @name Symbol
 * @description Примитивный тип Symbol предоставляет уникальные идентификаторы, которые при
 *              желании могут использоваться в качестве индексируемых членов объекта
 */
let someSymbol: symbol; // тип будет выведен явно
const uniqKey = Symbol("__meta__");

let someObject = {
    [uniqKey]: "hashMeta",
};
let hash: string = someObject[uniqKey];
