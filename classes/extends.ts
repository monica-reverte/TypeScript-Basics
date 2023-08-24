(() => {

    class Avenger {
        constructor (
            public name: string,
            public realName: string,

        ){
            // console.log('Constructor Avenger llamado')
        }

        protected getFullName() {
            return `${ this.name } ${ this.realName}`
        }
    }

    class Xman extends Avenger {

        constructor (
            name: string,
            realName: string,
            public isMutant:boolean
        ){
            super(name, realName)
            // console.log('Constructor Xman llamado')
        }

        get fullName() {
            return `${ this.name } - ${this.realName}  `;
        }

        set fullName(name: string) {

            if (name.length < 3 ){
                throw new Error ('El nombre debe de ser mayor de 3 letras')
            }
            this.name = name;
        }

        getFullNameDesdeXman() {
            // console.log( super.getFullName() )
        }

    }

    const wolverine = new Xman('Wolverine', 'Logan', true)

    // console.log(wolverine.fullName)

    // wolverine.fullName = 'Monica'

    // console.log(wolverine.fullName)
    
    // wolverine.getFullNameDesdeXman()


})()