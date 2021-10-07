"use strict";
exports.__esModule = true;
/*
Importamos el codigo de otras clases con la
palabra import (sus parametros) y la ruta donde
se encuentra dicha informacion (en winD con ./)
*/ //podemo importar, todo separando con comas ' , '
var _13_ModuloA_1 = require("./13-ModuloA");
var humano = { nombre: 'Daniel' };
console.log(_13_ModuloA_1.nombre);
_13_ModuloA_1.mostrar('Alexx');
/*
tambien se puede trabajar como en Sql con alias(as)

import * as paquete from 'from './13-ModuloA''

paquete,mostrar('Alexx')
 */ 
