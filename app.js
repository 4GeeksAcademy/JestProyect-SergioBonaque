// app.js

let oneEuroIs = {
    "JPY": 156.5, // Japanese yen
    "USD": 1.07,  // US dollar
    "GBP": 0.87   // British pound
};

// Euro → Dollar
function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}

// Dollar → Yen
function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs.USD;   // Convert USD to EUR
    return euros * oneEuroIs.JPY;          // Convert EUR to JPY
}

// Yen → Pound
function fromYenToPound(yen) {
    let euros = yen / oneEuroIs.JPY;       // Convert JPY to EUR
    return euros * oneEuroIs.GBP;          // Convert EUR to GBP
}

// Export all functions
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };