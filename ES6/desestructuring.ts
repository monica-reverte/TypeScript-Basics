(()=>{

    type Avengers = {
        nick: string,
        ironman: string,
        vision: string,
        activo: boolean,
        poder: true,
    }

    const avengers = {
        nick: "Samuel L.Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500.123123,
    }

    // const { poder, vision} = avengers

    // console.log(poder.toFixed(2), vision.toLocaleUpperCase())

    const printAvenger = ({ironman, ...resto}:Avengers) => {
        console.log(ironman, resto);
    }

    // printAvenger(avengers);


    const avengersArr: [string, boolean, number] = ["cap.america", true, 150.23];

    const [ capitan , ironman, ] = avengersArr;

    

})()