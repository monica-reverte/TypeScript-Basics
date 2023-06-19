(()=>{

    const addNumber = (a:number, b:number) => a + b;
    const greet = (name: string ) => `Hola ${name}`;
    const saveTheWorld = () => `el mundo esta salvado`;


    let myFunction:()=> string;

    // myFunction = 10;
    // console.log(myFunction)

    // myFunction = addNumber;
    // console.log(myFunction(1,2))

    // myFunction = greet;
    // console.log(myFunction("Monica"))

    myFunction = saveTheWorld;
    console.log(myFunction())

})()