/*//Permite recibir varias variables anteponiendo los tres
 puntos de la variable*/
const cartaPostres =(postre:string, ...frutas:string[]):void=>{
    console.log(`El postre es ${postre} y tiene ${frutas}`)
}
cartaPostres('Fusion','Kiwwi','coco','limon')