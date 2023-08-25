(()=>{

    interface Client {
        name: string;
        age?: number;
        adress: Adress;
        getFullAdress (id: string):string;
    }

    interface Adress {
        id:number;
        zip:string;
        city: string
    }

    const client:Client  = {
        name: 'Fernando',
        age: 25,
        adress: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAdress(id:string) {
            return this.adress.city;
        }
    }

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        adress: {
            id: 120,
            zip: 'KYS U2A',
            city: 'Toronto',
        },
        getFullAdress(id:string) {
            return this.adress.city;
        },
    }

})()