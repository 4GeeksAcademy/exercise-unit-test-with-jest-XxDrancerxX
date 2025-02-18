const fromEuroToDollar = function(valueInEuro){
      let valueInDollar = valueInEuro * 1.07;
      return valueInDollar
}

const fromDollarToYen = function(dollar){
      const yenAmount = dollar * (156.5/1.07);
      return yenAmount;
}

const fromYenToPound = function(yen){
    const poundAmount = yen * (1 / 156.5 * 0.87);
    return poundAmount;
}

module.exports = {fromDollarToYen,fromEuroToDollar,fromYenToPound};

   // let oneEuroIs = {
        //     "JPY": 156.5, // japan yen
        //     "USD": 1.07, // us dollar
        //     "GBP": 0.87, // british pound
        // }