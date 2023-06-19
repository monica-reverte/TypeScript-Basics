"use strict";
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    const activateBatsignal = () => {
        return "Batsignal activeted";
    };
    console.log(typeof activateBatsignal);
    const heroName = returnName();
})();
