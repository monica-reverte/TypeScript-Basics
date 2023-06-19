(()=>{

    const hero: string = "Flash";

    function returnName():string {
        return hero;
    }

    const activateBatsignal = ():string => {
        return "Batsignal activeted";
    }

    console.log(typeof activateBatsignal);

    const heroName = returnName();

})()