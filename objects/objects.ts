(()=>{
    
    let flash:{ name:string, age:number, powers: string[], getName?:() => string} = {
        name: "Barry Allen",
        age: 24,
        powers: ["super velocidad", "viajar en el tiempo"]

    }

    let superman:{ name:string, age:number, powers: string[], getName?:() => string} = {
        name: "Clark Kent",
        age: 60,
        powers: ["super velocidad"]

    }
    
    

    // flash = {
    //     name: "Clark Kent",
    //     age: 60,
    //     powers: ["super fuerza"],
    //     getName(){
    //         return this.name;
    //     }
    // }

    // console.log(flash.getName())

})()