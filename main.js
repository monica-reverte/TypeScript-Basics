"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return this.name + '' + this.realName;
        }
    }
});
(() => {
    const client = {
        name: 'Fernando',
        age: 25,
        adress: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAdress(id) {
            return this.adress.city;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        adress: {
            id: 120,
            zip: 'KYS U2A',
            city: 'Toronto',
        },
        getFullAdress(id) {
            return this.adress.city;
        },
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map