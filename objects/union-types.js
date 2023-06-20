"use strict";
(() => {
    let myCustomVariable = "Monica";
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Bruce",
        age: 43,
        powers: [1]
    };
    console.log(myCustomVariable);
})();
