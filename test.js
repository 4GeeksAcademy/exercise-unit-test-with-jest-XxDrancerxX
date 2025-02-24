test("converting 3.5 euros to dollars should return the correct value", function() {
    const { fromEuroToDollar } = require('./app.js');
    const euroAmount = 3.5; 
    const expectedDollars = euroAmount * 1.07; 
    expect(fromEuroToDollar(euroAmount)).toBe(expectedDollars); 
});

test("converting 3.5 dollars to yens should return the correct value", function(){
    const {fromDollarToYen} = require('./app.js');
    const dollarAmount = 3.5;
    const expectedYen = dollarAmount * (156.5 / 1.07);
    expect (fromDollarToYen(dollarAmount)).toBe(expectedYen);
    
    });
    
    test("converting 3.5 yens to pounds should return the correct value", function(){
        const {fromYenToPound} = require('./app.js');
        const yenAmount = 3.5;
        const expectedPound = yenAmount * (1 / 156.5 * 0.87);
        expect (fromYenToPound(yenAmount)).toBe(expectedPound);
        
        });

        let oneEuroIs = {
            "JPY": 156.5, // japan yen
            "USD": 1.07, // us dollar
            "GBP": 0.87, // british pound
        }

        























