/**
 * Modificadores:
 *      Private
 *      Public
*/
let user:boolean= false
class Animal{
    private name:string;
    size:number;

    constructor(name:string, size:number){
        this.name=name;
        this.size=size
    }
    move():void{
        console.log('Me estoy moviendo');
    }

    get getName():string{
        return this.name
    }
    set setName(name:string){
        if (user) {
            this.name=name; 
        }else{
            console.log("You don't have permise.")
        }
    }

}

const Pet = new Animal ('Snake', 5)
Pet.move();
Pet.setName = 'Rabbit'
console.log(Pet.getName)