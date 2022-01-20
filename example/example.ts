const defaults = {
    delimiter: "\u2009",
    fractionDelimiter: ",",
    numberCountInGroup: 3,
    decimalLimit: 0,
};

type Params = Partial<typeof defaults>; 

const NumberFormatterModule = function (passedParams: Params) {
    const params = { ...defaults, ...passedParams };
    
    const clean = function (text: string) {
        const splittedText = text
            .replace(/[^\d.,]+/g, "")
            .replace(/[.,]/, "#") // Первый разделитель меняем на #
            .replace(/[.,]/g, "") // Удаляем все остальные разделители
            .split("#"); // Разрезаем по первому разделителю

        if (splittedText[0] === "" && splittedText.length === 2) {
            return "";
        }

        if (params.decimalLimit === null) {
            return splittedText.join(".");
        } else if (params.decimalLimit === 0 || splittedText.length === 1) {
            return splittedText[0];
        }

        return `${splittedText[0]}.${splittedText[1].slice(
            0,
            params.decimalLimit
        )}`;
    };

    
    const format = function (text: string) {
        const integerGroupsSplit = new RegExp(
            `\\B(?=(\\d{${params.numberCountInGroup}})+(?!\\d))`,
            "g"
        );
        const splittedText = clean(text).split(".");
        splittedText[0] = splittedText[0].replace(
            integerGroupsSplit,
            params.delimiter
        );

        return splittedText.join(params.fractionDelimiter);
    };

    const validate = function (text: string) {
        if (params.decimalLimit !== 0 && (text === "," || text === ".")) {
            return true;
        }

        return (
            text
                .split(params.delimiter)
                .join("")
                .replace(params.fractionDelimiter, ".") === clean(text)
        );
    };

    return {
        clean,
        format,
        validate,
        delimiter: params.delimiter,
        numberCountInGroup: params.numberCountInGroup,
    };
};

export default NumberFormatterModule;
