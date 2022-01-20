/**
 * Readonly Properties
 * @description Свойства для чтения
 *              Свойства обзначеные readonly могут быть изменины только при первончальном создании объекта
 */
interface IPoint {
    readonly x: number;
    readonly y: number;
}

let cursor: IPoint = {
    x: 20,
    y: 20,
};

// cursor.x = 10;
