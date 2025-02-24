const fromEuroToDollar = function(euroUnit){
      let dollarInEuro = euroUnit * 1.07; 
      return dollarInEuro
}

const fromDollarToYen = function(dollarUnit){
      const yenInDollar = dollarUnit * (156.5/1.07);
      return yenInDollar;
}

const fromYenToPound = function(yenUnit){
    const poundInYen = yenUnit * (1 / 156.5 * 0.87);
    return poundInYen;
}

module.exports = {fromDollarToYen,fromEuroToDollar,fromYenToPound};

   let oneEuroIs = {
            "JPY": 156.5, // japan yen
            "USD": 1.07, // us dollar
            "GBP": 0.87, // british pound
        }






















