import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Lugar} from './lugar.model';
import {Orden} from './orden.model';

@model()
export class Cliente extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;
  @property({
    type: 'string',
    required: true,
  })
  nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  documento: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  contrasena: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  direccion: string[];

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  metodoPago: string[];

  @belongsTo(() => Lugar)
  lugarId: string;

  @hasMany(() => Orden)
  ordens: Orden[];

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
