/*
Importamos el codigo de otras clases con la 
palabra import (sus parametros) y la ruta donde 
se encuentra dicha informacion (en winD con ./)
*///podemo importar, todo separando con comas ' , '
import {nombre, Persona,Humano,mostrar} from './13-ModuloA'

const humano:Humano={nombre :'Daniel'}
console.log(nombre)
mostrar('Alexx')

/*
tambien se puede trabajar como en Sql con alias(as)

import * as paquete from 'from './13-ModuloA''

paquete,mostrar('Alexx')
 */