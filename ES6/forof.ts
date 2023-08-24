(()=>{

    type Avenger = {
        name: string,
        weapon: string,
    }

    const ironman: Avenger = {
        name: "Ironman",
        weapon: "Armorsuit"
    }

    const captainAmerica: Avenger = {
        name: "Capitan American",
        weapon: "Shell"
    }

    const thor: Avenger = {
        name: "Thor",
        weapon: "Mjolnir"
    }

    const avengers = [ ironman, thor, captainAmerica];

    // for (const avenger of avengers) {
    //     console.log(avenger.name, avenger.weapon)
        
    // }

})()