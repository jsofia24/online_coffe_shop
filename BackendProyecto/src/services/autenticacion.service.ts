import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { Cliente } from '../models';
import { ClienteRepository } from '../repositories';
import { Llaves } from '../config/llaves';
const generador = require('password-generator');
const cryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(ClienteRepository)
    public clienteRepository : ClienteRepository
  ) {}

  /*
   * Add service methods here
   */
  GenerarClave(){
    let clave = generador(8, false);
    return clave;
  }

  CifrarClave(clave:string){
    let claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }

  IdentificarCliente(usuario: string, clave: string){
    try{
      let c = this.clienteRepository.findOne({where: {correo: usuario, clave: clave}})
      if(c){
        return c;
      }
      return false;
    }catch{
      return false;
    }
  }

  GenerarTokenJWT(cliente: Cliente){
    let token = jwt.sign({
      data:{
        id: cliente.id,
        correo: cliente.correo,
        nombre: cliente.nombres
      }
    },
      Llaves.claveJWT) //El crea el token con la llave que se le de, por eso es secreta
      return token;
  }

  ValidarTokenJWT(token: string){
    try{
      let datos = jwt.verify(token, Llaves.claveJWT);
      return datos;
    }catch{
      return false;
    }
  }
}
