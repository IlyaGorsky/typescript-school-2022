/**
 * Function
 * @description Интерфейсы способны описывать типы функций
 */
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function (src, sub) {
    // let result = src.search(sub);
    // return 1;
    // return true;
};
