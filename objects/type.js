"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["super velocidad", "viajar en el tiempo"]
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["super velocidad"],
        getName() {
            return this.name;
        }
    };
})();
