// Conversion rates
let oneEuroIs = {
    "JPY": 156.5, // Japanese yen
    "USD": 1.07, // US dollar
    "GBP": 0.87, // British pound
};

// Function to convert from Euro to Dollar
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    return valueInDollar;
}

// Function to convert from Dollar to Yen
function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs["USD"];
    return euros * oneEuroIs["JPY"];
}

// Function to convert from Yen to Pound
function fromYenToPound(yen) {
    let euros = yen / oneEuroIs["JPY"];
    return euros * oneEuroIs["GBP"];
}

// Exporting all functions
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };