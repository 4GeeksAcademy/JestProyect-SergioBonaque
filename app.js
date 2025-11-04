// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen (dollars){
let euros = dollars / oneEuroIs["USD"];
return euros * oneEuroIs ["JPY"]
}

function fromEuroToDollar (euros) {
return euros * oneEuroIs ["USD"];
}

function fromYenToPound (yen) {
let euros = yen / oneEuroIs ["JPY"];
return euros * oneEuroIs ["GBP"];
}