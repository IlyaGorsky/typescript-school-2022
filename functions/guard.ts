const formatPrice = (price: number | string) => {
    if (typeof price === "string") {
        return parseInt(price, 10).toFixed(2);
    }
    return price.toFixed(2);
};

const printDate = (date: Date) => {
    if (date instanceof Date) {
        console.log(date.getDate());
    }
    throw new Error("Invalid date");
};

// printDate(new Date());